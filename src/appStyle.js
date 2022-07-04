import styled from 'styled-components';
import { Layout } from 'antd';
const { Content } = Layout;

export const EntryMain = styled(Layout)`
  position: relative;
  min-height: 100vh;
  background: var(--white);
`;
export const EntryMainContent = styled(Content)``;
export const EntryMainMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 3%;
  color: var(--white);
  padding: 0px;
  background-image: url('./images/bg2.jpg');
`;
export const SidebarHide = styled.div``;
