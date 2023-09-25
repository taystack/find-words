import { useSyncExternalStore } from "react";
import { ExternalStore } from "./ExternalStore";

class PerformanceStore extends ExternalStore<PerformanceMeasure> {
  state: {
    value: PerformanceMeasure | undefined,
  } = {
    value: undefined,
  };

  add(word: string, measure: PerformanceMeasure) {
    this.state = { value: measure };
    this.emitChange();
  }
}

export const performanceStore = new PerformanceStore();
export const addPerformance = performanceStore.add.bind(performanceStore);
export const clearPerformance = performanceStore.clear.bind(performanceStore);

export const usePerformanceStore = () => useSyncExternalStore(
  performanceStore.subscribe.bind(performanceStore),
  performanceStore.getSnapshot.bind(performanceStore),
);

export const usePerformanceDuration = () =>
  usePerformanceStore().value?.duration;
