import { Provider } from "react-redux";
import createStore from "./api/store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Loader from "./components/Loader";

import Header from "./components/Header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";
import Movies from "./components/movieFeature/Movies";
import EditMovie from "./components/movieFeature/EditMovie";
import CreateMovie from "./components/movieFeature/CreateMovie";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function App() {
  const store = createStore();

  return (
    <Provider store={store}>
      <Loader />
      <Container maxWidth={false}>
        <Box sx={{ height: "100vh" }}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/movies" element={<Main />}>
                <Route path="" element={<Movies />} />
                <Route path=":id" element={<EditMovie />} />
                <Route path="create" element={<CreateMovie />} />
              </Route>
              <Route
                path="*"
                element={<Navigate to="/movies" replace />}
              ></Route>
            </Routes>
          </BrowserRouter>
        </Box>
        <Footer></Footer>
      </Container>
    </Provider>
  );
}

export default App;
