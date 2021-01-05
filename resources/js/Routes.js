import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import '../css/app.css';
import LazyLoading from "./LazyLoading";
import TopBarProgress from "react-topbar-progress-indicator";
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import axios from 'axios';

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
const Visits = LazyLoading(() => import("./components/Visits"), { fallback: <TopBarProgress /> });

//Admin
const AdminDashboard = LazyLoading(() => import("./components/Admin/Dashboard"), { fallback: <TopBarProgress /> });
const AdminAbout = LazyLoading(() => import("./components/Admin/About"), { fallback: <TopBarProgress /> });
const AdminUserList = LazyLoading(() => import("./components/Admin/UserList"), { fallback: <TopBarProgress /> });
const AdminUserViewEdit = LazyLoading(() => import("./components/Admin/UserViewEdit"), { fallback: <TopBarProgress /> });
const AdminMain = LazyLoading(() => import("./components/Admin/Main"), { fallback: <TopBarProgress /> });
const AdminRequests = LazyLoading(() => import("./components/Admin/Requests"), { fallback: <TopBarProgress /> });

const PrivateRoute = ({ children: Children, ...rest }) => {
   let session = false;

   axios.get('/api/SessionCheck')
      .then(res => {
         if (res.data === false) {
            localStorage.removeItem('userLogin');
            session = false;
         } else {
            localStorage.setItem('userLogin', res.data[0].type);
            session = true;
         }
      }).catch(err => {
         alert(err);
      });

   if (localStorage.getItem('userLogin') !== null) {
      session = true;
   }

   return (
      <Route {...rest}
         render={props => {
            return session
               ? <Children {...props} />
               : <Redirect to="/Login" />
         }}
      />
   )
}

const LoginRoute = ({ children: Children, ...rest }) => {
   let session = false;
   let type = "";

   axios.get('/api/SessionCheck')
      .then(res => {
         if (res.data === false) {
            localStorage.removeItem('userLogin');
            session = false;
         } else {
            localStorage.setItem('userLogin', res.data[0].type);
            type = JSON.stringify(res.data[0].type);
            session = true;
         }
      }).catch(err => {
         alert(err);
      });

   if (localStorage.getItem('userLogin') !== null) {
      session = true;
      type = localStorage.getItem('userLogin');
   } else {
      type = "Login";
   }

   return (
      <Route {...rest}
         render={routeProps => {
            return !session
               ? <Children {...routeProps} />
               : <Redirect to={`/${type}`} />
         }}
      />
   )
}


const Routes = () => {
   $.get('https://www.cloudflare.com/cdn-cgi/trace', function (data) {
      let ip = data.split("\n")[2].substring(3, data.split("\n")[2].length);
      let datetime = new Date().toLocaleString();

      console.log(ip);
      console.log(datetime);
      // $.get(`https://api.ipgeolocation.io/ipgeo?apiKey=86af41a0543347a1be259e375b40ae1d&ip=${ip}`, (res) => {
      //    console.log(res);
      // });
   });
   // const [session, setSession] = useState([]);

   // const CheckSession = () => {
   //    axios.get('/api/SessionCheck')
   //       .then(res => {
   //          console.log(res);
   //          setSession(res.data);
   //       }).catch(err => {
   //          alert(err);
   //       });
   // }

   // useEffect(() => {
   //    CheckSession();
   // }, [session]);

   return (
      <div>
         {console.log(navigator)}
         <ThemeProvider theme={theme}>
            <Router>
               <Switch>
                  <Route exact path="/">
                     <LPMain>
                        <LandingPage />
                     </LPMain>
                  </Route>
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
                  <LoginRoute path="/Login" children={Login} />
                  <PrivateRoute
                     path="/Admin"
                     children={({ match: { path } }) => (
                        <AdminMain>
                           <Switch>
                              <PrivateRoute exact path={`${path}`} children={AdminDashboard} />
                              <PrivateRoute path={`${path}/Dashboard`} children={AdminDashboard} />
                              <PrivateRoute path={`${path}/About`} children={AdminAbout} />
                              <PrivateRoute path={`${path}/UserList`} children={AdminUserList} />
                              <PrivateRoute path={`${path}/Requests`} children={AdminRequests} />
                              <PrivateRoute path={`${path}/UserViewEdit/:id`} children={AdminUserViewEdit} />
                              <Redirect from={`${path}/*`} to="/*" />
                           </Switch>
                        </AdminMain>
                     )}
                  />
                  <Route path="/Visits">
                     <Visits />
                  </Route>
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
