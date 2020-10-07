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
                title: {
                    text: this.title,
                    textStyleColor: 'whilte'
                },
                color: ['#97BF0E'],
                tooltip: {},
                grid: {
                    bottom: 90
                },
                dataZoom: [{
                        show: true,
                        start: 25,
                        end: 50,
                    },
                    {
                        type: 'inside',
                        start: 94,
                        end: 100
                    },
                    {
                        show: true,
                        yAxisIndex: 0,
                        filterMode: 'empty',
                        width: 30,
                        height: '80%',
                        showDataShadow: false,
                        left: '93%'
                    }
                ],
                legend: {
                    data:[this.title.split(" ").join("")]
                },
                xAxis: {
                    data:  this.date
                },
                yAxis: {},
                series: [{
                    name: this.title.split(" ").join(""),
                    type: 'bar',
                    data: this.sum
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