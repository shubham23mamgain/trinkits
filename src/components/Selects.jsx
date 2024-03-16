import React from "react";

import Beach1 from "../assets/beach1.jpg";
import Beach2 from "../assets/beach2.jpg";
import Beach3 from "../assets/beach3.jpg";
import Beach4 from "../assets/beach4.jpg";
import Beach5 from "../assets/beach5.jpg";
import Beach6 from "../assets/beach6.jpg";
import SelectsCard from "./SelectsCard";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectsCard bg={Beach1} text="Vasala" />
      <SelectsCard bg={Beach2} text="Kochi" />
      <SelectsCard bg={Beach3} text="Goa" />
      <SelectsCard bg={Beach4} text="Mumbai" />
      <SelectsCard bg={Beach5} text="Orissa" />
      <SelectsCard bg={Beach6} text="West Bengal" />
    </div>
  );
};

export default Selects;
