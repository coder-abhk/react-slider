import { useEffect, useState } from "react";
import "./App.css";
import img1 from "./images/01.jpg";
import img2 from "./images/02.jpg";
import img3 from "./images/03.jpg";
import img4 from "./images/04.jpg";
import img5 from "./images/05.jpg";
import { gsap } from "gsap";

export default function App() {
  const [idx, setIdx] = useState(0);
  const images = [
    { img: img1, caption: "sofas and hairs" },
    { img: img2, caption: "lighting" },
    { img: img3, caption: "sofas" },
    { img: img4, caption: "table and side board" },
    { img: img5, caption: "side board" },
  ];

  const onClickHandler = (idx) => {
    setIdx(idx);
  };

  const slideAnimationHandler = () => {
    gsap.fromTo(
      ".slide__img",
      0.75,
      { y: -125, scaleY: 1.5, opacity: 0, ease: "Power0.easeIn" },
      { y: 0, scaleY: 1, opacity: 0.65 }
    );
    gsap.fromTo(
      ".caption",
      0.5,
      { y: 25, opacity: 0, ease: "Power0.easeIn" },
      { y: 0, opacity: 1 }
    );

    gsap.fromTo(
      ".current__position",
      0.5,
      { y: 25, opacity: 0, ease: "Power0.easeIn" },
      { y: 0, opacity: 1 }
    );
  };

  useEffect(() => {
    slideAnimationHandler();
  });

  const slideIndicatorAnimationHandler = () => {
    gsap.fromTo(
      ".active",
      0.75,
      { scale: 0.5, opacity: 0, ease: "Power0.easeIn" },
      { scale: 1, opacity: 1 }
    );
  };

  const indicatorsHandler = () => {
    const lists = [];
    for (let i = 0; i < images.length; i++) {
      lists.push(
        <li
          key={i}
          className={"indicator " + (idx === i ? "active" : null)}
          onClick={(e) => {
            e.target.classList.add("active");
            slideIndicatorAnimationHandler();
            onClickHandler(i);
            slideAnimationHandler();
          }}
        ></li>
      );
    }
    return lists;
  };

  return (
    <div className="app">
      <div className="slides__container">
        <img
          className="slide__img"
          src={images[idx].img}
          alt={images[idx].caption}
          key={idx}
        />
        <h1 className="caption">{images[idx].caption}</h1>
        <ul className="indicators">
          {indicatorsHandler().map((list) => list)}
        </ul>
        <div className="image__position">
          <span className="current__position">{idx + 1}</span> <span>/</span>{" "}
          {images.length}
        </div>
      </div>
    </div>
  );
}
