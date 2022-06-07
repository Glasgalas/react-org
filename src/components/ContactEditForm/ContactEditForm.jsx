import React from 'react';
import { Formik, Form, Field } from 'formik';
import {
  InputGroup,
  InputLeftElement,
  Input,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { PhoneIcon, AtSignIcon, CheckIcon } from '@chakra-ui/icons';
import styled from 'styled-components';

const Cont = styled.div`
  position: relative;
`;
const CheckIcn = styled.div`
  position: absolute;
  top: 0;
  left: 200px;
`;

function ContactEditForm({
  initialValues = { name: '', number: '' },
  onSubmit,
  btnText,
}) {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Field name="name">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<AtSignIcon color="gray.300" />}
                  />
                  <Input {...field} id="name" placeholder="name" />
                </InputGroup>
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="number">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.number && form.touched.number}
              >
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<PhoneIcon color="gray.300" />}
                  />
                  <Input {...field} id="number" placeholder="number" />
                </InputGroup>
                <FormErrorMessage>{form.errors.number}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Cont>
            <CheckIcn>
              <IconButton
                colorScheme="green"
                aria-label="Submit"
                size="md"
                type="submit"
                disabled={isSubmitting}
                icon={<CheckIcon />}
              />
            </CheckIcn>
          </Cont>
        </Form>
      )}
    </Formik>
  );
}

export default ContactEditForm;
