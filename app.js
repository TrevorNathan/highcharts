document.addEventListener("DOMContentLoaded", () => {
	Highcharts.chart("container", {
		chart: {
			type: "column",
			zoomType: "x",
		},
		credits: {
			//enabled: false,
			text: "My custom credit",
			href: "https://google.com",
			position: {
				align: "left",
				x: 10,
			},
			style: {
				fontSize: "15px",
				color: "red",
			},
		},
		title: {
			text: "My Fruits Chart",
		},
		yAxis: {
			title: {
				text: "Fruits Eaten",
			},
		},
		xAxis: {
			categories: ["Apples", "Bananas", "Oranges"],
		},
		series: [
			{
				name: "John",
				data: [1, 2, 3],
			},
			{
				name: "Jane",
				data: [2, 4, 8],
			},
		],
	});
});
