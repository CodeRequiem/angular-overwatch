import templateUrl from './chartTemplate.html';

class ChartTemplateCtrl {
  constructor(data, config, targetElement) {
      this.data = data;
      this.config = config;
      this.targetElement = targetElement;
  }

  $onInit() {
      if (!this.data) {
          this.setNoDataAvailable();
      } else {
          generateChart();
      }

  }

  generateChart() {

      let svgChartContainer = d3.select(this.targetElement || '#chart-template-container').append('svg').attr('class', 'svg-chart-template-container')
          .attr('width', width + (2 *margin))
          .attr('height', height + (2 * margin))
  }

  zoomToRange(start, end) {

  }

  resetZoom() {

  }

}

chartTemplateCtrl.$inject = ['performanceData']

const chartTemplate = {
  templateUrl: templateUrl,
  controller: ChartTemplateCtrl,
  bindings: {}
};

module.exports = chartTemplate;
