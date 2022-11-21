import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { postMovie } from "../../api/movieSlice";
import MovieForm from "./MovieForm";

import { Box } from "@mui/material";

const CreateMovie = () => {
  const [movieData, setMovieData] = useState({
    name: "",
    released_on: "",
    disk: "",
    rating: 0,
    isWatched: true,
    genres: [],
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = (e) => {
    const { name, value } = e.target;
    setMovieData({ ...movieData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(postMovie({ body: movieData }));
    if (result?.payload?.ok) navigate("/movies");
  };

  return (
    <Box margin="auto" width={"320px"}>
      <MovieForm
        type="create"
        movieData={movieData}
        handleForm={handleForm}
        handleSubmit={handleSubmit}
      />
    </Box>
  );
};

export default CreateMovie;
