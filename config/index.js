option = {
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'cross',
			crossStyle: {
				color: '#999'
			}
		}
	},
	toolbox: {
		feature: {
			saveAsImage: { show: true }
		}
	},
	legend: {
		data: ['确诊人数', '无症状感染者人数']
	},
	xAxis: [
		{
			type: 'category',
			data: ['3/28', '3/29', '3/30', '3/31', '4/1', '4/2'],
			axisPointer: {
				type: 'shadow'
			}
		}
	],
	yAxis: [
		{
			type: 'value',
			axisLabel: {
				formatter: '{value} 人'
			}
		}
	],
	series: [
		{
			name: '确诊人数',
			type: 'bar',
			tooltip: {
				valueFormatter: function (value) {
					return value + '人';
				}
			},
			label: {
				show: true,
				position: 'top',
				color: '#333',
				formatter: '{@score}人'
			},
			itemStyle:{
				color: 'rgb(222, 110, 106)'
			},
			data: [96, 326, 355, 358, 260, 438]
		},
		{
			name: '无症状感染者人数',
			type: 'bar',
			tooltip: {
				valueFormatter: function (value) {
					return value + '人';
				}
			},
			label: {
				show: true,
				position: 'top',
				color: '#666',
				formatter: '{@score}人'
			},
			itemStyle:{
				color: 'rgb(158, 201, 126)'
			},
			data: [4381, 5656, 5298, 4144, 6051, 7788]
		}
	]
};
