import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <>
      <ButtonContainer>
        <div className="switch-toggle ">
          <input
            type="checkbox"
            className="checkbox"
            id="chk"
            onClick={toggleTheme}
          />
          <label className="label" htmlFor="chk">
            <div className="ball"></div>
          </label>
        </div>
      </ButtonContainer>
    </>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;

const ButtonContainer = styled.div`
  .switch-toggle {
    position: absolute;
    position: fixed;
    top: 45px;
    right: 25px;
    z-index: 110;
  }

  .checkbox {
    opacity: 0;
    position: absolute;
    padding: 0;
    margin: 0;
    border: none;
  }
  .label {
    background-color: #6d617fe0;
    border-radius: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 20px;
    width: 40px;
    transform: scale(1.2);
  }

  .label .ball {
    background-color: #ccc;
    border-radius: 50%;
    position: absolute;
    left: 3px;
    height: 15px;
    width: 15px;
    transition: transform 0.2s linear;
  }

  .checkbox:checked + .label .ball {
    transform: translateX(17px);
  }

  /* .fa-moon {
    color: #f1c40f;
    font-size: 10px;
    margin-left: 5px;
  }

  .fa-sun {
    color: #f39c12;
    font-size: 10px;
  } */
`;
