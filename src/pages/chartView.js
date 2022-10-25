import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChartBox } from "../components/chart/ChartBox";

export function ChartView() {
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    const fetchSingleCounty = async () => {
      axios
        .post("https://countriesnow.space/api/v0.1/countries/population", {
          country: "Pakistan",
        })
        .then((res) => {
          setCountryData(res.data);
        })
        .catch((error) => console.log(error));
    };
    fetchSingleCounty();
  }, []);

  return <ChartBox countryData={countryData} />;
}
