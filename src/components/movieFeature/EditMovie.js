import React, { useEffect, useState } from "react";
import MovieForm from "./MovieForm";
import { deleteMovie, editMovie, selectMovieById } from "../../api/movieSlice";

import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const EditMovie = () => {
  const [movieData, setMovieData] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const movie = useSelector((state) => selectMovieById(state, id));

  useEffect(() => {
    setMovieData(movie);
  }, []);

  const handleDelete = async () => {
    const result = await dispatch(deleteMovie({ id: id }));
    if (result?.payload?.ok) navigate("/movies");
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const result = await dispatch(editMovie({ body: movieData }));
    if (result?.payload?.ok) navigate("/movies");
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setMovieData({ ...movieData, [name]: value });
  };

  return (
    <Box margin="auto" width={"320px"}>
      {movieData && (
        <MovieForm
          type="edit"
          movieData={movieData}
          handleForm={handleOnChange}
          handleSubmit={handleEdit}
        >
          <Button
            onClick={handleDelete}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </MovieForm>
      )}
    </Box>
  );
};

export default EditMovie;
