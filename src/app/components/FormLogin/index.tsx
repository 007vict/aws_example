/**
 *
 * Form
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
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

interface Props {}

export function FormLogin(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <Form>
        <h4>SIGN IN</h4>
        <Form.Group>
          <Form.ControlLabel>Enter your Email:</Form.ControlLabel>
          <Form.Control name="email" type="email" />
        </Form.Group>
        <Form.Group>
          <Form.ControlLabel>Enter your Password:</Form.ControlLabel>
          <Form.Control name="password" type="password" />
        </Form.Group>
        <Form.Group>
          <Button appearance="primary">Login</Button>
        </Form.Group>
        <Form.Group>
          <a style={{ display: 'block' }} href="#">
            Forgotten password?
          </a>
          <Button appearance="primary">
            <a href="/login">Create Login</a>
          </Button>
        </Form.Group>
      </Form>
    </Div>
  );
}

const Div = styled.div``;
