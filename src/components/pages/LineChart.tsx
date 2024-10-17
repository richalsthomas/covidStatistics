import Plot from "react-plotly.js";
import { sumofData } from "../../utility/sumOfData";
import { covidData } from "../../data/covidData";
import { useSelector } from "react-redux";

export default function LineChart() {
  const selectedStates = useSelector((state: any) => state?.selectedStates);

  const dataSum = sumofData(
    covidData?.filter(
      (state) =>
        !selectedStates ||
        selectedStates?.length === 0 ||
        selectedStates?.includes(state.state)
    )
  );

  const data = [
    {
      x: ["Active Cases", "Recovered", "Death"],
      y: [
        // dataSum.sum_of_total_cases,
        dataSum.sum_of_active_cases,
        dataSum.sum_of_recovered,
        dataSum.sum_of_death,
      ],
      type: "scatter",
      mode: "lines+markers",
      marker: { color: "blue" },
      name: "COVID Cases",
    },
  ];

  const layout = {
    title: "COVID Cases Over Time",
    xaxis: {
      title: "Type of cases",
    },
    yaxis: {
      title: "Number of Cases",
    },
  };

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <Plot data={data as any} layout={layout} config={{ responsive: true }} />
    </div>
  );
}
