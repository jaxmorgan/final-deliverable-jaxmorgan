//PRECIPTATION CHART
d3.csv('KSEAUPDATE.csv').then(function(dataset) {

    var svgPlaceholder2 = d3.select("svg")
    var holder2 = svgPlaceholder2.selectAll("g")
        .data(dataset)
        .enter()
        .append("g")
    
        holder2.append('circle')
        .attr("class", "player")
        .attr('r', 4)
        .attr('cx', function(d, i) { 
            console.log(d.record_max_temp_year)
            return scaleMonth2(d.date);})
        .attr('cy', function(d, i) { 
            //console.log(d.actual_mean_temp)
            return scalePrecip(d.average_precipitation)})
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
    
     holder2.append("text")
         .attr("class", "name")
         .text(function(d) { return d.average_precipitation})
         .attr("opacity", 0)
         .attr('transform', function(d) { return 'translate(' + scaleMonth2(d.date) + ',' + scalePrecip(d.average_precipitation) + ')'})
         .on('mouseover', function(d) {
             d3.select(this.parentNode).select("text").style("opacity", 1)
         })
         .on('mouseout', function(d) {
             d3.select(this.parentNode).select("text").style("opacity", 0)
         })
     });
    //here's where my code stops
    
    
    // **** Functions to call for scaled values ****

    function scaleMonth2(parseTime) {
        return monthScale2(parseTime);
    }
    
    function scalePrecip(average_precipitation) {
        return precipScale(average_precipitation);
    }
    
    // **** Code for creating scales, axes and labels ****
    
    var monthScale2 = d3.scaleLinear()
        .domain([1,12]).range([70,700]);
    
    var precipScale = d3.scaleLinear()
        .domain([0, 5]).range([340,20]);
    
    var svg2 = d3.select('svg');
    
    svg2.append('g').attr('class', 'x axis')
        .attr('transform', 'translate(0,765)')
        .call(d3.axisBottom(monthScale2).tickFormat(function(d){return d;}));

    svg2.append('text')
        .attr('class', 'label2')
        .attr('transform','translate(60,800)')
        .text('Jan.');

    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(115,800)')
        .text('Feb.');

    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(170,800)')
        .text('Mar.');

    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(227,800)')
        .text('Apr.');

    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(285,800)')
        .text('May');
    
    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(345,800)')
        .text('Jun.');

    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(402,800)')
        .text('Jul.');

    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(455,800)')
        .text('Aug.');

    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(515,800)')
        .text('Sept.');

    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(570,800)')
        .text('Oct.');

    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(627,800)')
        .text('Nov.');

    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(685,800)')
        .text('Dec.');
    
    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(360,830)')
        .text('Month');
    
    svg2.append('g').attr('class', 'y axis')
        .attr('transform', 'translate(55,420)')
        .call(d3.axisLeft(precipScale));
    
    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(15,565) rotate(90)')
        .text('Rainfall (in)');
    
    svg2.append('text')
        .attr('class', 'title')
        .attr('transform','translate(360,450)')
        .text('Precipitation');

