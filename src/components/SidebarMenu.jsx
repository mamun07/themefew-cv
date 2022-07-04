import React, { useState } from 'react';
import { Drawer } from 'antd';
import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import {
  SideBar,
  SideBarHeader,
  SideBarSocial,
  SidebarIcon,
  SocialMenu,
} from './style';

const SidebarMenu = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <SideBar>
      <SideBarHeader>
        <SidebarIcon onClick={showDrawer}>
          <MenuOutlined />
        </SidebarIcon>
        <Drawer
          placement="right"
          onClose={onClose}
          visible={visible}
          width={250}
        >
          <ul>
            <li>
              <a href="#info" alt="">
                Home
              </a>
            </li>
            <li>
              <a href="#info" alt="">
                Info & feedback
              </a>
            </li>
            <li>
              <a href="#info" alt="">
                My Work
              </a>
            </li>
            <li>
              <a href="#info" alt="">
                Skills
              </a>
            </li>
            <li>
              <a href="#info" alt="">
                Experience
              </a>
            </li>
            <li>
              <a href="#info" alt="">
                Hobbies and Bio
              </a>
            </li>
          </ul>
        </Drawer>
      </SideBarHeader>
      <SideBarSocial>
        <SocialMenu>
          <a href="https://www.facebook.com/" alt="">
            <FacebookOutlined />
          </a>
          <a href="https://www.instagram.com/" alt="">
            <InstagramOutlined />
          </a>
          <a href="https://www.linkedin.com/" alt="">
            <LinkedinOutlined />
          </a>
          <a href="https://github.com/" alt="">
            <GithubOutlined />
          </a>
        </SocialMenu>
      </SideBarSocial>
    </SideBar>
  );
};

export default SidebarMenu;
