import React from 'react';
import { Row, Col, List } from 'antd';
import {
  LeftPersonal,
  PersonalIn,
  PersonalReview,
  PersonalInList,
  PersonalTitle,
  PersonalValue,
  RightPersonal,
} from './style';

const PersonalInfo = () => {
  return (
    <Row>
      <Col span={12}>
        <LeftPersonal>
          <PersonalIn>
            <h1>Personal Informations</h1>
            <List
              grid={{
                gutter: 16,
                column: 1,
              }}
              dataSource={dataPersonal}
              renderItem={(item) => (
                <List.Item>
                  <PersonalInList>
                    <PersonalTitle>
                      <h3>{item.title}</h3>
                    </PersonalTitle>
                    <PersonalValue>
                      <p>{item.info}</p>
                    </PersonalValue>
                  </PersonalInList>
                </List.Item>
              )}
            />
          </PersonalIn>
          <PersonalIn>
            <h1>Contact Me</h1>
            <List
              grid={{
                gutter: 16,
                column: 1,
              }}
              dataSource={dataContact}
              renderItem={(item) => (
                <List.Item>
                  <PersonalInList>
                    <PersonalTitle>{item.title}</PersonalTitle>
                    <PersonalValue>{item.info}</PersonalValue>
                  </PersonalInList>
                </List.Item>
              )}
            />
          </PersonalIn>
        </LeftPersonal>
      </Col>
      <Col span={12}>
        <RightPersonal>
          <PersonalReview>
            <h1>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. cv-home-stylist
              signature
            </h1>
          </PersonalReview>
        </RightPersonal>
      </Col>
    </Row>
  );
};

export default PersonalInfo;

const dataPersonal = [
  {
    title: 'Name',
    info: 'Catharine',
  },
  {
    title: 'Surename',
    info: 'Vittens',
  },
  {
    title: 'Marital status',
    info: 'Single',
  },
  {
    title: 'Birthday',
    info: '20 May 1988',
  },
  {
    title: 'Nationality',
    info: 'Bangladesh',
  },
  {
    title: 'Native language',
    info: 'Bangla',
  },
];
const dataContact = [
  {
    title: 'Address',
    info: 'Catharine',
  },
  {
    title: 'Mobile',
    info: '+23 443 544 567',
  },
  {
    title: 'E-mail',
    info: 'mail@mailing.com',
  },
  {
    title: 'Website',
    info: 'website.com',
  },
];
