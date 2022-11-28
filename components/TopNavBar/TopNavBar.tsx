import React from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";
import styles from "./TopNavBar.module.scss";

const { Header } = Layout;

const items1 = ["crud", "blank"].map((key) => ({
  key,
  label: (
    <Link href={`/${key}`}>
      {key.toUpperCase()}
    </Link>
  ),
}));

const TopNavBar = () => {
  return (
    <Header id={styles.nav}>
      <h2>React GraphQL</h2>
      <Menu
        id={styles.menu}
        className={styles.menu}
        theme='light'
        mode='horizontal'
        // defaultSelectedKeys={['']}
        items={items1}
      />
    </Header>
  );
};

export default TopNavBar;
