/**
 *
 * AddFileForm
 *
 */
import * as React from 'react';
/* styled-component */
import styled from 'styled-components/macro';
/* rsuite */
import { Form, Button, Input, Modal, Uploader } from 'rsuite';
import CameraRetroIcon from '@rsuite/icons/legacy/CameraRetro';
/* amplify */
import {API, graphqlOperation, Storage } from 'aws-amplify';
import { createFile } from 'graphql/mutations';

import {
  View, Image
} from '@aws-amplify/ui-react';

interface Props {}

export function AddFileForm() {

  const [open, setOpen] = React.useState<boolean>(false);
  let [formValue, setFormValue] = React.useState<any>({
    id: '',
    title: '',
    description: '',
    image: '',
  });
  const [fileData, setFileData] = React.useState<any>()

  const handleClose = async (isCreate) => {
    if (isCreate) {
      const image = formValue?.image;
      try {
        await API.graphql(graphqlOperation(createFile, { input: formValue }))
        setFormValue({
          id: '',
          title: '',
          description: '',
          image: '',
        })
      } catch (error) {
        console.log('error add file', error)
      }
    }
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const uploadFile = async () => {
    const result = await Storage.put(formValue.title, fileData, {
      contentType: fileData?.type,
    })
    formValue.image = await Storage.get(formValue.title)
    console.log('formValue.image', formValue.image)
  }

  const inputFile = async (e) => {
    if (e) {
     await setFileData(e?.target.files[0])
    } else {
      console.warn('error handler input for upload file', e)
    }
  }

  return <Div>
    <>
      <Modal open={open} onClose={() => handleClose(false)} size="xs">
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

            <Form.Group controlId="image">
              <Form.ControlLabel>Image</Form.ControlLabel>
              <input type="file" id="file" onChange={inputFile} />
              <Button color="blue" appearance="ghost" onClick={uploadFile}>
                Upload
              </Button>
            </Form.Group>

          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => handleClose(true)} type="submit" appearance="primary">
            Confirm
          </Button>
          <Button onClick={() => handleClose(false)} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <Button style={{marginBottom: 10}} onClick={handleOpen}>New File</Button>
    </>
  </Div>;
}

const Div = styled.div``;