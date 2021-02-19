import React from "react";
import logo from "./logo.svg";
import "./app.css";
import Home from "./../components/home/home.component";
import ThemeContextProvider from "./../context/theme.context";

function App(props) {
  const { onCreate } = props;

  React.useEffect(() => {
    onCreate();
  }, [onCreate]);

  return (
    <div className="App">
      <ThemeContextProvider>
        <Home />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
