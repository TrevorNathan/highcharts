document.addEventListener("DOMContentLoaded", () => {
	Highcharts.chart("container", {
		chart: {
			type: "column",
			zoomType: "x",
		},
		title: {
			text: "My Fruits Chart",
		},
		colors: ["#E9B44C", "#9B2915", "#50A2A7", "#1C110A", "#E4D6A7"],
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
		tooltip: {
			animation: false,
			backgroundColor: "#333333",
			borderColor: "red",
			borderRadius: 20,
			followPointer: true,
			style: {
				color: "#ffffff",
			},
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
