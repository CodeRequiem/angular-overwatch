// this is all mock API data
function performanceData() {
    return {
        getPerformanceMetrics: getPerformanceMetrics,
        getData: getData,
        getConfig: getConfig,
    }
}

function getPerformanceMetrics() {
    return [
        { SAT: 0, Deadband: 0, LongRuntime: 0, ShortCycles: 0, ExcessiveCycles: 0, ContinuousFan: 0, Overrides: 0 },
        { SAT: 0, Deadband: 1, LongRuntime: 1, ShortCycles: 11, ExcessiveCycles: 10, ContinuousFan: 2, Overrides: 0 },
        { SAT: 0, Deadband: 0, LongRuntime: 3, ShortCycles: 5, ExcessiveCycles: 10, ContinuousFan: 3, Overrides: 0 },
        { SAT: 0, Deadband: 2, LongRuntime: 10, ShortCycles: 12, ExcessiveCycles: 10, ContinuousFan: 2, Overrides: 0 },
        { SAT: 0, Deadband: 0, LongRuntime: 4, ShortCycles: 0, ExcessiveCycles: 10, ContinuousFan: 3, Overrides: 44 },
        { SAT: 0, Deadband: 0, LongRuntime: 12, ShortCycles: 22, ExcessiveCycles: 10, ContinuousFan: 2, Overrides: 0 },
        { SAT: 0, Deadband: 1, LongRuntime: 2, ShortCycles: 0, ExcessiveCycles: 10, ContinuousFan: 4, Overrides: 0 },
        { SAT: 0, Deadband: 1, LongRuntime: 1, ShortCycles: 0, ExcessiveCycles: 10, ContinuousFan: 5, Overrides: 0 },
    ];
}

function getData(chartType) {
    if (chartType === 'bar') {
        return [{ x: 'a', y: 1 }, { x: 'b', y: 3 }, { x: 'c', y: 13 }, { x: 'd', y: 4 }, { x: 'e', y: 25 },
            { x: 'f', y: 8 }, { x: 'g', y: 0 }, { x: 'h', y: 23 }, { x: 'i', y: 14 }, { x: 'j', y: 5 } ];
    } else if (chartType === 'line') {
        return [{ x: 1, y: 1 }, { x: 2, y: 5 }, { x: 3, y: 13 }, { x: 4, y: 24 }, { x: 5, y: 15 }, { x: 6, y: 12 },
            { x: 7, y: 12 }, { x: 8, y: 8 }, { x: 9, y: 5 }, { x: 10, y: 2 }];
    }
    return [];
}

function getConfig() {
    return {
        xFormatFunction: function(x) { return x.toUpperCase(); },
        chartType: 'bar',
        toolTipEnabled: true,
        toolTipClassName: 'performanceMetrics__tool-tip',
        svgChartContainerClassName: 'svg-chart-template-container',
    };;
}

export default performanceData;
