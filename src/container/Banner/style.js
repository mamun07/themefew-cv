import { Space, Button } from 'antd';
import styled from 'styled-components';

export const EntryBanner = styled.div`
  margin: 0;
  padding: 0;
`;
export const BannerContent = styled.div`
  background-image: url('./images/bg3.png');
  height: 100%;
  padding: 30px 20%;
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  h4 {
    color: var(--gray);
    font-size: 16px;
    margin: 0;
    font-weight: 300;
    text-transform: uppercase;
  }
  h1 {
    color: var(--white);
    font-size: 50px;
    margin: 0 0 20px 0;
  }
`;
export const ButtonGroup = styled(Space)`
  display: flex;
`;
export const Btn = styled(Button)`
  display: flex;
  color: var(--white);
  background: var(--secondary);
  border: 1px solid var(--secondary);
`;
