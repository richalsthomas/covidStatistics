import { CovidDataType } from "../data/covidData";

export const sumofData = (propData: CovidDataType[]) => {
  let data = propData;
  return data.reduce(
    (acc, curr) => {
      acc.sum_of_total_cases += curr.total_cases;
      acc.sum_of_active_cases += curr.active_cases;
      acc.sum_of_recovered += curr.recovered;
      acc.sum_of_death += curr.death;
      return acc;
    },
    {
      sum_of_total_cases: 0,
      sum_of_active_cases: 0,
      sum_of_recovered: 0,
      sum_of_death: 0,
    }
  );
};
