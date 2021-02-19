import React from "react";
import { ThemeContext } from "./../../context/theme.context";

// class Home extends React.Component {
//   static contextType = ThemeContext;

//   render() {
//     return (
//       <div>
//         <p>{this.context.value}</p>
//         <button onClick={this.context.onChange}></button>
//       </div>
//     );
//   }
// }

// class Home extends React.Component {
//   render() {
//     return (
//       <ThemeContext.Consumer>
//         {({ value, onChange }) => {
//           return (
//             <div>
//               <p>{value}</p>
//               <button onClick={onChange}></button>
//             </div>
//           );
//         }}
//       </ThemeContext.Consumer>
//     );
//   }
// }

function Home() {
  const { value, onChange } = React.useContext(ThemeContext);

  return (
    <div>
      <p>{value}</p>
      <button onClick={onChange}></button>
    </div>
  );
}

export default Home;
