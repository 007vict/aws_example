import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { Header1 } from './../../components/Header';

import { Container, Content, Footer, Button, Schema } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { Others } from '@rsuite/icons';
import HomeIcon from '@rsuite/icons/legacy/Home';

import { withAuthenticator } from '@aws-amplify/ui-react';

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
            <div>Dashboard</div>
            <h1>Hello {user.attributes.email}!</h1>
            <Button onClick={signOut}>Sign out</Button>
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
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
