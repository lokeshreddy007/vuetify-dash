<template>
    <div class="mt-5">
        <echarts class="text-white" :option="option" :events="events" style="width:auto;height:420px;"></echarts>
    </div>
</template>
<script>
export default {
    data() {
        return {
            option: {
                title: {
                    text: 'Revenue'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data: ['Doppio', 'Americano', 'Latte', 'Cappuccino', 'Espresso']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
                }],
                yAxis: [{
                    type: 'value'
                }],
                series: [{
                        name: 'Doppio',
                        type: 'line',
                        itemStyle: {
                            color: '#808080'
                        },
                        areaStyle: {
                            color: 'rgba(184,196,199)'
                        },
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    },
                    {
                        name: 'Americano',
                        type: 'line',
                        itemStyle: {
                            color: '#808080'
                        },
                        areaStyle: {
                            color: 'rgba(184,196,199)'
                        },
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: 'Latte',
                        type: 'line',
                        itemStyle: {
                            color: '#808080'
                        },
                        areaStyle: {
                            color: 'rgba(184,196,199)'
                        },
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: 'Cappuccino',
                        type: 'line',
                        itemStyle: {
                            color: '#808080'
                        },
                        areaStyle: {
                            color: 'rgba(184,196,199)'
                        },
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: 'Espresso',
                        type: 'line',
                        itemStyle: {
                            color: '#808080'
                        },
                        areaStyle: {
                            color: 'rgba(184,196,199)'
                        },
                        data: [320, 332, 301, 334, 390, 330, 320]
                    }
                ]
            },
            events: {
                click: this.click
            }
        }
    },
    methods: {
        click(data) {
            console.log(data)
        }
    },
    props: {
        date: Array,
        sum: Array,
        title: String
    }
}
</script>