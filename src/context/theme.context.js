import React from "react";

export const ThemeContext = React.createContext({
  value: "dark",
  onChange: () => {},
});

class ThemeContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: "dark",
      onChange: this.handleChange,
    };
  }

  handleChange() {
    this.setState(({ value }) => {
      return value === "dark"
        ? {
            value: "light",
          }
        : { value: "dark" };
    });
  }

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
