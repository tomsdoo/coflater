import { describe, it, expect } from "vitest";
import { Inflater } from "../../src/modules/inflater";

describe("Inflater", () => {
  it.each([[
    {
      "a.b.c": 1,
      "a.b.d": "s",
      "a.z": null,
      "a.y.x": [1,2],
      "a.y.w": undefined,
      "a.y.v": false,
    },
    {
      a: {
        b: {
          c: 1,
          d: "s",
        },
        y: {
          v: false,
          w: undefined,
          x: [1,2],
        },
        z: null,
      },
    }]
  ])(`new Inflater(%s).result === %s`, (inputValue, expectedResult) => {
    expect(new Inflater(inputValue)).toHaveProperty("result", expectedResult);
  });
});
