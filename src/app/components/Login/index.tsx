/**
 *
 * Login
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import {
  Button,
  Container,
  Content,
  Footer,
  Form,
  Header,
  Nav,
  Navbar,
  Schema,
} from 'rsuite';
import { Others } from '@rsuite/icons';
import HomeIcon from '@rsuite/icons/legacy/Home';
import './../../../../src/styles/HomePage.css';
import { Header1 } from '../Header';
import { FormCreateLogin } from '../FormCreateLogin';

interface Props {}

export function Login(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  return (
    <>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <Container style={{ minHeight: '100vh' }}>
        <Header1 />
        <Content>
          <FormCol>
            <FormCreateLogin />
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

function StringType() {
  throw new Error('Function not implemented.');
}
