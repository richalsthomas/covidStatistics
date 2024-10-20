import Plot from "react-plotly.js";
import { sumofData } from "../../utility/sumOfData";
import { covidData } from "../../data/covidData";
import { useSelector } from "react-redux";
import useDarkmodeProp from "../../utility/useDarkmodeProp";

export default function LineChart() {
  const layout = useDarkmodeProp({
    title: "Covid Statistics",
    xaxis: "Type of cases",
    yaxis: "Number of Cases",
  });

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

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <Plot data={data as any} layout={layout} config={{ responsive: true }} />
    </div>
  );
}
