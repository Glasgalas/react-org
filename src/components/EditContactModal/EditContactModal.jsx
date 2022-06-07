import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ContactEditForm from '../ContactEditForm/ContactEditForm';
import {
  useGetContactByIDQuery,
  useUpdateContactMutation,
} from '../../redux/contactsSlice';
import styled from 'styled-components';
import { IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Modal = styled.div`
  padding: 24px;
  background-color: #fff;
`;

export function EditContactModal() {
  const { contactID } = useParams();
  const { data: contact } = useGetContactByIDQuery(contactID);
  const [updateContact] = useUpdateContactMutation();
  const navigate = useNavigate();
  const closeModal = () => navigate('/contacts');

  const handleUpdateContact = async fields => {
    try {
      await updateContact({ id: contactID, ...fields });
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Overlay>
      <Modal>
        {contact && (
          <ContactEditForm
            initialValues={{ name: contact.name, number: contact.number }}
            onSubmit={handleUpdateContact}
          />
        )}

        <IconButton
          colorScheme="blackAlpha"
          aria-label="Submit"
          size="md"
          onClick={closeModal}
          icon={<CloseIcon />}
        />
      </Modal>
    </Overlay>
  );
}
