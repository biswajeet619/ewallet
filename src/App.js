import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Issue from "./components/Issue";
import Home from "./components/Home";
import Login from './components/Login';
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import CustomBtn from './components/CustomBtn';
import Wallet from './components/Wallet';
import Rewards from './components/Rewards';

const user = "Ryan"

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <NavBar user={user} />
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/issue">
              <Issue />
            </Route>
            <Route exact path="/wallet">
              <Wallet />
            </Route>
            <Route exact path="/rewards">
              <Rewards />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>

          </Switch>

        </ThemeProvider>

      </div>
    </Router>
  );
}

export default App;
