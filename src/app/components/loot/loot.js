import templateUrl from './loot.html';
import * as d3 from 'd3';

class LootCtrl {
    constructor(characterService) {
        this.characterService = characterService;
    }

    $onInit() {
        this.characters = this.characterService.getCharacters();
        this.createLootChart();
    }

    createLootChart() {
        let height = 575;
        let width = 1675;
        let margin = 25;

        let x = d3.scaleBand()
            .domain(this.characters.map(x => x.name.toUpperCase()))
            .range([0, width]);

        let y = d3.scaleLinear()
            .domain([0, d3.max(this.characters, x => x.loot)])
            .range([height, 0]);

        let svgChartContainer = d3.select('#loot-chart').append('svg').attr('class', 'svg-chart-container')
            .attr('width', width + (2 *margin))
            .attr('height', height + (2 * margin)) // m*3?

        let chart = svgChartContainer.append('g')
            .attr('transform', 'translate(20, 20)');

        chart.append('g').attr('class', 'x-axis')
            .attr('transform', 'translate(0, 575)')
            .attr('stroke', 'white')
            .call(d3.axisBottom(x));

        chart.append('g').attr('class', 'y-axis')
            .attr('stroke', 'white')
            .call(d3.axisLeft(y).ticks(4));

        let barGraph = chart.selectAll('rect').data(this.characters).enter().append('rect')
            .attr('class', 'loot-chart__bar')
            .attr('width', x.bandwidth())
            .attr('height', character => height - y(character.loot))
            .attr('x', character => x(character.name.toUpperCase()))
            .attr('y', character => y(character.loot))
    }
}

LootCtrl.$inject = ['characterService'];

const Loot = {
  templateUrl: templateUrl,
  controller: LootCtrl,
  bindings: {}
};

module.exports = Loot;
