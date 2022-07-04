import styled from 'styled-components';

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 15px 5px;
  text-align: center;
`;
export const SidebarIcon = styled.div`
  width: 100%;
  cursor: pointer;
  svg {
    font-size: 25px;
    color: var(--gray2);
  }
`;
export const SideBarHeader = styled.div``;
export const SideBarSocial = styled.div``;
export const SocialMenu = styled.div`
  a {
    padding: 5px;
    display: block;
  }
  svg {
    font-size: 15px;
    color: var(--gray2);
  }
`;
