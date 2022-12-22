document.addEventListener("DOMContentLoaded", () => {
	const options = {
		chart: {
			type: "column",
			zoomType: "zx",
		},
		title: {
			text: "My Fruits Chart",
		},
		yAxis: {
			title: {
				text: "Fruits Eaten",
			},
		},
		responsive: {
			rules: [
				{
					condition: {
						maxWidth: 500,
						callback() {
							return false;
						},
					},
					chartOptions: {
						legend: { enabled: false },
						yAxis: { title: { text: "" } },
					},
				},
			],
		},
	};

	// Get data from csv file
	// use JQuery
	/*
	$.get("test.csv", (csv) => {
		options.data = {
			csv,
		};
		Highcharts.chart("container", options);
	});
  */

	// use Fetch
	/*
	fetch("test.csv")
		.then((res) => {
			return res.text();
		})
		.then((csv) => {
			options.data = {
				csv,
			};
			Highcharts.chart("container", options);
		});
    */

	// OR
	options.data = {
		csvURL: "http://localhost:5500/test.csv",
		enablePolling: true,
		dataRefreshRate: 2,
	};
	Highcharts.chart("container", options);
});
