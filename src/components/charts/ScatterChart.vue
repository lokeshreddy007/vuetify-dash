<template>
    <div class="mt-5">
        <echarts :option="option" :events="events" style="width:auto;height:420px;"></echarts>
    </div>
</template>
<script>
export default {
    data() {
        return {
            option: {
                backgroundColor: '#cdd0d5',
                // new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                //     offset: 0,
                //     color: '#f7f8fa'
                // }, {
                //     offset: 1,
                //     color: '#cdd0d5'
                // }]),
                title: {
                    text: 'Life expectancy and GDP of various countries in 1990 and 2015'
                },
                legend: {
                    right: 10,
                    data: ['1990', '2015']
                },
                xAxis: {
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    }
                },
                yAxis: {
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    },
                    scale: true
                },
                series: [{
                    name: '1990',
                    data: this.data[0],
                    type: 'scatter',
                    symbolSize: function(data) {
                        return Math.sqrt(data[2]) / 5e2;
                    },
                    emphasis: {
                        label: {
                            show: true,
                            formatter: function(param) {
                                return param.data[3];
                            },
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(120, 36, 50, 0.5)',
                        shadowOffsetY: 5,
                        color: 'rgb(204, 46, 72)',
                        // new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        //     offset: 0,
                        //     color: 'rgb(251, 118, 123)'
                        // }, {
                        //     offset: 1,
                        //     color: 'rgb(204, 46, 72)'
                        // }]
                        // )
                    }
                }, {
                    name: '2015',
                    data: this.data[1],
                    type: 'scatter',
                    symbolSize: function(data) {
                        return Math.sqrt(data[2]) / 5e2;
                    },
                    emphasis: {
                        label: {
                            show: true,
                            formatter: function(param) {
                                return param.data[3];
                            },
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(25, 100, 150, 0.5)',
                        shadowOffsetY: 5,
                        color: 'rgb(25, 183, 207)',
                        // new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        //     offset: 0,
                        //     color: 'rgb(129, 227, 238)'
                        // }, {
                        //     offset: 1,
                        //     color: 'rgb(25, 183, 207)'
                        // }])
                    }
                }]
            }
        }
    },
    methods: {
        click(data) {
            console.log(data)
        }
    },
    props: {
        data: Array
    }
}
</script>