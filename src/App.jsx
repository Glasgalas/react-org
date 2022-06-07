import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home';
import Todos from './pages/Todos';
import Contacts from './pages/Contacts';
import CreateContact from './pages/CreateContact';
import Comments from './pages/Comments';
import { EditContactModal } from './components/EditContactModal/EditContactModal';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="todos" element={<Todos />} />
        <Route path="contacts/create" element={<CreateContact />} />

        <Route path="contacts/*" element={<Contacts />}>
          <Route path="edit/:contactID" element={<EditContactModal />} />
        </Route>
        <Route path="comments" element={<Comments />} />
      </Route>
    </Routes>
  );
};

export default App;
