import { Properties } from "csstype";

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
  posX: number;
  posY: number;
  style?: Properties;
};

export function BlockRender(props: BlockProps) {
  const style = {
    ...props.style,
    marginLeft: props.block.displayTextOffsetX,
    marginTop: props.block.displayTextOffsetY,
    color: props.block.displayTextColour,
  };

  return (
    <div
      draggable
      style={{
        background: props.block.backgroundColour,
      }}
    >
      <p style={style}>{props.block.displayText}</p>
    </div>
  );
}
