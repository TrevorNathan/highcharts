import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
	series: [
		{
			name: "Profit",
			data: [100, 200, 30, 100, 500],
		},
	],
};
export const InReact = () => {
	return (
		<div className="App">
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
};
