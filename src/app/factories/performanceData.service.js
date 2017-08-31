function performanceData() {
    return {
        getPerformanceMetrics: getPerformanceMetrics,
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

function getData() {
    return [ { key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 }, { key: 'd', value: 4 }, { key: 'e', value: 5 } ];
}

export default performanceData;
