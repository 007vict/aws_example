import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { Header1 } from './../../components/Header';

import { Container, Content, Footer, Button, Schema, Table } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { Others } from '@rsuite/icons';
import HomeIcon from '@rsuite/icons/legacy/Home';

import { withAuthenticator } from '@aws-amplify/ui-react';
import { listFiles } from 'graphql/queries';
import {API, graphqlOperation } from 'aws-amplify';
import { useState } from 'react';
import { useEffect } from 'react';
import { createFile } from 'graphql/mutations';

const { StringType } = Schema.Types;

const { Column, HeaderCell, Cell } = Table;

function HomePage({ signOut, user }) {
  const [files, setFiles] = useState<any[]>([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const fileData = await API.graphql(graphqlOperation(listFiles));
      // @ts-ignore
      const fileList = fileData.data.listFiles.items;
      console.log('file list', fileList);
      setFiles(fileList);
    } catch (error) {
      console.log('error on fetching files', error);
    }
  };

  const addFile = async () => {
    try {
      const file = {
        id: "fghjk",
        title: "File 1",
        description: "This is a file 1!",
      }

      await API.graphql(graphqlOperation(createFile, { input: file }))
    } catch (error) {
      console.log('error add file', error)
    }
  }

  const styleTable = {

  }

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
            <div>Dashboard</div>
            <h1>Hello {user.attributes.email}!</h1>
            <Button onClick={signOut}>Sign out</Button>

              <Table
                style={{ width: '80vw' }}
                autoHeight={true}
                bordered={true}
                cellBordered={true}
                data={files}
                onRowClick={rowData => {
                  console.log(rowData);
                }}
              >
                <Column width={70} align='center'>
                  <HeaderCell>Id</HeaderCell>
                  <Cell dataKey='id' />
                </Column>
                  <Column flexGrow={1} align='center'>
                    <HeaderCell>Title</HeaderCell>
                    <Cell dataKey='title' />
                  </Column>
                  <Column flexGrow={2}
                          align='center'
                          fullText={true}
                  >
                  <HeaderCell>Description</HeaderCell>
                  <Cell dataKey='description' />
                  </Column>
              </Table>

            <Button onClick={addFile}>Create file!</Button>
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
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
`;
