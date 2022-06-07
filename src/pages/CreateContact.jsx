import React from 'react';
import ContactEditForm from '../components/ContactEditForm/ContactEditForm';
import { useAddContactMutation } from '../redux/contactsSlice';
import { useNavigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

function CreateContact() {
  const [addContact] = useAddContactMutation();
  const navigate = useNavigate();
  const returnToContacts = () => navigate('/contacts');

  const handleAddContact = async values => {
    try {
      await addContact(values);
      returnToContacts();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box pos="absolute" left="30%">
      <ContactEditForm onSubmit={handleAddContact} />
      <IconButton
        colorScheme="blackAlpha"
        aria-label="back"
        size="md"
        onClick={returnToContacts}
        icon={<CloseIcon />}
      />
    </Box>
  );
}

export default CreateContact;
