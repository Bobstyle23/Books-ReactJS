import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// class BookList extends Component {
//   render() {
//     return (
//       <ThemeContext.Consumer>
//         {(context) => {
//           const { isLightTheme, light, dark } = context;
//           const theme = isLightTheme ? light : dark;
//           return (
//             <div
//               className="book-list"
//               style={{ color: theme.syntax, background: theme.bg }}
//             >
//               <ul>
//                 <li style={{ background: theme.ui }}>The Power of Habit</li>
//                 <li style={{ background: theme.ui }}>Sapiens</li>
//                 <li style={{ background: theme.ui }}>Homo Deus</li>
//               </ul>
//             </div>
//           );
//         }}
//       </ThemeContext.Consumer>
//     );
//   }
// }

// export default BookList;

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        <li style={{ background: theme.ui }}>The Power of Habit</li>
        <li style={{ background: theme.ui }}>Sapiens</li>
        <li style={{ background: theme.ui }}>Homo Deus</li>
      </ul>
    </div>
  );
};

export default BookList;
