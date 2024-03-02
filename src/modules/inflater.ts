export class Inflater<T> {
  protected value: Record<string, unknown>;
  constructor(value: Record<string, unknown>) {
    this.value = value;
  }
  public get result(): T {
    const obj: unknown = {};
    function assign(obj: any, key: string, value: unknown) {
      const tempKeys = key.split(".");
      const keyName = tempKeys[0];
      if (tempKeys.length === 1) {
        obj[keyName] = value;
      } else {
        obj[keyName] = obj[keyName] ?? {};
        assign(obj[keyName], tempKeys.slice(1).join("."), value);
      }
    }
    Object.entries(this.value).forEach(([key, value]) => {
      assign(obj, key, value);
    });
    return obj as T;
  }
}
