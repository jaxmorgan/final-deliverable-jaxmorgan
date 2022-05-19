//parsing dates
parseTime = d3.timeParse("%Y");

var rowConverter = function(d) {
    return {
        date: parseTime(d.date),
        actual_mean_temp: +d.actual_mean_temp
    };
}

//Activity 2/3 code
d3.csv('KSEAUPDATE.csv').then(function(data) {

    //Activity 3 code

    var svgPlaceholder = d3.select("svg")
    var holder = svgPlaceholder.selectAll("g")
        .data(data)
        .enter()
        .append("g")
    
        holder.append('circle')
        .attr("class", "player")
        .attr('r', 4)
        .attr('cx', function(d, i) { 
            console.log(d.record_max_temp_year)
            return scaleYear(d.record_max_temp_year);})
        .attr('cy', function(d, i) { 
            console.log(d.actual_mean_temp)
            return scaleDegree(d.actual_mean_temp)})
        .attr('opacity', 0.5)
        .style("fill", function(d) {
            if (d.actual_mean_temp <=60 && d.actual_mean_temp >= 40) {
                return "slateblue";
            } else {
                return "red";
            }
        })
        .on('mouseover', function(d) {
            d3.select(this.parentNode).select('circle').style("opacity", 1)
        })
        .on('mouseout', function(d) {
            d3.select(this.parentNode).select('circle').style("opacity", 0.5)
        })
    
     holder.append("text")
         .attr("class", "name")
         .text(function(d) { return d.date})
         .attr("opacity", 0)
         .attr('transform', function(d) { return 'translate(' + scaleYear(d.record_max_temp_year) + ',' + scaleDegree(d.actual_mean_temp) + ')'})
         .on('mouseover', function(d) {
             d3.select(this.parentNode).select("text").style("opacity", 1)
         })
         .on('mouseout', function(d) {
             d3.select(this.parentNode).select("text").style("opacity", 0)
         })
     });
    //here's where my code stops
    
    
    // **** Functions to call for scaled values ****

    function scaleYear(parseTime) {
        return yearScale(parseTime);
    }
    
    function scaleDegree(actual_mean_temp) {
        return degreeScale(actual_mean_temp);
    }
    
    // **** Code for creating scales, axes and labels ****
    
    var yearScale = d3.scaleLinear()
        .domain([1948,2015]).range([60,700]);
    
    var degreeScale = d3.scaleLinear()
        .domain([-20, 120]).range([340,20]);
    
    var svg = d3.select('svg');
    
    svg.append('g').attr('class', 'x axis')
        .attr('transform', 'translate(0,345)')
        .call(d3.axisBottom(yearScale).tickFormat(function(d){return d;}));
    
    svg.append('text')
        .attr('class', 'label')
        .attr('transform','translate(360,390)')
        .text('Record Max Temp Year');
    
    svg.append('g').attr('class', 'y axis')
        .attr('transform', 'translate(55,0)')
        .call(d3.axisLeft(degreeScale));
    
    svg.append('text')
        .attr('class', 'label')
        .attr('transform','translate(15,200) rotate(90)')
        .text('Degrees (C)');
    
    svg.append('text')
        .attr('class', 'title')
        .attr('transform','translate(360,30)')
        .text('Temperature');