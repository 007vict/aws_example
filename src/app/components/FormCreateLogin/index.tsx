/**
 *
 * FormCreateLogin
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Button, Form, Schema } from 'rsuite';

interface Props {}

const model = Schema.Model({
  name: Schema.Types.StringType().isRequired('This field is required.'),
  email: Schema.Types.StringType().isEmail(
    'Please enter a valid email address.',
  ),
});

export function FormCreateLogin(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <React.Fragment>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <Form model={model}>
        <h4>SIGN UP</h4>
        <Form.Group>
          <Form.ControlLabel>Enter your Email:</Form.ControlLabel>
          <Form.Control name="email" type="email" />
        </Form.Group>
        <Form.Group>
          <Form.ControlLabel>Enter your Password:</Form.ControlLabel>
          <Form.Control name="password" type="password" />
        </Form.Group>
        <Form.Group>
          <Form.ControlLabel>Enter your Password:</Form.ControlLabel>
          <Form.Control name="password" type="password" />
        </Form.Group>
        <Form.Group>
          <Button appearance="primary">
            <a href="/">Create Login</a>
          </Button>
        </Form.Group>
      </Form>
    </React.Fragment>
  );
}

// const Div = styled.div``;
