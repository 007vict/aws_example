/**
 *
 * AddFileForm
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

import { Form, Button, Input, Modal } from 'rsuite';
import {API, graphqlOperation } from 'aws-amplify';
import { createFile } from 'graphql/mutations';

interface Props {}

export function AddFileForm() {

  const [open, setOpen] = React.useState<boolean>(false);
  const [formValue, setFormValue] = React.useState<any>({
    id: '',
    title: '',
    description: ''
  });

  const handleClose = async () => {

    try {
      await API.graphql(graphqlOperation(createFile, { input: formValue }))
    } catch (error) {
      console.log('error add file', error)
    }
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return <Div>
    <>
      <Modal open={open} onClose={handleClose} size="xs">
        <Modal.Header>
          <Modal.Title>New File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid onChange={setFormValue} formValue={formValue}>
            <Form.Group controlId="id">
              <Form.ControlLabel>Id</Form.ControlLabel>
              <Form.Control name="id" />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="title">
              <Form.ControlLabel>Title</Form.ControlLabel>
              <Form.Control name="title" />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.ControlLabel>Description</Form.ControlLabel>
              <Form.Control name="description" />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} type="submit" appearance="primary">
            Confirm
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <Button onClick={handleOpen}>New File</Button>
    </>
  </Div>;
}

const Div = styled.div``;