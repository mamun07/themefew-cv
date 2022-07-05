import React from 'react';
import { Col, Row } from 'antd';
import { EntryBanner, BannerContent, ButtonGroup, Btn } from './style';

const Banner = () => {
  return (
    <EntryBanner>
      <Row>
        <Col span={12}>
          <img src="./images/profile.jpg" alt="profile" />
        </Col>
        <Col span={12}>
          <BannerContent>
            <h4>Born in 1992, Bangladesh</h4>
            <h1>Catharine Vittens</h1>
            <h2>Senior Web Developer — Care Me.</h2>
            <ButtonGroup>
              <Btn size="large">Download CV</Btn>
              <Btn size="large">Portfolio</Btn>
            </ButtonGroup>
          </BannerContent>
        </Col>
      </Row>
    </EntryBanner>
  );
};

export default Banner;
