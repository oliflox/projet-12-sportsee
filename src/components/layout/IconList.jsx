import React from "react";

const icons = [
  { alt: "Icon 1" },
  { alt: "Icon 2" },
  { alt: "Icon 3" },
  { alt: "Icon 4" },
];

export default function IconList() {
  return (
    <ul className="vertical-nav__icons">
      {icons.map((icon, idx) => {
        const src = `./src/assets/img/${icon.alt.replace(/\s+/g, "")}.png`;
        return (
          <li className="vertical-nav__icon" key={idx}>
            <img src={src} alt={icon.alt} />
          </li>
        );
      })}
    </ul>
  );
}
