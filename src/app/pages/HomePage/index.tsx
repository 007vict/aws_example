import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { Header1 } from './../../components/Header';
import { FormLogin } from 'app/components/FormLogin';

import {
  Container,
  Content,
  Footer,
  Button,
  Navbar,
  Nav,
  Form,
  FlexboxGrid,
  Schema,
} from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { Others } from '@rsuite/icons';
import HomeIcon from '@rsuite/icons/legacy/Home';

const { StringType } = Schema.Types;

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Container style={{ minHeight: '100vh' }}>
        <Header1 />
        <Content>
          <FormCol>
            <FormLogin />
          </FormCol>
        </Content>
        <Footer>Footer</Footer>
      </Container>
    </>
  );
}

const FormCol = styled.section`
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
