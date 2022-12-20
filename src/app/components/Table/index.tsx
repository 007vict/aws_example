/**
 *
 * Table
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import TrashIcon from '@rsuite/icons/Trash';

import { AddFileForm } from 'app/components/AddFileForm';
import SpinnerIcon from '@rsuite/icons/legacy/Spinner';

import {Button, Table, Loader, Grid, Row, Col, FlexboxGrid } from 'rsuite';
import {useEffect, useState } from 'react';

import { API, graphqlOperation } from 'aws-amplify';
import { listFiles } from 'graphql/queries';
import {deleteFile, updateFile } from 'graphql/mutations';

interface Props {}

const { Column, HeaderCell, Cell } = Table;

const DelIcon = ({ size }) => <TrashIcon style={{ fontSize: size, marginRight: 10 }} />;

const EditableCell = ({ rowData, dataKey, onChange, ...props }) => {
  const editing = rowData.status === 'EDIT';
  return (
    <Cell {...props} className={editing ? 'table-content-editing' : ''}>
      {editing ? (
        <input
          className="rs-input"
          defaultValue={rowData[dataKey]}
          onChange={event => {
            onChange && onChange(rowData.id, dataKey, event.target.value);
          }}
        />
      ) : (
        <span className="table-content-edit-span">{rowData[dataKey]}</span>
      )}
    </Cell>
  );
};

const ActionCell = ({ rowData, dataKey, onClick, ...props }) => {
  return (
    <Cell {...props} style={{ padding: '6px' }}>
      <Button
        appearance="link"
        onClick={() => {
          onClick(rowData.id);
        }}
      >
        {rowData.status === 'EDIT' ? 'Save' : 'Edit'}
      </Button>
    </Cell>
  );
};

const DeleteCell = ({ rowData, dataKey, onClick, ...props }) => {
  return (
    <Cell {...props} style={{ padding: '6px' }}>
      <Button
        appearance="link"
        onClick={() => {
          onClick(rowData.id);
        }}
      >
        <DelIcon size = "1em"/>
      </Button>
    </Cell>
  );
};


export function TableDash() {
  const [files, setFiles] = useState<any[]>([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const fileData = await API.graphql(graphqlOperation(listFiles));
      // @ts-ignore
      const fileList = fileData.data.listFiles.items;
      setFiles(fileList);
    } catch (error) {
      console.log('error on fetching files', error);
    }
  };

  const handleChange = async (id, key, value) => {
    const nextFile = Object.assign([], files)
    // @ts-ignore
    const modeFile = nextFile.find(file => file.id === id)[key] = value
    // @ts-ignore
    await API.graphql(graphqlOperation(updateFile, {
      input: {
        id: id,
        [key]: value
      }
    }))
    setFiles(nextFile)
    return fetchFiles;
  };

  const handleEditState = async id => {
    const nextData = Object.assign([], files);
    // @ts-ignore
    const activeItem = nextData.find(item => item.id === id);
    console.log("activeItem", activeItem)
    // @ts-ignore
    activeItem.status = activeItem.status ? null : 'EDIT';
    setFiles(nextData);
  };

  const handleDeleteState = async (id) => {
    const files2 = Object.assign([], files);
    // @ts-ignore
    await API.graphql(graphqlOperation(deleteFile, {
      input: {
        id: id,
      }
    }))
    return fetchFiles()
  };


  return (
  <Div>

    {
      files.length ?
        <Flex>
          <Table
            style={{width: '80vw'}}
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
              <EditableCell dataKey='title' onChange={handleChange} rowData={files['title']}/>
            </Column>
            <Column flexGrow={2}
                    align='center'
                    fullText={true}
            >
              <HeaderCell>Description</HeaderCell>
              <EditableCell dataKey='description' onChange={handleChange} rowData={files['description']}/>
            </Column>
            <Column flexGrow={1}
                    align='center'
            >
              <HeaderCell>Edit</HeaderCell>
              <ActionCell dataKey="id" onClick={handleEditState} rowData={files['id']}/>
            </Column>
            <Column flexGrow={1}
                    align='center'
            >
              <HeaderCell>Delete</HeaderCell>
              <DeleteCell dataKey="id" onClick={handleDeleteState} rowData={files['id']}/>
            </Column>
          </Table>
          <AddFileForm />
        </Flex>
        :
        <>
          <Grid fluid>
            <Col className="show-grid" >
              <FlexboxGrid
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Row style={{padding: 10}}>
                  <Loader size="lg" content="Empy data db!" />
                </Row>
                <Row style={{padding: 10}}>
                  <AddFileForm />
                </Row>
              </FlexboxGrid>
              </Col>
          </Grid>
        </>
    }

  </Div>
  )
}

const Div = styled.div``;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  `;


