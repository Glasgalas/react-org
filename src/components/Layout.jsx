import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import styled from 'styled-components';
import { Box } from '@chakra-ui/react';

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 15px;
  border-bottom: 1px solid black;
`;
const ListItem = styled.li`
  font-size: 26px;
  color: blueviolet;
`;
const ActiveLink = {
  textDecoration: 'underline',
};

export default function Layout() {
  return (
    <>
      <GlobalStyle />
      <Box w="100%" bgGradient="linear(to-r, gray.300, yellow.400, pink.200)">
        <nav>
          <List>
            <ListItem>
              <NavLink
                to="contacts"
                style={({ isActive }) => (isActive ? ActiveLink : undefined)}
              >
                Contacts
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to="todos"
                style={({ isActive }) => (isActive ? ActiveLink : undefined)}
              >
                Todos
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to="comments"
                style={({ isActive }) => (isActive ? ActiveLink : undefined)}
              >
                Comments
              </NavLink>
            </ListItem>
          </List>
        </nav>
      </Box>
      <Outlet />
    </>
  );
}
