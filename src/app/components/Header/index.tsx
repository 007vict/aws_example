/**
 *
 * Header
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom"
import { messages } from './messages';
import { Nav, Navbar, Header } from 'rsuite';

import { Others } from '@rsuite/icons';
import HomeIcon from '@rsuite/icons/legacy/Home';

interface Props {}

export function Header1() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Header>
        <Navbar appearance={'inverse'}>
          <Navbar.Brand>
            <Link style={{ color: '#fff' }} to="/">
              Brand
            </Link>
          </Navbar.Brand>
          <Nav pullRight>
            <Nav.Menu icon={<HomeIcon />} title="Home">
              <Nav.Item icon={<HomeIcon />}>
                <Link to="/">Home</Link>
              </Nav.Item>
              <Nav.Item icon={<Others />}>
                <Link to="/cloud">Cloud</Link>
              </Nav.Item>
            </Nav.Menu>
          </Nav>
        </Navbar>
      </Header>
    </>
  );
}

// const Div = styled.div``;
