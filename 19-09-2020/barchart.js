
var mydata=[100,125,320,440,500];

var height = 500;
var width =500;
var barwidth = 35;
var baroffset = 5;

var mychart = d3.select('#chart').append('svg')
       .attr('width', width)
       .attr('heigth', height)
       .style('background','#f4f4f4')
       .selectAll('rect')
           .data(mydata)
           .enter().append('rect')
                  .style('fill', 'lightgreen')
                  .attr('width',barwidth)
                  .attr('heigth',function(d){
                      return d;

                  })
                  .attr('x', function(d, i){
                      return i * (barwidth + baroffset);
                  })
                  .attr ('y',function(d){
                      return height - d;
                  })

                  