import * as d3 from 'd3';
import React, { useRef, useState, useEffect } from 'react';
import rawdata from '../../data/dot.csv';

const COLOR = {
  MARGIN: '#B0D9D5',
  MODERATE: '#F8AD96',
  SEVERE: '#EB5832',
  GRAY: '#e0e0e0',
  TEXT: '#808080',
};

const SurveyChart = ({ steps, direction }) => {
  const tooltipRef = React.useRef(null);
  const svgRef = React.useRef(null);
  const [data, setData] = useState(null);
  const [update, setUpdate] = useState(0);

  //d3 chart settings
  let width = '1500';
  let height = '600';
  let center = { x: width / 2, y: height / 2 };
  let cariCenter = [width / 6, width / 2.3, width / 1.5, width / 1.2];
  let migCenter = [width / 5, width / 1.8, width / 1.2];

  //bubble settings
  let forceStrength = 0.023;
  let r = 2;
  let padding = 2;

  //label settings
  let cariData = [
    { name: 'Food Secure', index: 0, value: 44 },
    { name: 'Marginally Food Secure', index: 1, value: 46 },
    { name: 'Moderately Insecure', index: 2, value: 9 },
    { name: 'Severely Insecure', index: 3, value: 1 },
  ];
  let migData = [
    { name: 'Don’t Want to Migrate', index: 0, value: 55.5 },
    { name: 'Want to Migrate', index: 1, value: 43 },
    { name: 'Not Sure', index: 2, value: 1.5 },
  ];

  //load data
  useEffect(() => {
    d3.csv(rawdata).then((data) => {
      setData(
        data.slice(0, 2000).map(function (d) {
          return {
            ...d,
            radius: r,
          };
        })
      );
    });
  }, []);

  //decide when to update
  useEffect(() => {
    if (
      steps < 4 &&
      !(steps == 1 && direction == 'down') &&
      !(steps == 3 && direction == 'up')
    ) {
      setUpdate(steps);
    }
  }, [steps, direction]);

  //update charts
  useEffect(() => {
    if (data) {
      const svgEl = d3
        .select(svgRef.current)
        .style('width', '100vw')
        .attr('text-anchor', 'middle')
        .attr('viewBox', `0 0 ${width} ${height}`)
        .attr('preserveAspectRatio', 'xMinYMin meet');

      svgEl.selectAll('*').remove();

      const svg = svgEl.append('g');

      const simulation = d3
        .forceSimulation(data)
        .velocityDecay(0.14)
        .force(
          'collide',
          d3
            .forceCollide()
            .radius(function (d) {
              return d.radius + padding;
            })
            .strength(0.65)
        )
        .force('x', d3.forceX().strength(forceStrength).x(center.x))
        .force('y', d3.forceY().strength(forceStrength).y(center.y))
        .on('tick', ticked);
      simulation.stop();

      const bubbles = svg
        .append('g')
        .attr('class', 'bubbles')
        .selectAll('circle')
        .data(data)
        .join('circle')
        .attr('r', 0)
        .attr('fill', function (d) {
          if (d.cari == '2') {
            return COLOR.MARGIN;
          } else if (d.cari == '3') {
            return COLOR.MODERATE;
          } else if (d.cari == '4') {
            return COLOR.SEVERE;
          } else {
            return COLOR.GRAY;
          }
        });

      bubbles
        .transition()
        .ease(d3.easeBounce)
        .duration(1000)
        .attr('r', function (d) {
          return d.radius;
        });

      function ticked() {
        bubbles.attr('cx', (d) => d.x).attr('cy', (d) => d.y);
      }

      if (update == 2) {
        const cariLabel = svg
          .append('g')
          .attr('class', 'cariLabel')
          .selectAll('text')
          .data(cariData)
          .enter()
          .append('text')
          .attr('x', (d) => cariCenter[+d.index])
          .attr('y', center.y / 3)
          .attr('text-anchor', 'middle')
          .text((d) => d.name)
          .style('opacity', 0)
          .transition()
          .ease(d3.easeCubicIn)
          .duration(1000)
          .style('opacity', 1);

        const cariLabel2 = svg
          .append('g')
          .attr('class', 'cariLabel2')
          .selectAll('text')
          .data(cariData)
          .enter()
          .append('text')
          .attr('x', (d) => cariCenter[+d.index])
          .attr('y', center.y)
          .attr('text-anchor', 'middle')
          .attr('alignment-baseline', 'central')
          .text((d) => d.value + '%')
          .style('opacity', 0)
          .transition()
          .ease(d3.easeCubicIn)
          .duration(1000)
          .style('opacity', 1);

        simulation.force(
          'x',
          d3
            .forceX()
            .strength(forceStrength)
            .x((d) => cariCenter[+d.cari - 1])
        );
        simulation.force('y', d3.forceY().strength(forceStrength).y(center.y));
        simulation.alpha(1).restart();
      } else if (update >= 3) {
        const migLabel = svg
          .append('g')
          .attr('class', 'migLabel')
          .selectAll('text')
          .data(migData)
          .enter()
          .append('text')
          .attr('x', (d) => migCenter[+d.index])
          .attr('y', center.y / 3)
          .attr('text-anchor', 'middle')
          .text((d) => d.name)
          .style('opacity', 0)
          .transition()
          .ease(d3.easeCubicIn)
          .duration(1000)
          .style('opacity', 1);

        const migLabel2 = svg
          .append('g')
          .attr('class', 'migLabel2')
          .selectAll('text')
          .data(migData)
          .enter()
          .append('text')
          .attr('x', (d) => migCenter[+d.index])
          .attr('y', center.y)
          .attr('text-anchor', 'middle')
          .attr('alignment-baseline', 'central')
          .text((d) => d.value + '%')
          .style('opacity', 0)
          .transition()
          .ease(d3.easeCubicIn)
          .duration(1000)
          .style('opacity', 1);

        simulation.force(
          'x',
          d3
            .forceX()
            .strength(forceStrength)
            .x((d) => migCenter[+d.mig])
        );
        simulation.force('y', d3.forceY().strength(forceStrength).y(center.y));
        simulation.alpha(1).restart();
      } else {
        const migLabel = svg
          .append('g')
          .attr('class', 'migLabel')
          .selectAll('text')
          .data(migData)
          .enter()
          .append('text')
          .attr('x', (d) => center.x)
          .attr('y', center.y / 3.5)
          .attr('text-anchor', 'middle')
          .text('total survey people')
          .style('opacity', 0)
          .transition()
          .ease(d3.easeCubicIn)
          .duration(1000)
          .style('opacity', 1);

        const migLabel2 = svg
          .append('g')
          .attr('class', 'migLabel2')
          .selectAll('text')
          .data(migData)
          .enter()
          .append('text')
          .attr('x', (d) => center.x)
          .attr('y', center.y)
          .attr('text-anchor', 'middle')
          .attr('alignment-baseline', 'central')
          .text('4,498')
          .style('opacity', 0)
          .transition()
          .ease(d3.easeCubicIn)
          .duration(1000)
          .style('opacity', 1);

        simulation.force('x', d3.forceX().strength(forceStrength).x(center.x));
        simulation.force('y', d3.forceY().strength(forceStrength).y(center.y));
        simulation.alpha(1).restart();
      }
    }
  }, [update, data]);

  return (
    <>
      <div className="survey-tooltip hidden" ref={tooltipRef}></div>
      <svg className="survey-chart" ref={svgRef}></svg>
    </>
  );
};

export default SurveyChart;
