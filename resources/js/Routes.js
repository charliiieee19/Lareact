import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import '../css/app.css';
import LazyLoading from "./LazyLoading";
import TopBarProgress from "react-topbar-progress-indicator";
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
   palette: {
      type: "dark"
   }
});

TopBarProgress.config({
   barColors: {
      "0": "cyan"
   },
   barThickness: 2
});

//LandingPage
const LPMain = LazyLoading(() => import("./components/LandingPage/Main"), { fallback: <TopBarProgress /> });
const LandingPage = LazyLoading(() => import("./components/LandingPage/LandingPage"), { fallback: <TopBarProgress /> });
const LPGallery = LazyLoading(() => import("./components/LandingPage/Gallery"), { fallback: <TopBarProgress /> });
const LPContact = LazyLoading(() => import("./components/LandingPage/Contact"), { fallback: <TopBarProgress /> });
const LPAbout = LazyLoading(() => import("./components/LandingPage/About"), { fallback: <TopBarProgress /> });
const LPFilmShowing = LazyLoading(() => import("./components/LandingPage/FilmShowing"), { fallback: <TopBarProgress /> });
const LPSchedules = LazyLoading(() => import("./components/LandingPage/Schedules"), { fallback: <TopBarProgress /> });
const Login = LazyLoading(() => import("./components/Login"), { fallback: <TopBarProgress /> });
const NotFound = LazyLoading(() => import("./components/NotFound"), { fallback: <TopBarProgress /> });

//Admin
const AdminDashboard = LazyLoading(() => import("./components/Admin/Dashboard"), { fallback: <TopBarProgress /> });
const AdminAbout = LazyLoading(() => import("./components/Admin/About"), { fallback: <TopBarProgress /> });
const AdminUserList = LazyLoading(() => import("./components/Admin/UserList"), { fallback: <TopBarProgress /> });
const AdminUserViewEdit = LazyLoading(() => import("./components/Admin/UserViewEdit"), { fallback: <TopBarProgress /> });
const AdminMain = LazyLoading(() => import("./components/Admin/Main"), { fallback: <TopBarProgress /> });

const PrivateRoute = ({ children, ...rest }) => {
   let session = null;

   if (localStorage.getItem('userLogin') !== null) {
      session = localStorage.getItem('userLogin');
   }

   return (
      <Route {...rest}
         render={() => {
            return session !== null
               ? children
               : <Redirect to="/Login" />
         }}
      />
   )
}

const Routes = () => {
   return (
      <div>
         <ThemeProvider theme={theme}>
            <Router>
               <Switch>
                  <Route exact path="/">
                     <LPMain>
                        <LandingPage />
                     </LPMain>
                  </Route>s
                  <Route
                     path="/Home"
                     children={({ match: { path } }) => (
                        <LPMain>
                           {console.log(path)}
                           <Switch>
                              <Route exact path="/" component={LandingPage} />
                              <Route path={`${path}/Gallery`} component={LPGallery} />
                              <Route path={`${path}/Contact`} component={LPContact} />
                              <Route path={`${path}/About`} component={LPAbout} />
                              <Route path={`${path}/FilmShowing`} component={LPFilmShowing} />
                              <Route path={`${path}/Schedules`} component={LPSchedules} />
                              <Redirect from={`${path}/*`} to="/*" />
                           </Switch>
                        </LPMain>
                     )}
                  />
                  <Route path="/Login" component={Login} />
                  <Route
                     path="/Admin"
                     children={({ match: { path } }) => (
                        <AdminMain>
                           <Switch>
                              <Route exact path={`/${path}`} component={AdminDashboard} />
                              <Route path={`${path}/Dashboard`} component={AdminDashboard} />
                              <Route path={`${path}/About`} component={AdminAbout} />
                              <Route path={`${path}/UserList`} component={AdminUserList} />
                              <Route path={`${path}/UserViewEdit/:id`} component={AdminUserViewEdit} />
                              <Redirect from={`${path}/*`} to="/*" />
                           </Switch>
                        </AdminMain>
                     )}
                  />
                  <Route path="*">
                     <NotFound />
                  </Route>
               </Switch>
            </Router>
         </ThemeProvider>
      </div>
   );
}

export default Routes;

if (document.getElementById('app')) {
   ReactDOM.render(<Routes />, document.getElementById('app'));
}
