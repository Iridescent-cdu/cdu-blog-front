<script setup>
import { onMounted, ref } from 'vue'

import * as G2 from '@antv/g2'
import { getTotalViews } from '../../../../api/admin'

const totalViewsData = ref({})
let chart = null
const renderTotalViewsChart = (data) => {
  if (chart) {
    return null
  } else {
    chart = new G2.Chart({
      container: 'mountNode',
      forceFit: true,
      width: 1058, // 指定图表宽度
      height: 300, // 指定图表高度
    })
    chart.data(data)
    // 指定量度
    chart.scale('value', {
      min: 0,
      // 指定value轴刻度
      ticks: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    })
    chart.scale('month', {
      range: [0, 1],
    })
    chart.tooltip({
      crosshairs: {
        type: 'line',
      },
    })
    chart.line().position('month*value')
    chart.point().position('month*value').size(4).shape('circle').style({
      stroke: '#fff',
      lineWidth: 1,
    })
    chart.render()
  }
}

onMounted(async () => {
  // 1.获取totalViewsData数据
  totalViewsData.value = await getTotalViews()
  // 2.获取完数据后渲染图表
  renderTotalViewsChart(totalViewsData.value)
})
</script>

<template>
  <div class="ml-10.5">
    <div class="font-serif text-13xl mb-6.5">Total Views</div>
    <div id="mountNode"></div>
  </div>
</template>

<style scoped lang="scss"></style>
