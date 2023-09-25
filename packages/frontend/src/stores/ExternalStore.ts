class BaseClass {
  listeners: (() => void)[] = [];
  emitChange() {
    this.listeners.forEach((listener) => listener());
  }

  subscribe(listener: () => void) {
    this.listeners = [...this.listeners, listener];

    // When a component is cleaned-up, this is invoked.
    return () => {
      // Ensure we don't notify this listener.
      this.listeners = this.listeners.filter(l => l !== listener);
    }
  }
}

export class ExternalStore<T> extends BaseClass {
  state: { value: T | undefined } = { value: undefined };

  clear() {
    this.state = { value: undefined };
    this.emitChange();
  }

  getSnapshot() {
    return this.state;
  }
}

export class ExternalStoreAsync<T> extends BaseClass {
  state: {
    value: T | undefined;
    loading: boolean;
  } = {
    value: undefined,
    loading: false,
  };

  clear() {
    this.state = { value: undefined, loading: false };
    this.emitChange();
  }

  getSnapshot() {
    return this.state;
  }
}
