import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchMovies, selectMovies } from "../../api/movieSlice";

import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "_id", headerName: "ID", width: 220 },
  { field: "name", headerName: "Name", width: 130 },
  {
    field: "released_on",
    headerName: "Release Date",
    width: 130,
  },
  {
    field: "disk",
    headerName: "Disk",
    width: 160,
  },
];

const Movies = () => {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const handleMovieClicked = (e) => {
    navigate(`/movies/${e.id}`);
  };

  return (
    <div
      style={{ height: 400, width: "100%", maxWidth: "642px", margin: "auto" }}
    >
      {movies.length > 0 && (
        <DataGrid
          getRowId={(row) => row._id}
          rows={movies}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onRowClick={handleMovieClicked}
        />
      )}
    </div>
  );
};

export default Movies;
