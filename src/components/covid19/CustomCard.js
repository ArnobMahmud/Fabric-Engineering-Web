import React from "react";

const CustomCard = (props) => {
  return (
    <div>
      <div className="row justify-content-between">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <h3> {props.countryName}</h3>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <img className="flag" src={props.countryImg} alt="" />
        </div>
      </div>
      <div className="row text-center info">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <h5>Total Cases</h5>
          <p>{props.cases}</p>
        </div> 
        <div className="col-lg-4 col-md-6 col-sm-6">
          <h5>Total Recovered</h5>
          <p>{props.recovered}</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <h5>Recovered Today</h5>
          <p>{props.todayRecovered}</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <h5>Cases Today</h5>
          <p>{props.todayCases}</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <h5>Deaths Today</h5>
          <p>{props.todayDeaths}</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <h5>Total Deaths</h5>
          <p>{props.deaths}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
