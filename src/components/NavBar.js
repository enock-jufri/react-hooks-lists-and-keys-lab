import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const ulinks = links.map((link,index) => {
    return <a key={index} href={`#${link}`}>{link}</a>
  })


  return <nav>{ulinks}</nav>;
}

export default NavBar;
