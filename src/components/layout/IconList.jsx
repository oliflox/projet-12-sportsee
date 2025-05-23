import React from "react";
import { IMG_PATH } from "../../utils/uniformData";

const icons = [
  { src: `${IMG_PATH}Icon1.png`, alt: "Icon 1" },
  { src: `${IMG_PATH}Icon2.png`, alt: "Icon 2" },
  { src: `${IMG_PATH}Icon3.png`, alt: "Icon 3" },
  { src: `${IMG_PATH}Icon4.png`, alt: "Icon 4" },
];

export default function IconList() {
  return (
    <ul className="vertical-nav__icons">
      {icons.map((icon, idx) => (
        <li className="vertical-nav__icon" key={idx}>
          <img src={icon.src} alt={icon.alt} />
        </li>
      ))}
    </ul>
  );
}
