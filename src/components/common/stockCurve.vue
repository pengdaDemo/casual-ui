<template>
  <div>
    <el-button  type="danger" plain @click="visible">行情</el-button>
    <el-dialog :visible.sync="dialogVisible" width="60%" style="transform: translate(0%,10%);" top="2vh" @close="closes">
      <div :id="value.stock_code" style="width: 90%;height: 400px;"></div>
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
        opinionData: ["3", "2.1", "40", "14.5", "5", "10"],
        xAxisData: ["1","2","3","4","5", "6"],
        yAxisMax: 50,
        interval: 10
      }
    },
    methods: {
      visible() {
        let doc;
        this.dialogVisible = true;
        this.$nextTick(()=>{//dialog中的元素第一次打开只有在这里面能获取
          this.$axios.get('/api/stock/atockHistory?stockCode=' + this.value.stock_code).then(res=>{
            this.opinionData = res.data.data.yData;
            this.xAxisData = res.data.data.xData;
            doc = document.getElementById(this.value.stock_code);
            this.drawLine(doc);
          });
        })
      },
      closes(){
        console.log('关闭dislog')
        //this.charts.clear();
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
            width: 600,
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
