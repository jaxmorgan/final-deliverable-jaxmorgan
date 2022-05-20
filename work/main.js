d3.csv('KSEAUPDATE.csv').then(function(data) {

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
            return scaleMonth(d.date);})
        .attr('cy', function(d, i) { 
            console.log(d.actual_mean_temp)
            return scaleDegree(d.actual_mean_temp)})
        .attr('opacity', 0.2)
         .style("fill", function(d) {
             if (d.differ == 'y') {
                 return "teal";
             } else if (d.differ == 'z') {
                 return "gray";
             } else {
                 return "pink";
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
         .text(function(d) { return d.actual_mean_temp})
         .attr("opacity", 0)
         .attr('transform', function(d) { return 'translate(' + scaleMonth(d.date) + ',' + scaleDegree(d.actual_mean_temp) + ')'})
         .on('mouseover', function(d) {
             d3.select(this.parentNode).select("text").style("opacity", 1)
         })
         .on('mouseout', function(d) {
             d3.select(this.parentNode).select("text").style("opacity", 0)
         })
     });
    //here's where my code stops
    
    
    // **** Functions to call for scaled values ****

    function scaleMonth(parseTime) {
        return monthScale(parseTime);
    }
    
    function scaleDegree(actual_mean_temp) {
        return degreeScale(actual_mean_temp);
    }
    
    // **** Code for creating scales, axes and labels ****
    
    var monthScale = d3.scaleLinear()
        .domain([1,12]).range([70,700]);
    
    var degreeScale = d3.scaleLinear()
        .domain([5, 95]).range([340,20]);
    
    var svg = d3.select('svg');
    
    svg.append('g').attr('class', 'x axis')
        .attr('transform', 'translate(0,345)')
        .call(d3.axisBottom(monthScale).tickFormat(function(d){return d;}));

    svg.append('text')
        .attr('class', 'label2')
        .attr('transform','translate(60,380)')
        .text('Jan.');

    svg.append('text')
        .attr('class', 'label')
        .attr('transform','translate(115,380)')
        .text('Feb.');

    svg.append('text')
        .attr('class', 'label')
        .attr('transform','translate(170,380)')
        .text('Mar.');

    svg.append('text')
        .attr('class', 'label')
        .attr('transform','translate(227,380)')
        .text('Apr.');

    svg.append('text')
        .attr('class', 'label')
        .attr('transform','translate(285,380)')
        .text('May');
    
    svg.append('text')
        .attr('class', 'label')
        .attr('transform','translate(345,380)')
        .text('Jun.');

    svg.append('text')
        .attr('class', 'label')
        .attr('transform','translate(402,380)')
        .text('Jul.');

    svg.append('text')
        .attr('class', 'label')
        .attr('transform','translate(455,380)')
        .text('Aug.');

    svg.append('text')
        .attr('class', 'label')
        .attr('transform','translate(515,380)')
        .text('Sept.');

    svg.append('text')
        .attr('class', 'label')
        .attr('transform','translate(570,380)')
        .text('Oct.');

    svg.append('text')
        .attr('class', 'label')
        .attr('transform','translate(627,380)')
        .text('Nov.');

    svg.append('text')
        .attr('class', 'label')
        .attr('transform','translate(685,380)')
        .text('Dec.');
    
    svg.append('text')
        .attr('class', 'label')
        .attr('transform','translate(360,410)')
        .text('Month');
    
    svg.append('g').attr('class', 'y axis')
        .attr('transform', 'translate(55,0)')
        .call(d3.axisLeft(degreeScale));
    
    svg.append('text')
        .attr('class', 'label')
        .attr('transform','translate(15,150) rotate(90)')
        .text('Degrees (F)');
    
    svg.append('text')
        .attr('class', 'title')
        .attr('transform','translate(360,30)')
        .text('Temperature');