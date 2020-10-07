<template>
    <div class="mt-5">
        <echarts class="text-white" :option="option" :events="events" style="width:auto;height:420px;"></echarts>
        <p>{{ title }}</p>
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
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    right: 10,
                    top: 20,
                    data: this.machineId
                },
                series: [{
                    name: 'Transaction Per Machine',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: this.date
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
        machineId: Array,
        title: String
    }
}
</script>