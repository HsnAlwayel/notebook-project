import React from "react";
import { observer } from "mobx-react";

//Components
import Routes from "./components/Routes";

//Styles
import { GlobalStyle } from "./styles";

//Stores
import noteStore from "./stores/noteStore";
import notebookStore from "./stores/notebookStore";

//Components
import Loading from "./Loading";

function App() {
  return (
    <>
      <GlobalStyle />

      {noteStore.loading || notebookStore.loading ? <Loading /> : <Routes />}
    </>
  );
}

export default observer(App);
