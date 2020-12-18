import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import '../css/app.css';
import LazyLoading from "./LazyLoading";
import MiniDrawer from './components/MiniDrawer'
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
const Home = LazyLoading(() => import("./components/Home"), { fallback: <TopBarProgress /> });
const About = LazyLoading(() => import("./components/About"), { fallback: <TopBarProgress /> });
const NotFound = LazyLoading(() => import("./components/NotFound"), { fallback: <TopBarProgress /> });

const PrivateRoute = ({ children, ...rest }) => {
   const [session, setSession] = React.useState([]);
   fetch('api/SessionCheck')
      .then(res => res.json()
         .then(res => {
            setSession(res);
         })
         .catch(err => {
            console.log(err);
         }));

   return (
      <Route {...rest}
         render={() => {
            return session !== null
               ? children
               : <Redirect to={{
                  pathname: '/'
               }} />
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
                  <PrivateRoute exact path="/Home">
                     <Home />
                  </PrivateRoute>
                  <PrivateRoute exact path="/About">
                     <About />
                  </PrivateRoute>
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
