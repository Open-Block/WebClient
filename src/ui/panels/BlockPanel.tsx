import { booleanBlock } from "../blocks/operational/value/ValueBlocks";
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
    <Menu mode="inline" theme="dark">
      <SubMenu key="Value" title="Value">
        <BlockMenuItem
          id={0}
          key="booleanBlock"
          title="true/false"
          block={booleanBlock(true)}
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
    <div style={{ width: "90%", height: "100%" }}>
      {state.map((props) => (
        <BlockRender key={props.id} {...props} />
      ))}
    </div>
  );
}

function Page(): React.ReactElement {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider
        className="site-layout-background"
        collapsible
        collapsed={collapsed}
        theme="dark"
        style={{ height: "100%", minHeight: "100%" }}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <BlockList />
      </Sider>
      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <BlockArea />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Page;
