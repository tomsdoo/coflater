import { describe, it, expect } from "vitest";
import { Deflater } from "../../src/modules/deflater";

describe("Deflater", () => {
  it.each([
    [{a: null}, {a: null}],
    [{a:undefined}, {a:undefined}],
    [{a:1},{a: 1}],
    [{a:"s"},{a: "s"}],
    [{a: [1,2]}, {a: [1,2]}],
    [{a: false, b:true}, {a:false, b:true}],
  ])(`new Deflater(%s).result === %s`, (inputValue, expectedResult) => {
    expect(new Deflater(inputValue)).toHaveProperty("result", expectedResult);
  });

  it.each([
    null,
    undefined,
    1,
    "s",
    [1,2],
    false,
  ].map(v => [v,v]))(`new Deflater({a: { b: { c: %s }}}).result === {"a.b.c}: %s`, (value, valueCopied) => {
    expect(new Deflater({
      a: {
        b: {
          c: value,
        }
      }
    })).toHaveProperty("result", {
      "a.b.c": value,
    });
  });

  it("complexed case", () => {
    expect(new Deflater({
      a: {
        b: 1,
        c: "c",
        d: {
          ar: [1,2,3],
          bool: false,
        },
        e: undefined,
        f: null,
      },
      z: 2,
    }).result).toEqual({
      "a.b": 1,
      "a.c": "c",
      "a.d.ar": [1,2,3],
      "a.d.bool": false,
      "a.e": undefined,
      "a.f" : null,
      z: 2,
    });
  });
});