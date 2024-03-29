//TDS
import React, { useEffect } from 'react';
import * as d3 from 'd3';
import './Tooltip.css'


const margin = { top: 20, right: 30, bottom: 30, left: 40 };
var default_width = 600 - margin.left - margin.right;
var default_height = 400 - margin.top - margin.bottom;
var default_ratio = default_width / default_height;

var current_width = window.innerWidth;
var current_height = window.innerHeight;
var current_ratio = current_width / current_height;


var width;
var height;

console.log(current_width)
if (current_width < 700) {
  width = 350 - margin.left - margin.right;
  height = 150 - margin.top - margin.bottom;
}
else {
  width = 600 - margin.left - margin.right;
  height = 400 - margin.top - margin.bottom;
}



const ZeroChart = () => {
  useEffect(() => {
    const data = [
      { tag: 'UP_1', boot_times: 1, time: 10, pH: 6.80, TDS: 150.00, T: 25.40 },
      { tag: 'UP_1', boot_times: 1, time: 14, pH: 3.20, TDS: 320.00, T: 24.80 },
      { tag: 'UP_1', boot_times: 1, time: 20, pH: 7.50, TDS: 200.00, T: 25.20 },
      { tag: 'UP_1', boot_times: 1, time: 24, pH: 4.90, TDS: 180.00, T: 25.60 },
      { tag: 'UP_1', boot_times: 1, time: 30, pH: 8.30, TDS: 280.00, T: 24.90 },
      { tag: 'UP_1', boot_times: 2, time: 12, pH: 5.70, TDS: 250.00, T: 25.10 },
      { tag: 'UP_1', boot_times: 2, time: 16, pH: 6.40, TDS: 190.00, T: 25.30 },
      { tag: 'UP_1', boot_times: 2, time: 20, pH: 7.90, TDS: 300.00, T: 25.00 },
      { tag: 'UP_1', boot_times: 2, time: 24, pH: 4.50, TDS: 220.00, T: 24.70 },
      { tag: 'UP_1', boot_times: 2, time: 28, pH: 8.10, TDS: 270.00, T: 25.50 },
      { tag: 'UP_1', boot_times: 2, time: 34, pH: 6.20, TDS: 230.00, T: 25.20 },
      { tag: 'UP_1', boot_times: 3, time: 9, pH: 5.10, TDS: 260.00, T: 24.80 },
      { tag: 'UP_1', boot_times: 3, time: 14, pH: 7.00, TDS: 170.00, T: 25.30 },
      { tag: 'UP_1', boot_times: 3, time: 18, pH: 4.30, TDS: 210.00, T: 24.90 },
      { tag: 'UP_1', boot_times: 3, time: 25, pH: 8.60, TDS: 240.00, T: 25.10 },
      // Add more data points as needed
    ];

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    // const width = 600 - margin.left - margin.right;
    // const height = 400 - margin.top - margin.bottom;

    // Clear existing content of #chartContainer
    d3.select('#chartContainer0').html('');

    // Create the main SVG container
    const mainSvg = d3
      .select('#chartContainer0')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom);

    // Create the chart for TDS
    createChart(data, mainSvg, 'chart', margin, width, height, 'TDS');
  }, [window.innerWidth, current_width]);

  const createChart = (data, mainSvg, chartId, margin, width, height, variable) => {
    const svg = mainSvg
      .append('g')
      .attr('id', chartId)
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand().range([0, width]).padding(0.1);
    const y = d3.scaleLinear().range([height, 0]);

    let tooltip = d3.select("body")
      .append("div")
      .attr("id", "tooltip")
      .attr("class", "tooltip")
      .style("opacity", 0);

    x.domain(data.map((d) => d.time));
    y.domain([0, d3.max(data, (d) => d[variable]) + 50]);

    svg.append("text")
      .attr("id", "title")
      .attr("x", width / 2)
      // .attr("y", padding)
      .attr("text-anchor", "middle")
      .style("font-size", 25)
      .style("font-weight", "bold")
      .style("text-decoration", "underline")
      .text("TDS");

    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.time))
      .attr('width', x.bandwidth())
      .attr('y', (d) => y(d[variable]))
      .attr('height', (d) => height - y(d[variable]))
      .attr('fill', '#000000')
      .on("mouseover", (event, d) => {
        tooltip
          .transition()
          .duration(200)
          .style("opacity", 0.9);
        tooltip
          .html("Date: " + d.time + "<br>TDS: " + d[variable])
          .style("left", event.pageX + 20 + "px")
          .style("top", event.pageY - 40 + "px");
        tooltip.attr("data-date", d[variable]);
      })
      .on("mouseout", function (event, d) {
        tooltip
          .transition()
          .duration(400)
          .style("opacity", 0);
      });

    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g').call(d3.axisLeft(y).ticks(5));
  };

  return <div id="chartContainer0"></div>;
};

export default ZeroChart;
