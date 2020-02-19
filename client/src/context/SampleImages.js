import wedding1 from "../images/wedding1.jpg";
import wedding2 from "../images/wedding2.jpg";
import wedding3 from "../images/wedding3.jpg";
import wedding4 from "../images/wedding4.jpg";
import wedding5 from "../images/wedding5.jpg";
import wedding6 from "../images/wedding6.jpg";
import wedding7 from "../images/wedding7.jpg";
import wedding8 from "../images/wedding8.jpg";
import portrait1 from "../images/portrait1.jpg";
import portrait2 from "../images/portrait2.jpg";
import portrait3 from "../images/portrait3.jpg";
import portrait4 from "../images/portrait4.jpg";
import portrait5 from "../images/portrait5.jpg";
import portrait6 from "../images/portrait6.jpg";
import portrait7 from "../images/portrait7.jpg";
import portrait8 from "../images/portrait8.jpg";
import landscape1 from "../images/landscape1.jpg";
import landscape2 from "../images/landscape2.jpg";
import landscape3 from "../images/landscape3.jpg";
import landscape4 from "../images/landscape4.jpg";
import landscape5 from "../images/landscape5.jpg";
import landscape6 from "../images/landscape6.jpg";
import landscape7 from "../images/landscape7.jpg";
import landscape8 from "../images/landscape8.jpg";
import fashion1 from "../images/fashion1.jpg";
import fashion2 from "../images/fashion2.jpg";
import fashion3 from "../images/fashion3.jpg";
import fashion4 from "../images/fashion4.jpg";
import fashion5 from "../images/fashion5.jpg";
import fashion6 from "../images/fashion6.jpg";
import fashion7 from "../images/fashion7.jpg";
import fashion8 from "../images/fashion8.jpg";

import React, { createContext } from "react";

export const SampleImagesContext = createContext();

const state = {
  images: [
    { url: wedding1, type: "wedding" },
    { url: wedding2, type: "wedding" },
    { url: wedding3, type: "wedding" },
    { url: wedding4, type: "wedding" },
    { url: wedding5, type: "wedding" },
    { url: wedding6, type: "wedding" },
    { url: wedding7, type: "wedding" },
    { url: wedding8, type: "wedding" },
    { url: portrait1, type: "portrait" },
    { url: portrait2, type: "portrait" },
    { url: portrait3, type: "portrait" },
    { url: portrait4, type: "portrait" },
    { url: portrait5, type: "portrait" },
    { url: portrait6, type: "portrait" },
    { url: portrait7, type: "portrait" },
    { url: portrait8, type: "portrait" },
    { url: landscape1, type: "landscape" },
    { url: landscape2, type: "landscape" },
    { url: landscape3, type: "landscape" },
    { url: landscape4, type: "landscape" },
    { url: landscape5, type: "landscape" },
    { url: landscape6, type: "landscape" },
    { url: landscape7, type: "landscape" },
    { url: landscape8, type: "landscape" },
    { url: fashion1, type: "fashion" },
    { url: fashion2, type: "fashion" },
    { url: fashion3, type: "fashion" },
    { url: fashion4, type: "fashion" },
    { url: fashion5, type: "fashion" },
    { url: fashion6, type: "fashion" },
    { url: fashion7, type: "fashion" },
    { url: fashion8, type: "fashion" }
  ]
};

const SampleImagesProvider = props => {
  return (
    <SampleImagesContext.Provider value={{ state }}>
      {props.children}
    </SampleImagesContext.Provider>
  );
};

export default SampleImagesProvider;
