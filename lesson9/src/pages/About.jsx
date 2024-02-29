import React, { useContext, useState } from "react";
import { GlobalState } from "../context/GlobalContext";
import SingleCard from "../components/SingleCard";
import { Select, Space } from "antd";

const About = () => {
  const { data } = useContext(GlobalState);

  const [state, setState] = useState(data);

  const sortProducts = (value) => {
    console.log(value);
    if (value == "all") {
      setState(data);
      return;
    } else if (value == "low-to-high") {
      let copy = [...state];
      const sortedProducts = copy.sort((a, b) => a.price - b.price);
      setState(sortedProducts);
    } else if (value == "high-to-low") {
      let copy = [...state];
      const sortedProducts = copy.sort((a, b) => b.price - a.price);
      setState(sortedProducts);
    } else if (value == "a-z") {
      let copy = [...state];
      const sortedProducts = copy.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setState(sortedProducts);
    } else if (value == "z-a") {
      let copy = [...state];
      const sortedProducts = copy.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      setState(sortedProducts);
    }
  };
  return (
    <>
      <div className="container">
        <Select
          defaultValue="All"
          style={{
            width: 120,
          }}
          onChange={sortProducts}
          options={[
            {
              value: "all",
              label: "All",
            },
            {
              value: "a-z",
              label: "A-Z",
            },
            {
              value: "z-a",
              label: "Z-A",
            },
            {
              value: "low-to-high",
              label: "Low-to-high",
            },
            {
              value: "high-to-low",
              label: "High-to-low",
            },
          ]}
        />
        <div className="row">
          {state.map((item) => {
            return <SingleCard product={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default About;
