import React, { useContext, useState } from "react";
import Class from "../components/Class";
import Function from "../components/Function";
import { GlobalState } from "../context/GlobalContext";
import SingleCard from "../components/SingleCard";

const Home = () => {
  const [state, setState] = useState([]);
  const { state: a } = useContext(GlobalState);
  console.log(state);
  //  let b =  state.find((item)=>item.category == 'men')
  return (
    <>
      <Class />
      <Function />
      {a.slice(0, 3).map((item) => {
        return <SingleCard product={item}/>
      })}
    </>
  );
};

export default Home;
