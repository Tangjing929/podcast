import logo from './logo.svg';
import './App.css';
import Layout_demo from "./components/layout/layout_demo";
import {BrowserRouter,Route} from "react-router-dom";



function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      <Layout_demo />
      {/*  <BrowserRouter>*/}
      {/*      <Route path={'/podcast'} component={Layout_demo}></Route>*/}
      {/*  </BrowserRouter>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
