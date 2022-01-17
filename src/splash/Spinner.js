import HashLoader from "react-spinners/HashLoader";
import React from "react";

const Spinner = (props) => {
  const style = {
    position: "fixed",
    top: "30%",
    left: "50%",
    transform: "translate(-30%, -50%)",
    textAlign: "center",
  };
  return (
    <div style={style}>
      <HashLoader color={"#283f50"} loading={props.loading} size={150} />
    </div>
  );
};

export default Spinner;
