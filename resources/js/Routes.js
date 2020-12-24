import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
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

const Login = LazyLoading(() => import("./components/Login"), { fallback: <TopBarProgress /> });
const Dashboard = LazyLoading(() => import("./components/Admin/Dashboard"), { fallback: <TopBarProgress /> });
const About = LazyLoading(() => import("./components/Admin/About"), { fallback: <TopBarProgress /> });
const NotFound = LazyLoading(() => import("./components/NotFound"), { fallback: <TopBarProgress /> });
const AdminMain = LazyLoading(() => import("./components/Admin/Main"), { fallback: <TopBarProgress /> });

const PrivateRoute = ({ children, ...rest }) => {
   // const [session, setSession] = React.useState([]);
   let session = null;

   fetch('/api/SessionCheck')
      .then(res => res.json()
         .then(res => {
            console.log(res !== null);
            session = res;
            console.log(session);
         })
         .catch(err => {
            console.log(err);
         }));

   return (
      <Route {...rest}
         render={() => {
            return session !== null 
               ? children
               : <Redirect to="/" />
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
                     <Login />
                  </Route>
                  <Route
                     path="/Admin"
                     render={({ match: { path } }) => (
                        <AdminMain>
                           <Switch>
                              <Route exact path={`/${path}`} component={Dashboard} />
                              <Route path={`${path}/Dashboard`} component={Dashboard} />
                              <Route path={`${path}/About`} component={About} />
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
