import { BooleanBlock } from "../blocks/operational/value/ValueBlocks";
import { BlockProps, BlockRender, TypeBlockRender } from "../blocks/Block";
import { Layout, Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import { Content } from "antd/lib/layout/layout";
import SubMenu from "antd/lib/menu/SubMenu";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "./../../store/hooks";
import { blocks, append } from "./../../store/BlocksSlice";

function BlockList(): React.ReactElement {
  return (
    <Menu mode="inline" theme="dark" style={{ height: "100%", borderRight: 0 }}>
      <SubMenu key="Value" title="Value">
        <BlockMenuItem
          id={0}
          key="booleanBlock"
          title="true/false"
          block={BooleanBlock(true)}
        />
      </SubMenu>
    </Menu>
  );
}

type BlockMenuItemProps = BlockProps & {
  key: string;
  title: string;
};

function BlockMenuItem(props: BlockMenuItemProps) {
  const dispatch = useAppDispatch();

  return (
    <Menu.Item
      key={props.key}
      title={props.title}
      onClick={() => {
        dispatch(append({ ...props }));
      }}
    >
      <TypeBlockRender {...props} />
    </Menu.Item>
  );
}

function BlockArea(): React.ReactElement {
  const state = useAppSelector(blocks);

  return (
    <>
      {state.map((props) => (
        <BlockRender key={props.id} {...props} />
      ))}
    </>
  );
}

function Page(): React.ReactElement {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "200px" }}>
        <BlockList />
      </div>
      <div style={{ width: "100%" }}>
        <BlockArea />
      </div>
    </div>
  );
}

export default Page;
