export class Deflater {
  protected value: any;
  constructor(value: any) {
    this.value = value;
  }
  public get result() {
    const record: Record<string, unknown> = {};
    function getKeyValue(obj: object, keyPrefix?: string) {
      Object.entries(obj).forEach(([key, value]) => {
        const nextKey = `${keyPrefix}${keyPrefix ? "." : ""}${key}`;
        if (typeof value === "object" && value !== null && !Array.isArray(value)) {
          getKeyValue(value, nextKey);
        } else {
          record[nextKey] = value;
        }
      });
    }
    getKeyValue(this.value, "");
    return record;
  }
}
