import { booleanBlock } from "../blocks/operational/value/ValueBlocks";
import { BlockRender } from "../blocks/Block";
import { Layout, Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import { Content } from "antd/lib/layout/layout";
import SubMenu from "antd/lib/menu/SubMenu";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./../../store/hooks";
import { blocks } from "./../../store/BlocksSlice";

function BlockList(): React.ReactElement {
  return (
    <Menu mode="inline" theme="dark">
      <SubMenu key="Value" title="Value">
        <Menu.Item key="booleanBlock" title="true/false">
          <BlockRender
            key="booleanBlock"
            id={0}
            block={booleanBlock(true)}
            posY={0}
            posX={0}
          />
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
}

function BlockArea(): React.ReactElement {
  const state = useAppSelector(blocks);

  return (
    <div style={{ width: "90%", height: "100%" }}>
      {state.map((props) => BlockRender(props))}
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
