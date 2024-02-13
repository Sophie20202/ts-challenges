function objectToArr<T>(obj: { [key: string]: T }): [string, T][] {
    return Object.entries(obj);
  }