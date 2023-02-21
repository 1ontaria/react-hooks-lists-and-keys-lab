import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElements = links.map((element) => {
    return (
      <a href={"#" + element} key={element}>
        {element}
      </a>
    );
  });

  return <nav>{linkElements}</nav>;
}

export default NavBar;
