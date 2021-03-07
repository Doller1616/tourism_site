import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>
    <SubMenu title={<span>Blogs</span>}>
      <MenuItemGroup title="Item 1">
        <Menu.Item key="setting:1"><a href='https://www.smartertravel.com/carry-challenge-pack-light-every-time/'>Smarter Travel</a></Menu.Item>
        <Menu.Item key="setting:2"><a href='https://www.kayak.co.in/'>Kayak Travel</a></Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Item 2">
        <Menu.Item key="setting:3"><a href='https://www.bucketlistly.blog/posts/best-travel-blogs-design'>Bucket listly</a></Menu.Item>
        <Menu.Item key="setting:4"><a href='https://www.danflyingsolo.com/'>Danflying solo</a></Menu.Item>
      </MenuItemGroup>
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu