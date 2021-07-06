import { Properties } from "csstype";
import React, { useState } from "react";

export type Block = {
  type: string;
  displayText: string;
  displayTextColour?: string;
  backgroundColour?: string;
  internal?: () => React.ReactElement;
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
    display: "flex",
    displayStyle: "inline-block",
    background: props.block.backgroundColour,
  };

  const internal = props.block.internal;

  return (
    <div style={style}>
      <p
        style={{
          alignSelf: "center",
          userSelect: "all",
        }}
        color={props.block.displayTextColour}
      >
        {props.block.displayText}
      </p>
      {internal ? internal() : <></>}
    </div>
  );
}

export function BlockRender(props: BlockProps) {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [xOffsetPos, setXOffsetPos] = useState(0);
  const [yOffsetPos, setYOffsetPos] = useState(0);

  const style = {
    ...props.style,
    left: xPos,
    top: yPos,
    displayStyle: "inline-block",
    display: "inline-flex",
    justifyContent: "flex",
    background: props.block.backgroundColour,
    cursor: "grab",
  };

  const onDrag = (event: React.DragEvent<HTMLDivElement>) => {
    if (event.pageX <= 200 || event.pageY <= 0) {
      return;
    }
    console.log("X: " + event.pageX + " | Y: " + event.pageY);
    setXPos(event.pageX - 200 - xOffsetPos);
    setYPos(event.pageY - yOffsetPos);
  };

  const internal = props.block.internal;

  return (
    <div
      className={"absolute-box"}
      onDrag={onDrag}
      style={style}
      onMouseDown={(event) => {
        setXOffsetPos(event.nativeEvent.offsetX);
        setYOffsetPos(event.nativeEvent.offsetY);
      }}
    >
      <p
        style={{
          alignSelf: "center",
          userSelect: "all",
        }}
        color={props.block.displayTextColour}
      >
        {props.block.displayText}
      </p>
      {internal ? internal() : <></>}
    </div>
  );
}
