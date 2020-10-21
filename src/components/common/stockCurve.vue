<template>
  <div>
    <el-button @click="visible">点击</el-button>
    <el-dialog :visible.sync="dialogVisible" width="50%" style="transform: translate(0%,10%);" top="2vh">
      <div id="main" style="width: 800px;height: 400px;"></div>
    </el-dialog>
  </div>
</template>
<script type="text/javascript">
  export default {
    name:'stockCurve',
    props: {
      value: Object
    },
    data() {
      return {
        dialogVisible: false,
        charts: '',
        opinionData: ["3", "2", "40", "4", "5", "10"],
        xAxisData: ["1","2","3","4","5", "6"],
        yAxisMax: 100,
        interval: 20
      }
    },
    methods: {
      visible() {
        let doc;
        this.dialogVisible = true;
        this.$nextTick(()=>{//dialog中的元素第一次打开只有在这里面能获取
          this.getStockHistory(this.value.stockCode);
          doc = document.getElementById('main');
          this.drawLine(doc);
        })
      },
      getStockHistory(stockCode){
        console.log(stockCode)
      },
      drawLine(doc) {
        this.charts = this.$echarts.init(doc);
        this.charts.setOption({
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['股票行情监控']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '5%',
            containLabel: true,
            width: 1100,
            height: 380
          },

          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.xAxisData

          },
          yAxis: {
            type: 'value',
            min: 0,
            max: this.yAxisMax,
            interval: this.interval,
            axisLabel: {
              formatter: '{value}'
            }
          },

          series: [{
            name: '股票行情监控',
            type: 'line',
            stack: '总量',
            data: this.opinionData,
            itemStyle : {
              normal : {
                lineStyle:{
                  color:'#40b531'
                }
              }
            }
          }]
        })
      }
    }
  }
</script>
