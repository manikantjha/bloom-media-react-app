import { useState } from "react";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";
import DataProvider from "./contexts/DataProvider";
import theme from "./theme/theme";
// components
import Navbar from "./components/common/Navbar";
import Account from "./pages/Account";
import { ThemeProvider } from "@mui/material";
import { BASE_URL } from "./constants/config";
import Footer from "./components/common/Footer";
import ComingSoon from "./pages/ComingSoon";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Blog from "./pages/Blog";
// import Contact from "./pages/Contact";
// import CreatePost from "./pages/CreatePost";
// import Services from "./pages/Services";
// import PostDetails from "./pages/PostDetails";
// import Work from "./pages/Work";
// import WorkDetails from "./pages/WorkDetails";

// const PrivateRoute = (props) => {
//   const { isUserAuthenticated } = props;
//   return isUserAuthenticated ? (
//     <>
//       <Navbar />
//       <Outlet />
//     </>
//   ) : (
//     <Navigate replace to={`${BASE_URL}/login`} />
//   );
// };

const PublicRoute = (props) => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route
              path={`${BASE_URL}login`}
              element={
                <Account setIsUserAuthenticated={setIsUserAuthenticated} />
              }
            />
            <Route path={`/`} element={<PublicRoute />}>
              <Route path={`/`} element={<ComingSoon />} />
              {/* <Route path={`/about`} element={<About />} />
              <Route path={`/services`} element={<Services />} />
              <Route path={`/work`} element={<Work />} />
              <Route path={`/work/:id`} element={<WorkDetails />} />
              <Route path={`/blog`} element={<Blog />} />
              <Route path={`/contact`} element={<Contact />} />
              <Route path={`/post/:id`} element={<PostDetails />} /> */}
            </Route>
            {/* <Route
              path="/create-post"
              element={
                <PrivateRoute isUserAuthenticated={isUserAuthenticated} />
              }
            >
              <Route path="/create-post" element={<CreatePost />} />
            </Route> */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;
