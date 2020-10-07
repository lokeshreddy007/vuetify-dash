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
        text: 'Top Sales',
        subtext: 'Ecommerce',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data:['Mobiles', 'Bikes', 'Cars', 'Laptops', 'Earphones']
    },
    series: [
        {
            name: 'Top Sales',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                 {value: 335, name: 'Mobiles'},
                {value: 310, name: 'Bikes'},
                {value: 234, name: 'Cars'},
                {value: 135, name: 'Laptops'},
                {value: 1548, name: 'Earphones'}
                ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
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
        machineId: Array,
        title: String
    }
}
</script>