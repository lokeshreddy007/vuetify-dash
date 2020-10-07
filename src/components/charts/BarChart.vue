<template>
    <div class="mt-5">
        <echarts :option="option" :events="events" style="width:auto;height:420px;"></echarts>
    </div>
</template>
<script>
export default {
  data () {
    return {
      option: {
            title: {
                text: 'Products'
            },
            tooltip: {},
            legend: {
                data:['Sales']
            },
            xAxis: {
                data: ['shirt','cardign','chiffon shirt','pants','heels','socks']
            },
            yAxis: {},
            series: [{
                name: 'Sales',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        },
        events: {
            click: this.click
        }
    }
  },
  methods: {
      click (data) {
          console.log(data)
      }
  }
}
</script>