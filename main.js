var file = 'PCI_DATA.csv';
            d3.csv(file).then(makeChart);
            function makeChart(streets) {
                var pci = streets.map(function(d){return d.PCI});
                var pcirating = [ "0-10(failed)","11-25(very poor)","26-40(poor)","41-55(fair)","56-70(good)","71-85(very good)","86-100(excellent)"];
                var count = [];
                for(var i =0;i<pci.length;i++)
                {
                    if(0<pci[i]<10)
                    {
                        count[0]+=1;
                    }
                    elseif(11<pci[i]<25)
                    {
                        count[1]+=1;
                    }
                    elseif(26<pci[i]<40)
                    {
                        count[2]+=1;
                    }
                    elseif(41<pci[i]<55)
                    {
                        count[3]+=1;
                    }
                    elseif(56<pci[i]<70)
                    {
                        count[4]+=1;
                    }
                    elseif(71<pci[i]<85)
                    {
                        count[5]+=1;
                    }
                    elseif(86<pci[i]<100)
                    {
                        count[6]+=1;
                    }
                }
                
                var minX = d3.min(pcirating);
                minX -= 10;
                
                var chart = new Chart('chart', {
                    type: 'verticalBar',
                    data: {
                        labels: pcirating,
                        datasets: [
                            {
                                data: count
                            }
                        ]
                    },
                    options: {
                        title: {
                            display: true,
                            text: file
                        },
                        legend: {
                            display: false
                        },
                        scales: {
                            xAxes: [
                                {
                                    ticks: {
                                        suggestedMin: minX,
                                    }
                                }
                            ]
                        }
                    }
                });
            }

     /*       var svg = d3.select("svg"),
            margin = 200,
            width = svg.attr("width") - margin,
            height = svg.attr("height") - margin;
    
    
        var xScale = d3.scaleBand().range ([0, width]).padding(0.4),
            yScale = d3.scaleLinear().range ([height, 0]);
    
        var g = svg.append("g")
                   .attr("transform", "translate(" + 100 + "," + 100 + ")");
    
                   d3.csv("PCI_DATA.csv", function(error, data) {
                    if (error) {
                        throw error;
                    }
                    var pci = data.map(function(d){return d.PCI});
                var pcirating = [ "0-10(failed)","11-25(very poor)","26-40(poor)","41-55(fair)","56-70(good)","71-85(very good)","86-100(excellent)"];
                var count = [];
                for(var i =0;i<pci.length;i++)
                {
                    if(0<pci[i]<10)
                    {
                        count[0]+=1;
                    }
                    elseif(11<pci[i]<25)
                    {
                        count[1]+=1;
                    }
                    elseif(26<pci[i]<40)
                    {
                        count[2]+=1;
                    }
                    elseif(41<pci[i]<55)
                    {
                        count[3]+=1;
                    }
                    elseif(56<pci[i]<70)
                    {
                        count[4]+=1;
                    }
                    elseif(71<pci[i]<85)
                    {
                        count[5]+=1;
                    }
                    elseif(86<pci[i]<100)
                    {
                        count[6]+=1;
                    }
                    xScale.domain( pcirating);
                    yScale.domain([0,count]);
            
                    g.append("g")
                     .attr("transform", "translate(0," + height + ")")
                     .call(d3.axisBottom(xScale));
            
                    g.append("g")
                     .call(d3.axisLeft(yScale).tickFormat(function(d){
                         return "$" + d;
                     }).ticks(10))
                     .append("text")
                     .attr("y", 6)
                     .attr("dy", "0.71em")
                     .attr("text-anchor", "end")
                     .text("value");
            });    */