import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";
import settings from "../settings";
const api_url = settings.api_url + "/movies";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (_, { dispatch }) => {
    return await api.get(dispatch, `${api_url}`);
  }
);

export const postMovie = createAsyncThunk(
  "movies/postMovie",
  async ({ body }, { dispatch }) => {
    return await api.post(dispatch, `${api_url}`, body);
  }
);

export const editMovie = createAsyncThunk(
  "movies/editMovie",
  async ({ body }, { dispatch }) => {
    return await api.put(dispatch, `${api_url}/${body._id}`, body);
  }
);

export const deleteMovie = createAsyncThunk(
  "movies/deleteMovie",
  async ({ id }, { dispatch }) => {
    return await api.delete(dispatch, `${api_url}/${id}`);
  }
);
