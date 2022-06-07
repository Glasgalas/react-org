import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { Flex, Center } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';

function SearchBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.value);

  return (
    <Center>
      <Flex w="60%">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
          />
          <Input
            type="text"
            value={filter}
            onChange={e => dispatch(setFilter(e.target.value))}
            w="99%"
            size="md"
            placeholder="Type for search contact"
          />
        </InputGroup>
        <IconButton
          colorScheme="green"
          aria-label="Add contact"
          size="md"
          onClick={() => navigate('/contacts/create')}
          icon={<AddIcon />}
        />
      </Flex>
    </Center>
  );
}

export default SearchBar;
