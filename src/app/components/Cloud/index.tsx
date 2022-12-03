/**
 *
 * Cloud
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

import { Table, Button, Container, Content, Footer, Col, Stack } from 'rsuite';
import { mockUsers } from './mock';
import { Helmet } from 'react-helmet-async';
import { Header1 } from '../Header';

const { Column, HeaderCell, Cell } = Table;
const data = mockUsers(20);

interface Props {}

export function Cloud(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <Helmet>
        <title>Cloud</title>
        <meta name="description" content="A Boilerplate application cloud" />
      </Helmet>
      <Container style={{ minHeight: '100vh' }}>
        <Header1 />
        <h2 style={{ textAlign: 'center' }}>Dashboard Data</h2>
        <Content>
          <TableCenter>
            <Table
              style={{ width: '100vw' }}
              fillHeight={true}
              bordered={true}
              data={data}
              onRowClick={rowData => {
                console.log(rowData);
              }}
            >
              <Column width={60} align="center">
                <HeaderCell>Id</HeaderCell>
                <Cell dataKey="id" />
              </Column>

              <Column width={150}>
                <HeaderCell>First Name</HeaderCell>
                <Cell dataKey="firstName" />
              </Column>

              <Column width={150}>
                <HeaderCell>Last Name</HeaderCell>
                <Cell dataKey="lastName" />
              </Column>

              <Column width={100}>
                <HeaderCell>Gender</HeaderCell>
                <Cell dataKey="gender" />
              </Column>

              <Column width={100}>
                <HeaderCell>Age</HeaderCell>
                <Cell dataKey="age" />
              </Column>

              <Column width={150}>
                <HeaderCell>Postcode</HeaderCell>
                <Cell dataKey="postcode" />
              </Column>

              <Column width={150}>
                <HeaderCell>Email</HeaderCell>
                <Cell dataKey="email" />
              </Column>

              <Column width={150} fixed="right">
                <HeaderCell>...</HeaderCell>

                <Cell style={{ padding: '6px' }}>
                  {rowData => (
                    <Button
                      appearance="link"
                      onClick={() => alert(`id:${rowData.id}`)}
                    >
                      Edit
                    </Button>
                  )}
                </Cell>
              </Column>
            </Table>
          </TableCenter>
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
const TableCenter = styled.div`
  height: 86vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
