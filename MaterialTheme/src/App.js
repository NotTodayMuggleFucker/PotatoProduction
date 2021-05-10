import logo from './logo.svg';
import './assets/css/App.css';
import { Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themeConfig';

function App() {
  return (
  <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button color="primary" variant="contained">primary</Button>
        <Button color="secondary" variant="contained">primary</Button>
    </div>
  </ThemeProvider>
  );
}

export default App;
