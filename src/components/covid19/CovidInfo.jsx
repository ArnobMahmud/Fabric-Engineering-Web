import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SkeletonCovidCard from "../screens/skeleton/SkeletonCovidCard";
import CustomCard from "./CustomCard";

const CovidInfo = () => {
  const [covidData, setCovidData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      axios.get("https://disease.sh/v3/covid-19/countries/").then((res) => {
        console.log(res);
        setCovidData(res.data);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <CovidDataArea>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <input
              type="text"
              placeholder="Search country here..."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            {loading && <SkeletonCovidCard />}
            {!loading &&
              covidData
                .filter((val) => {
                  if (search === "") {
                    return val;
                  } else if (
                    val.country.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                  return null;
                })
                .map((e, index) => (
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
  input {
    background: transparent;
    color: ${({ theme }) => theme.covidInput};
    width: 60%;
    padding: 10px 30px;
    font-size: 14px;
    border: 2px solid;
    border-color: ${({ theme }) => theme.covidInput};
    border-radius: 50px;
    margin-bottom: 25px;
    font-family: "Rubik";
  }
  input::placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.covidInput};
  }
  input:focus-visible {
    outline: none;
  }
  h3 {
    font-size: 18px;
    color: ${({ theme }) => theme.covidh3};
    font-family: "Josefin Sans";
  }
  h5 {
    font-size: 14px;
    text-align: left;
    color: #312135;
    font-family: "Raleway";
  }
  p {
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.covidp};
    font-family: "Josefin Sans";
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
    input {
      background: transparent;
      width: 90%;
      padding: 10px 20px;
      border-radius: 50px;
      margin-bottom: 20px;
    }
    .info {
      text-align: center;
    }
    .flag {
      max-width: 25%;
    }
  }
`;
