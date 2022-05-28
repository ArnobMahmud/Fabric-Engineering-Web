import HashLoader from "react-spinners/HashLoader";
import React from "react";
import audio from "../audio/time.mp3";

const Spinner = (props) => {
  const style = {
    position: "fixed",
    top: "30%",
    left: "50%",
    transform: "translate(-30%, -50%)",
    textAlign: "center",
  };
  return (
    <>
      <audio controls autoPlay="true" loop="true" hidden>
        <source src={audio} type="audio/mp3" />
      </audio>
      
      <div style={style}>
        <HashLoader color={"#283f50"} loading={props.loading} size={130} />
      </div>
    </>
  );
};

export default Spinner;
