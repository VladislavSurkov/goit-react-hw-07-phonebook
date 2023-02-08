import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63e2703b3e12b193763feb41.mockapi.io/api/v1'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    try {
      const response = await axios.get('/contacts')
      return response.data
    } catch (error) {
      return alert(error.message)
    }
  }
)

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }) => {
    try {
      const response = await axios.post('/contacts', { name, phone });
      return response.data;
    } catch (error) {
      return alert(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return alert(error.message);
    }
  }
);

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;


