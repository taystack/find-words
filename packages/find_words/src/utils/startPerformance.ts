/**
 * @param name `string` of the performance mark/measure.
 * @returns `() => PerformanceMeasure` callback to invoke upon completion of your process.
 * @example
 * const done = startPerformance('myFeature');
 * myFeature();
 * const p = done();
*/
export function startPerformance(name: string) {
  performance.mark(`${name}:start`);
  return () => {
    const m = performance.measure(`${name}:end`, `${name}:start`);
    performance.clearMarks(`${name}:start`);
    performance.clearMeasures(`${name}:end`);
    return m;
  };
};
