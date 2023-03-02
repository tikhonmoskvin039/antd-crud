import React, { useState } from "react";
import {
  CheckCircleOutlined,
  HomeOutlined,
  TableOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const items = [
  {
    label: "Home",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "Table CRUD",
    key: "/crudTable",
    icon: <TableOutlined />,
  },
  {
    label: "Form validation",
    key: "/validation",
    icon: <CheckCircleOutlined />,
  },
];

const NavBar = () => {
  const [selectedKeys, setSelectedKeys] = useState("/");

  const navigate = useNavigate();

  return (
    <Menu
      selectable
      onClick={(item) => {
        navigate(item.key);
        setSelectedKeys(item.key);
      }}
      selectedKeys={[selectedKeys]}
      mode="horizontal"
      items={items}
    />
  );
};

export default NavBar;
