import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SkeletonCovidCard from "../screens/skeleton/SkeletonCovidCard";
import CustomCard from "./CustomCard";

const CovidInfo = () => {
  const [covidData, setCovidData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      axios
        .get("https://disease.sh/v3/covid-19/countries/")
        .then((res) => {
          console.log(res);
          setCovidData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
    return () => clearTimeout(timing);
  }, []);
  return (
    <div>
      <CovidDataArea>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            {loading && <SkeletonCovidCard />}
            {!loading &&
              covidData.map((e, index) => (
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="card">
                    <div key={index}>
                      <CustomCard
                        countryName={e.country}
                        countryImg={e.countryInfo.flag}
                        cases={e.cases}
                        recovered={e.recovered}
                        todayRecovered={e.todayRecovered}
                        todayCases={e.todayCases}
                        todayDeaths={e.todayDeaths}
                        deaths={e.deaths}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </CovidDataArea>
    </div>
  );
};

export default CovidInfo;

const CovidDataArea = styled.div`
  margin: 200px 0px 60px;
  h3 {
    color: ${({ theme }) => theme.covidh3};
  }
  h5 {
    text-align: left;
    color: #312135;
  }
  p {
    text-align: left;
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.covidp};
  }
  .info {
    padding-top: 30px;
  }
  .flag {
    max-width: 30%;
  }
  @media (max-width: 992px) {
    .flag {
      max-width: 60%;
    }
  }
  @media (max-width: 767px) {
    .info {
      text-align: center;
    }
    .flag {
      max-width: 25%;
    }
  }
`;
