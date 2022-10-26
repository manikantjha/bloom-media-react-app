import { ThemeProvider } from "@mui/material";
import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import FooterNew from "./components/commonNew/Footer";
import NavbarNew from "./components/commonNew/Navbar";
import ServiceDetailNew from "./components/serviceDetailNew/ServiceDetailNew";
import { BASE_URL } from "./constants/config";
import DataProvider from "./contexts/DataProvider";
import AboutUsNew from "./pages/AboutUs";
import Account from "./pages/Account";
import ConciousCreativeCommunity from "./pages/ConciousCreativeCommunity";
import ContactNew from "./pages/ContactNew";
import HomeNew from "./pages/HomeNew";
import ServicesNew from "./pages/ServicesNew";
import WorkDetail from "./pages/WorkDetail";
import WorkNew from "./pages/WorkNew";
import ScrollToTop from "./services/ScrollToTop";
import theme from "./theme/theme";

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
      <NavbarNew />
      <Outlet />
      <FooterNew />
    </>
  );
};

function App() {
  // const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route
              path={`${BASE_URL}login`}
              element={<Account setIsUserAuthenticated={() => {}} />}
            />
            <Route path={`/`} element={<PublicRoute />}>
              <Route path={`/`} element={<HomeNew />} />
              <Route path={`/about`} element={<AboutUsNew />} />
              <Route path={`/services`} element={<ServicesNew />} />
              <Route path={`/service/:id`} element={<ServiceDetailNew />} />
              <Route path={`/work`} element={<WorkNew />} />
              <Route path={`/work/:id`} element={<WorkDetail />} />
              <Route
                path={`/concious-creative-community`}
                element={<ConciousCreativeCommunity />}
              />
              <Route path={`/contact`} element={<ContactNew />} />
              {/*
              <Route path={`/blog`} element={<Blog />} />
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
        </HashRouter>
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;
