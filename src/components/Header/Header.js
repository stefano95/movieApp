import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, matchPath } from "react-router-dom";

import { Search, SearchIconWrapper, StyledInputBase } from "./HeaderStyles";
import { filterMovies, selectMovies } from "../../api/movieSlice";

import { Button, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const moviesList = useSelector(selectMovies);

  const match = matchPath({ path: "/movies" }, pathname);

  const handleSearch = (e) => {
    dispatch(filterMovies(e.target.value));
  };

  return (
    <Grid
      marginX={-3}
      mb={5}
      py={2}
      gap={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "column",
        backgroundColor: "rgb(200,200,200)",
      }}
    >
      {match && (
        <Grid textAlign="center" item>
          <p>
            {moviesList.length > 0
              ? `${moviesList.length} movies in
              the database`
              : "No movies found"}
          </p>
        </Grid>
      )}
      <Grid display={"flex"} justifyContent="center" flexWrap="wrap" item>
        <Grid item>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={handleSearch}
            />
          </Search>
        </Grid>
        <Grid item>
          <Button onClick={() => navigate("/movies/create")}>
            {" "}
            Add movie
            <AddIcon></AddIcon>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
