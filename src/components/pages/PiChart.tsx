import Plot from "react-plotly.js";
import { covidData } from "../../data/covidData";
import { sumofData } from "../../utility/sumOfData";
import { useSelector } from "react-redux";
import useDarkmodeProp from "../../utility/useDarkmodeProp";

export default function PiChart() {
  const layout = useDarkmodeProp({ title: "Covid Statistics" });

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
      values: [
        // dataSum.sum_of_total_cases,
        dataSum.sum_of_active_cases,
        dataSum.sum_of_recovered,
        dataSum.sum_of_death,
      ],
      labels: ["Active Cases", "Recovered", "Death"],
      type: "pie",
      textinfo: "label+percent",
    },
  ];

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <Plot data={data as any} layout={layout} config={{ responsive: true }} />
    </div>
  );
}
