

//TEMPERATURE CHART
temp = d3.csv('citiesCSV.csv').then(function(data) {

    var svgPlaceholder = d3.select("svg")
    var holder = svgPlaceholder.selectAll("g")
        .data(data)
        .enter()
        .append("g")
    
        holder.append('circle')
        .attr("class", "temp")
        .attr('r', 4)
        .attr('cx', function(d, i) { 
            return scaleMonth(d.date);})
        .attr('cy', function(d, i) { 
            return scaleDegree(d.actual_mean_temp)})
        .attr('opacity', 0.2)
        .style("fill", function(d) {
             if (d.differ == 'y') {
                 return "teal";
             } else if (d.differ == 'z') {
                 return "gray";
             } else if (d.differ == 'x') {
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
          .text(function(d) { return d.actual_mean_temp + ', ' + d.city})
          .attr("opacity", 0)
          .attr('transform', function(d) { return 'translate(' + scaleMonth(d.date) + ',' + scaleDegree(d.actual_mean_temp) + ')'})
          .on('mouseover', function(d) {
              d3.select(this.parentNode).select("text").style("opacity", 1)
          })
          .on('mouseout', function(d) {
              d3.select(this.parentNode).select("text").style("opacity", 0)
          })
        });

    temp2 = d3.csv('citiesCSV.csv').then(function(data) {
    //SECOND TEMP
    var svgPlaceholderTemp = d3.select("svg")
    var holderTemp = svgPlaceholderTemp.selectAll("g")
        .data(data)
        .append("g")
          
        holderTemp.append('circle')
        .attr("class", "record_max_temp")
        .attr('r', 4)
        .attr('cx', function(d, i) { 
            return scaleMonthTemp(d.date);})
        .attr('cy', function(d, i) { 
            return scaleDegreeTemp(d.record_max_temp)})
        .attr('opacity', 0.2)
        .style("fill", function(d) {
            if (d.differ == 'y') {
                return "teal";
            } else if (d.differ == 'z') {
                return "gray";
            } else if (d.differ == 'x') {
                return "pink";
            } 
        })
          
        holderTemp.append("text")
            .attr("class", "name")
            .text(function(d) { return d.record_max_temp + ', ' + d.city})
            .attr("opacity", 0)
            .attr('transform', function(d) { return 'translate(' + scaleMonthTemp(d.date) + ',' + scaleDegreeTemp(d.record_max_temp) + ')'})
            .on('mouseover', function(d) {
                d3.select(this.parentNode).select("text").style("opacity", 1)
            })
            .on('mouseout', function(d) {
                d3.select(this.parentNode).select("text").style("opacity", 0)
            })
        });
        
    precip = d3.csv('citiesCSV.csv').then(function(data) {
    //PRECIPITATION CHART
    var svgPlaceholder2 = d3.select("svg")
    var holder2 = svgPlaceholder2.selectAll("g")
         .data(data)
         .append("g")
    holder2.append('circle')
        .attr("class", "precip")
        .attr('r', 4)
        .attr('cx', function(d, i) { 
            return scaleMonth2(d.date);})
        .attr('cy', function(d, i) { 
            return scalePrecip(d.average_precipitation)})
        .attr('opacity', 0.1)
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
             d3.select(this.node).select('circle').style("opacity", 1)
         })
         .on('mouseout', function(d) {
             d3.select(this.node).select('circle').style("opacity", 0.5)
         })
    
        holder2.append("text")
          .attr("class", "name")
          .text(function(d) { return d.average_precipitation + ', ' + d.city})
          .attr("opacity", 0)
          .attr('transform', function(d) { return 'translate(' + scaleMonth2(d.date) + ',' + scalePrecip(d.average_precipitation) + ')'})
          .on('mouseover', function(d) {
              d3.select(this.parentNode).select("text").style("opacity", 1)
          })
         .on('mouseout', function(d) {
              d3.select(this.parentNode).select("text").style("opacity", 0)
          })
        });

    precipRecord = d3.csv('citiesCSV.csv').then(function(data) {
    //SECOND PRECIPITATION
    var svgPlaceholder3 = d3.select("svg")
    var holder3 = svgPlaceholder3.selectAll("g")
         .data(data)
         .append("g")
    holder3.append('circle')
        .attr("class", "precip2")
        .attr('r', 4)
        .attr('cx', function(d, i) { 
            return scaleMonthRecordPrecip(d.date);})
        .attr('cy', function(d, i) { 
            return scalePrecipRecordPrecip(d.record_precipitation)})
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
             d3.select(this.node).select('circle').style("opacity", 1)
         })
         .on('mouseout', function(d) {
             d3.select(this.node).select('circle').style("opacity", 0.5)
         })
    
        holder3.append("text")
          .attr("class", "name")
          .text(function(d) { return d.record_precipitation + ', ' + d.city})
          .attr("opacity", 0)
          .attr('transform', function(d) { return 'translate(' + scaleMonthRecordPrecip(d.date) + ',' + scalePrecipRecordPrecip(d.record_precipitation) + ')'})
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
        .attr('transform','translate(375,405)')
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
        .text('Average Temperature')
    
    // **** Functions to call for scaled values ****
//PRECIP PLOTTING
    function scaleMonth2(parseMonth) {
        return monthScale2(parseMonth);
    }
    
    function scalePrecip(average_precipitation) {
        return precipScale(average_precipitation);
    }
    
    // **** Code for creating scales, axes and labels ****
    
    var monthScale2 = d3.scaleLinear()
        .domain([1,12]).range([70,700]);
    
     var precipScale = d3.scaleLinear()
         .domain([0, 0.3]).range([800,500]);
    
    var svg2 = d3.select('svg');
    
    svg2.append('g').attr('class', 'x axis')
        .attr('transform', 'translate(0,812)')
        .call(d3.axisBottom(monthScale2).tickFormat(function(d){return d;}));

    svg2.append('text')
        .attr('class', 'label2')
        .attr('transform','translate(60,847)')
        .text('Jan.');

    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(115,847)')
        .text('Feb.');

    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(170,847)')
        .text('Mar.');

    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(227,847)')
        .text('Apr.');

    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(285,847)')
        .text('May');
    
    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(345,847)')
        .text('Jun.');

    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(402,847)')
        .text('Jul.');

    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(455,847)')
        .text('Aug.');

    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(515,847)')
        .text('Sept.');

    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(570,847)')
        .text('Oct.');

    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(627,847)')
        .text('Nov.');

    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(685,847)')
        .text('Dec.');
    
    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(375,872)')
        .text('Month');

     svg2.append('g').attr('class', 'y-axis')
     .attr('transform', 'translate(50,0)')
     .call(d3.axisLeft(precipScale))
    
    svg2.append('text')
        .attr('class', 'label')
        .attr('transform','translate(10,600) rotate(90)')
        .text('Rainfall (in)');
    
    svg2.append('text')
        .attr('class', 'title')
        .attr('transform','translate(360,475)')
        .text('Precipitation');


    //SECOND PRECIP PLOTTING
    function scaleMonthRecordPrecip(parseMonth) {
        return monthScaleRecordPrecip(parseMonth);
    }
    
    function scalePrecipRecordPrecip(record_max_temp) {
        return precipScaleRecordPrecip(record_max_temp);
    }
    
    // **** Code for creating scales, axes and labels ****
    
    var monthScaleRecordPrecip = d3.scaleLinear()
        .domain([1,12]).range([825,1500]);
    
     var precipScaleRecordPrecip = d3.scaleLinear()
         .domain([0, 10.0]).range([800,500]);
    
    var svg3 = d3.select('svg');
    
    svg3.append('g').attr('class', 'x axis')
        .attr('transform', 'translate(0,812)')
        .call(d3.axisBottom(monthScaleRecordPrecip).tickFormat(function(d){return d;}));

    svg3.append('text')
        .attr('class', 'label2')
        .attr('transform','translate(815,847)')
        .text('Jan.');

    svg3.append('text')
        .attr('class', 'label')
        .attr('transform','translate(875,847)')
        .text('Feb.');

    svg3.append('text')
        .attr('class', 'label')
        .attr('transform','translate(935,847)')
        .text('Mar.');

    svg3.append('text')
        .attr('class', 'label')
        .attr('transform','translate(998,847)')
        .text('Apr.');

    svg3.append('text')
        .attr('class', 'label')
        .attr('transform','translate(1055,847)')
        .text('May');
    
    svg3.append('text')
        .attr('class', 'label')
        .attr('transform','translate(1120,847)')
        .text('Jun.');

    svg3.append('text')
        .attr('class', 'label')
        .attr('transform','translate(1180,847)')
        .text('Jul.');

    svg3.append('text')
        .attr('class', 'label')
        .attr('transform','translate(1240,847)')
        .text('Aug.');

    svg3.append('text')
        .attr('class', 'label')
        .attr('transform','translate(1305,847)')
        .text('Sept.');

    svg3.append('text')
        .attr('class', 'label')
        .attr('transform','translate(1370,847)')
        .text('Oct.');

    svg3.append('text')
        .attr('class', 'label')
        .attr('transform','translate(1425,847)')
        .text('Nov.');

    svg3.append('text')
        .attr('class', 'label')
        .attr('transform','translate(1490,847)')
        .text('Dec.');
    
    svg3.append('text')
        .attr('class', 'label')
        .attr('transform','translate(1150,872)')
        .text('Month');

     svg3.append('g').attr('class', 'y-axis')
     .attr('transform', 'translate(800,0)')
     .call(d3.axisLeft(precipScaleRecordPrecip))
    
    svg3.append('text')
        .attr('class', 'label')
        .attr('transform','translate(755,600) rotate(90)')
        .text('Rainfall (in)');
    
    svg3.append('text')
        .attr('class', 'title')
        .attr('transform','translate(1100,475)')
        .text('Record Precipitation');


            //SECOND TEMP
            function scaleMonthTemp(parseTime) {
                return monthScaleTemp(parseTime);
            }
                    
            function scaleDegreeTemp(record_max_temp) {
                return degreeScaleTemp(record_max_temp);
            }
                    
            var monthScaleTemp = d3.scaleLinear()
                .domain([1,12]).range([825,1500]);
                
            var degreeScaleTemp = d3.scaleLinear()
                .domain([10, 110]).range([340,20]);
                
            var svgTemp = d3.select('svg');
        
            svgTemp.append('g').attr('class', 'x axis')
                .attr('transform', 'translate(0,345)')
                .call(d3.axisBottom(monthScaleTemp).tickFormat(function(d){return d;}));
        
        svgTemp.append('text')
            .attr('class', 'label2')
            .attr('transform','translate(815,380)')
            .text('Jan.');
    
        svgTemp.append('text')
            .attr('class', 'label')
            .attr('transform','translate(875,380)')
            .text('Feb.');
    
        svgTemp.append('text')
            .attr('class', 'label')
            .attr('transform','translate(935,380)')
            .text('Mar.');
    
        svgTemp.append('text')
            .attr('class', 'label')
            .attr('transform','translate(998,380)')
            .text('Apr.');
    
        svgTemp.append('text')
            .attr('class', 'label')
            .attr('transform','translate(1055,380)')
            .text('May');
        
        svgTemp.append('text')
            .attr('class', 'label')
            .attr('transform','translate(1120,380)')
            .text('Jun.');
    
        svgTemp.append('text')
            .attr('class', 'label')
            .attr('transform','translate(1180,380)')
            .text('Jul.');
    
        svgTemp.append('text')
            .attr('class', 'label')
            .attr('transform','translate(1240,380)')
            .text('Aug.');
    
        svgTemp.append('text')
            .attr('class', 'label')
            .attr('transform','translate(1305,380)')
            .text('Sept.');
    
        svgTemp.append('text')
            .attr('class', 'label')
            .attr('transform','translate(1370,380)')
            .text('Oct.');
    
        svgTemp.append('text')
            .attr('class', 'label')
            .attr('transform','translate(1425,380)')
            .text('Nov.');
    
        svgTemp.append('text')
            .attr('class', 'label')
            .attr('transform','translate(1490,380)')
            .text('Dec.');
        
        svgTemp.append('text')
            .attr('class', 'label')
            .attr('transform','translate(1150,405)')
            .text('Month');
        
        svgTemp.append('g').attr('class', 'y axis')
            .attr('transform', 'translate(800,0)')
            .call(d3.axisLeft(degreeScaleTemp));
        
        svgTemp.append('text')
            .attr('class', 'label')
            .attr('transform','translate(765,150) rotate(90)')
            .text('Degrees (F)');
        
        svgTemp.append('text')
            .attr('class', 'title')
            .attr('transform','translate(1100,30)')
            .text('Record High Temperatures')

    



