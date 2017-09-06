import templateUrl from './chartTemplate.html';
import * as d3 from 'd3';

const CHART_CONTAINER_IDENTIFIER = '#chart-template-container';
const HEADER_HEIGHT = 75;

class ChartTemplateCtrl {
  constructor(dataService) {
      this.dataService = dataService;
  }

  $onInit() {
      this.config = Object.assign({}, this.loadConfigDefaults(), this.dataService.getConfig());
      this.data = this.dataService.getData(this.config.chartType);
      (this.data) ? this.generateChart(this.data, this.config) : this.setNoDataAvailable(this.config);
  }

  generateChart(data, config) {
      const xScale = d3.scaleBand()
          .domain(data.map(x => config.xFormatFunction(x.x)))
          .range([0, config.width]);

      const yScale = d3.scaleLinear()
          .domain([0, d3.max(data, x => x.y)])
          .range([config.height, 0]);

      const svgChartContainer = d3.select(CHART_CONTAINER_IDENTIFIER).append('svg').attr('class', config.svgChartContainerClassName)
          .attr('width', config.width + (2 * config.margin))
          .attr('height', config.height + (2 * config.margin))

      const chart = svgChartContainer.append('g').attr('transform', 'translate(20, 20)');

      chart.append('g').attr('class', 'x-axis')
          .attr('transform', 'translate(0, 575)')
          .attr('stroke', 'white')
          .call(d3.axisBottom(xScale));

      chart.append('g').attr('class', 'y-axis')
          .attr('stroke', 'white')
          .call(d3.axisLeft(yScale).ticks(config.yTicks));

      let graphContainer;
          if (config.chartType === 'bar') {
            graphContainer = chart.selectAll('rect').data(data).enter().append('rect')
              .attr('class', 'chart__bar')
              .attr('width', xScale.bandwidth())
              .attr('height', dataPoint => config.height - yScale(dataPoint.y))
              .attr('x', dataPoint => xScale(config.xFormatFunction(dataPoint.x)))
              .attr('y', dataPoint => yScale(dataPoint.y));
          } else {
              const line = d3.line()
                .x(function(d) { return xScale(d.x); })
                .y(function(d) { return yScale(d.y); });
              graphContainer = chart.append('path')
                .datum(data)
                .attr('fill', 'none')
                .attr('stroke', 'steelblue')
                .attr('stroke-linejoin', 'round')
                .attr('stroke-linecap', 'round')
                .attr('stroke-width', 1.5)
                .attr('d', line);
          }

          if (config.toolTipEnabled) {
              let tooltip = d3.select('body').append('div').attr('class', config.toolTipClassName);
              graphContainer
                  .on('mouseover', dataPoint => {
                      tooltip
                          .style('left', d3.event.pageX  + 'px')
                          .style('top', d3.event.pageY - 100 + 'px')
                          .style('display', 'inline-block')
                          .html(config.xFormatFunction(dataPoint.x) + "<br>Alert Count: " + dataPoint.y);
                  })
                  .on('mouseout', dataPoint => tooltip.style('display', 'none'));
          }
  }

  setNoDataAvailable(config) {
      const svgContainer = d3.select(CHART_CONTAINER_IDENTIFIER).append('svg').attr('class', config.svgChartContainerClassName)
        .attr('width', config.width + (2 * config.margin))
        .attr('height', config.height + (2 * config.margin));

      const noDataImage = svgContainer.append('g').attr('class', 'no-data-container').append('svg:image')
        .attr("xlink:href", "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/02/no-data.png")
        .attr("width", config.imageDimension)
        .attr("height", config.imageDimension)
        .attr("x", (config.width - (config.imageDimension/2)) / 2)
        .attr("y", (config.height - (config.imageDimension/2) - HEADER_HEIGHT) / 2);

  }

  loadConfigDefaults() {
      return {
          height: 575,
          width: 1675,
          imageDimension: 200,
          margin: 25,
          yTicks: 10,
          xFormatFunction: (x) => x,
          chartType: 'bar',
          toolTipEnabled: false,
          toolTipClassName: 'performanceMetrics__tool-tip',
          svgChartContainerClassName: 'svg-chart-template-container',
      };
  }
}

ChartTemplateCtrl.$inject = ['dataService'];

const chartTemplate = {
  templateUrl: templateUrl,
  controller: ChartTemplateCtrl,
  bindings: {}
};

module.exports = chartTemplate;
