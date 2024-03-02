import { Deflater } from "@/modules/deflater";
import { Inflater } from "@/modules/inflater";

export class Coflater<T> {
  public deflate(data: any): Record<string, unknown> {
    return new Deflater(data).result;
  }
  public inflate(data: Record<string, unknown>): T {
    return new Inflater<T>(data).result;
  }
}
