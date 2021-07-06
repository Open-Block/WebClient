import { Properties } from "csstype";
import React, { TouchEventHandler, useState } from "react";

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

  const left = xPos <= 200 ? 200 : xPos - 200;

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
    onMove(event.pageX, event.pageY);
  };

  const onMove = (x: number, y: number) => {
    if (x <= 200 || y <= 0) {
      return;
    }

    console.log(
      "X: " +
        x +
        " | Y: " +
        y +
        " | OffsetX: " +
        xOffsetPos +
        " | OffsetY: " +
        yOffsetPos
    );

    setXPos(x - xOffsetPos);
    setYPos(y - yOffsetPos);
  };

  const onTouch = (event: React.TouchEvent<HTMLDivElement>) => {
    onMove(event.touches[0].pageX, event.touches[0].pageY);
  };

  const internal = props.block.internal;

  return (
    <div
      className={"absolute-box"}
      onDrag={onDrag}
      onTouchMove={onTouch}
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
