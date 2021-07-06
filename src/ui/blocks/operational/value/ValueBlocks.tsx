import { ValueBlock } from "../../Block";
import { useState } from "react";
import { Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

export function BooleanBlock(val: boolean): ValueBlock<boolean> {
  const [value, setValue] = useState(val);

  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={() => setValue(true)}>
        True
      </Menu.Item>
      <Menu.Item key="2" onClick={() => setValue(false)}>
        False
      </Menu.Item>
    </Menu>
  );

  return {
    backgroundColour: "yellow",
    type: "booleanValue",
    displayText: "Value",
    internal: () => {
      return (
        <Space wrap>
          <Dropdown.Button
            placement={"bottomCenter"}
            icon={<DownOutlined />}
            overlay={menu}
          >
            {value + ""}
          </Dropdown.Button>
        </Space>
      );
    },
    value,
  };
}
