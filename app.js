document.addEventListener("DOMContentLoaded", () => {
	Highcharts.chart("container", {
		chart: {
			type: "bar",
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
			formatter() {
				return `<strong>X value</strong> - ${this.x}. <em>Y value - ${this.y}`;
			},
		},
		/*
		tooltip: {
			formatter() {
				let s = `<strong>X is: </strong> ${this.x}`;
				console.log(this);
				this.points.forEach(function (point) {
					s += `<br>Y is: ${point.y} - ${point.series.name}`;
				});
				return s;
			},
			shared: true,
		},
		*/
		yAxis: {
			title: {
				text: "Fruits Eaten",
			},
		},
		xAxis: {
			categories: ["Apples", "Bananas", "Oranges"],
			alternateGridColor: "#F5F5F5",
		},
		series: [
			/*
			{
				name: "John",
				data: [1, 10, 20, 40, 2],
			},
			{
				name: "Jane",
				data: [2, 4, 8],
			},
			*/
			// {
			// 	data: [
			// 		["Jane", 10],
			// 		["Jack", 10],
			// 		["Peter", 9],
			// 	],
			// },
			/*
			{
				data: [
					{ name: "Jack", y: 10, x: 2, color: "red" },
					{ name: "Jane", y: 20, x: 4 },
				],
			},
			*/
			// {
			// 	name: "Negative data",
			// 	negativeColor: "red",
			// 	data: [1, 2, 3, 6, -10, 8, 20, 2],
			// },
			{
				name: "Different colors",
				data: [-4, -8, 0, 4, 5, 6, 9, 10, 12, 15, 10, 9, 7, -4],
				zones: [
					{
						value: 0,
						color: "#f7a35c",
					},
					{
						value: 10,
						color: "#7cb5ec",
					},
					{
						color: "#90ed7d",
					},
				],
			},
		],
	});
});
