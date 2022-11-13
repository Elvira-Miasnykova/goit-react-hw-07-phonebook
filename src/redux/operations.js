import axios from "axios";
import {createAsyncThunk} from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://636eb7eef2ed5cb047ce09e6.mockapi.io/contacts/';
//axios.defaults.baseURL = 'https://6367cee5d1d09a8fa61b0c62.mockapi.io';


export const fetchContacts = createAsyncThunk("contact/fetchAllContacts",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("/contacts");
            return (response.data);
        }
        catch (e) {
    
            return (rejectWithValue(e.message));
        };

    }
); 

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (text, {rejectWithValue}) => {
    try {
      const response = await axios.post("/contacts", text);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, {rejectWithValue}) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
