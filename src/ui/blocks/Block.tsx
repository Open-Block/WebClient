import { Properties } from "csstype";
import React, { useState } from "react";

export type Block = {
  type: String;
  backgroundColour?: string;
  displayText?: string;
  displayTextColour?: string;
  displayTextOffsetX?: number | string;
  displayTextOffsetY?: number | string;
};

export type ValueBlock<V> = Block & {
  value: V;
};

export type BlockProps = {
  block: Block;
  id: number;
  style?: Properties;
};

export function TypeBlockRender(props: BlockProps) {
  const style = {
    ...props.style,
    displayStyle: "inline-block",
    background: props.block.backgroundColour,
  };
  const displayStyle = {
    marginLeft: props.block.displayTextOffsetX,
    marginTop: props.block.displayTextOffsetY,
    color: props.block.displayTextColour,
  };

  return (
    <div style={style}>
      <p style={displayStyle}>{props.block.displayText}</p>
    </div>
  );
}

export function BlockRender(props: BlockProps) {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const style = {
    ...props.style,
    left: xPos,
    top: yPos,
    displayStyle: "inline-block",
    background: props.block.backgroundColour,
  };
  const displayStyle = {
    marginLeft: props.block.displayTextOffsetX,
    marginTop: props.block.displayTextOffsetY,
    color: props.block.displayTextColour,
  };

  const onDrag = (event: React.DragEvent<HTMLDivElement>) => {
    if (event.pageX === 0 && event.pageY === 0) {
      return;
    }
    console.log("onDrag: " + event.pageX + " | " + event.pageY);
    setXPos(event.pageX);
    setYPos(event.pageY);
  };

  return (
    <div className={"absolute-box"} onDrag={onDrag} style={style}>
      <p style={displayStyle}>{props.block.displayText}</p>
    </div>
  );
}
