import { Space, Button } from 'antd';
import styled from 'styled-components';

export const EntryBanner = styled.div`
  margin: 0;
  padding: 0;
`;
export const BannerContent = styled.div`
  background-image: url('./images/bg3.png');
  height: 100%;
  padding: var(--gap30) 10%;
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  h4 {
    color: var(--gray);
    font-size: var(--font14);
    margin: 0;
    font-weight: 300;
  }
  h1 {
    color: var(--white);
    margin-bottom: 10px;
    font-size: var(--font80);
    line-height: var(--font90);
  }
  h2 {
    color: var(--white);
    font-size: var(--font22);
    line-height: var(--font30);
  }
`;
export const ButtonGroup = styled(Space)`
  display: flex;
  margin-top: var(--gap20);
  margin-bottom: var(--gap50);
`;
export const Btn = styled(Button)`
  display: flex;
  color: var(--white);
  background: var(--secondary);
  border: 1px solid var(--secondary);
  :active,
  :focus,
  :hover {
    color: var(--white);
    background: transparent;
    border: 1px solid var(--secondary);
  }
`;
