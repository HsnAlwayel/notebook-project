import React from 'react';
import logo from './logo.svg';
import './App.css';
import NotebookList from "./components/NotebookList"
import { Switch, Route } from 'react-router-dom';
import NotebookDetail from './components/NotebookDetail';

function App() {
  return (
    <Switch>
      <Route path="/:notebookId">
        <NotebookDetail />
      </Route>
      <Route path="/">
        <NotebookList />
      </Route>
    </Switch>
  );
}

export default App;
