//Activity 2/3 code
d3.csv('KSEA.csv').then(function(data) {
    //Activity 3 code
    var svgPlaceholder = d3.select("svg")
    var holder = svgPlaceholder.selectAll("g")
        .data(data)
        .enter()
        .append("g")
    
        holder.append('circle')
        .attr("class", "player")
        .attr('r', 2)
        .attr('cx', function(d, i) { return scaleYear(d.year);})
        .attr('cy', function(d, i) { return scaleHomeruns(d.homeruns)})
        .attr('opacity', 0.5)
        .style("fill", function(d) {
                if (d.rank <=3 && d.rank >= 1) {
                    return "slateblue";
                } else {
                    return "teal";
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
        .text(function(d) { return d.name})
        .attr("opacity", 0)
        .attr('transform', function(d) { return 'translate(' + scaleYear(d.year) + ',' + scaleHomeruns(d.homeruns) + ')'})
        .on('mouseover', function(d) {
            d3.select(this.parentNode).select("text").style("opacity", 1)
        })
        .on('mouseout', function(d) {
            d3.select(this.parentNode).select("text").style("opacity", 0)
        })
    });
    //here's where my code stops
    
    
    // **** Functions to call for scaled values ****
    
    function scaleYear(year) {
        return yearScale(year);
    }
    
    function scaleHomeruns(homeruns) {
        return hrScale(homeruns);
    }
    
    // **** Code for creating scales, axes and labels ****
    
    var yearScale = d3.scaleLinear()
        .domain([1870,2017]).range([60,700]);
    
    var hrScale = d3.scaleLinear()
        .domain([0,75]).range([340,20]);
    
    var svg = d3.select('svg');
    
    svg.append('g').attr('class', 'x axis')
        .attr('transform', 'translate(0,345)')
        .call(d3.axisBottom(yearScale).tickFormat(function(d){return d;}));
    
    svg.append('text')
        .attr('class', 'label')
        .attr('transform','translate(360,390)')
        .text('MLB Season');
    
    svg.append('g').attr('class', 'y axis')
        .attr('transform', 'translate(55,0)')
        .call(d3.axisLeft(hrScale));
    
    svg.append('text')
        .attr('class', 'label')
        .attr('transform','translate(15,200) rotate(90)')
        .text('Home Runs (HR)');
    
    svg.append('text')
        .attr('class', 'title')
        .attr('transform','translate(360,30)')
        .text('Top 10 HR Leaders per MLB Season');