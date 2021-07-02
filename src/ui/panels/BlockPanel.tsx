import { booleanBlock } from "../blocks/operational/value/ValueBlocks";
import { BlockRender } from "../blocks/Block";
import { Layout, Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import { Content } from "antd/lib/layout/layout";
import SubMenu from "antd/lib/menu/SubMenu";
import { useState } from "react";

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
  return <div style={{ width: "90%", height: "100%" }}></div>;
}

function Page(): React.ReactElement {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ height: "100%", maxHeight: "100%", minHeight: "500px" }}>
      <Sider
        className="site-layout-background"
        collapsible
        collapsedWidth="0"
        width="20%"
        theme="dark"
        style={{ height: "100%", minHeight: "100%" }}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <BlockList />
      </Sider>
      <Content>
        <BlockArea />
      </Content>
    </Layout>
  );
}

export default Page;
