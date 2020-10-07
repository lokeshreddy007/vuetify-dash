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
                    text: this.title,
                    left: 'center'
                },
                dataZoom: [{
                        type: 'slider',
                        xAxisIndex: 0,
                        filterMode: 'empty',
                        start: 25,
                        end: 40,
                    },
                    {
                        type: 'inside',
                        xAxisIndex: 0,
                        filterMode: 'empty',
                        start: 25,
                        end: 40,
                    }
                ],
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: this.date
                },
                yAxis: {
                    type: 'value'
                },
                itemStyle: {
                    color: 'rgba(184,196,199)'
                },
                series: [{
                    data: this.sum,
                    type: 'line',
                    areaStyle: {}
                }]
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