d3.selectAll('li').style('color','red');
d3.select('li').style('color','purple');
d3.select('li:nth-child(5n)').style('color','pink');
d3.selectAll('li:nth-child(even)').style('color','green')
.html("an even number")
.classed('big',true);
