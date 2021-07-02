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
};

export function BlockRender(props: BlockProps) {
  return (
    <div
      draggable
      style={{
        background: props.block.backgroundColour,
      }}
    >
      <p
        style={{
          marginLeft: props.block.displayTextOffsetX,
          marginTop: props.block.displayTextOffsetY,
          color: props.block.displayTextColour,
        }}
      >
        {props.block.displayText}
      </p>
    </div>
  );
}
