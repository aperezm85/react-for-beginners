import React from "react";

const Header = ({ tagline }) => (
  <React.Fragment>
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">Of</span>
          <span className="the">The</span>
        </span>
        Day
      </h1>
      <h3 className="tagline">
        <span>{tagline}</span>
      </h3>
    </header>
  </React.Fragment>
);

// class Header extends React.Component {
//   render() {
//     return Header(this.props);
//   }
// }

export default Header;