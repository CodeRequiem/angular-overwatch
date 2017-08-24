import templateUrl from './performanceMetricsChart.html';
import * as d3 from 'd3';

class PerformanceMetricsChartCtrl {
    constructor(performanceData, targetElement) {
        this.performanceData = performanceData;
        this.targetElement = targetElement;
    }

    $onInit() {
        this.performanceMetricsData = this.performanceData.getPerformanceMetrics();
        this.generatePerformanceMetricsChart();
    }

    generatePerformanceMetricsChart() {
        let totals = this.sumMetrics(this.performanceMetricsData);
        let height = 575;
        let width = 1675;
        let margin = 25;

        let tooltip = d3.select('body').append('div').attr('class', 'performanceMetrics__tool-tip');

        let xScale = d3.scaleBand()
            .domain(totals.map(x => x.name))
            .range([0, width]);

        let yScale = d3.scaleLinear()
            .domain([0, d3.max(totals, x => x.value)])
            .range([height, 0]);

        let svgChartContainer = d3.select(this.targetElement || '#performance-metrics-chart').append('svg').attr('class', 'svg-chart-container')
            .attr('width', width + (2 *margin))
            .attr('height', height + (2 * margin))

        let chart = svgChartContainer.append('g')
            .attr('transform', 'translate(20, 20)');

        chart.append('g').attr('class', 'x-axis')
            .attr('transform', 'translate(0, 575)')
            .attr('stroke', 'white')
            .call(d3.axisBottom(xScale));

        chart.append('g').attr('class', 'y-axis')
            .attr('stroke', 'white')
            .call(d3.axisLeft(yScale).ticks(8));

        let barGraph = chart.selectAll('rect').data(totals).enter().append('rect')
            .attr('class', 'chart__bar')
            .attr('width', xScale.bandwidth())
            .attr('height', data => height - yScale(data.value))
            .attr('x', data => xScale(data.name))
            .attr('y', data => yScale(data.value))
            .on('mouseover', data => {
                tooltip
                    .style('left', d3.event.pageX  + 'px')
                    .style('top', d3.event.pageY - 100 + 'px')
                    .style('display', 'inline-block')
                    .html(data.name.toUpperCase() + "<br>Alert Count: " + data.value);
            })
            .on('mouseout', data => tooltip.style('display', 'none'));
    }

    sumMetrics(data) {
        let keys = Object.keys(data[0]);
        let totals = keys.map(key => {
            let y = data.reduce(function(result, value) {
                return result + value[key];
            }, 0);
            return { name: key, value: y };
        });
        return totals;
    }
}

PerformanceMetricsChartCtrl.$inject = ['performanceData'];

const PerformanceMetricsChart = {
  templateUrl: templateUrl,
  controller: PerformanceMetricsChartCtrl,
  bindings: {}
};

module.exports = PerformanceMetricsChart;
