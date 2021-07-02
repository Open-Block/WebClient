import { ValueBlock } from "./../../Block";

export function booleanBlock(value: boolean): ValueBlock<boolean> {
  return {
    backgroundColour: "yellow",
    displayText: "" + value,
    displayTextOffsetX: 0,
    displayTextOffsetY: 0,
    displayTextColour: "black",
    type: "booleanValue",
    value,
  };
}
