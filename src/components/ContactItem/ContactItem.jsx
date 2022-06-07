import React from 'react';
import { useDeleteContactMutation } from '../../redux/contactsSlice';
import styled from 'styled-components';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@chakra-ui/react';

const Item = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: yellowgreen;
    border-radius: 5px;
  }
`;
const Wrap = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`;

function ContactItem({ item }) {
  const [deleteContact] = useDeleteContactMutation();
  const navigate = useNavigate();

  return (
    <Item>
      <img src={item.avatar} width="36px" alt={'avatar ' + item.name} />
      <Wrap>
        <p>{item.name}</p>
        <p>{item.number}</p>
      </Wrap>
      {/* edit  */}
      <IconButton
        colorScheme="orange"
        aria-label="Edit contact"
        size="md"
        onClick={() => navigate(`/contacts/edit/${item.id}`)}
        icon={<EditIcon />}
      />
      {/* delete */}
      <IconButton
        colorScheme="red"
        aria-label="Delete contact"
        size="md"
        onClick={() => deleteContact(item.id)}
        icon={<DeleteIcon />}
      />
    </Item>
  );
}

export default ContactItem;
