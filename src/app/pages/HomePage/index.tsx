import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { Header1 } from './../../components/Header';

import { Container, Content, Footer, Button, Schema, } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { Others } from '@rsuite/icons';
import HomeIcon from '@rsuite/icons/legacy/Home';

import { withAuthenticator } from '@aws-amplify/ui-react';
import { TableDash } from 'app/components/Table';

const { StringType } = Schema.Types;

function HomePage({ signOut, user }) {

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
            <>
            <h3>Hello {user.attributes.email}!</h3>
            <Button onClick={signOut}>Sign out</Button>
              <h1>Dashboard</h1>
              <TableDash />
            </>
          </FormCol>
        </Content>

        <Footer>Footer</Footer>
      </Container>
    </>
  );
}

export default withAuthenticator(HomePage, {
  socialProviders: ['apple', 'facebook'],
});

const FormCol = styled.section`
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
`;
