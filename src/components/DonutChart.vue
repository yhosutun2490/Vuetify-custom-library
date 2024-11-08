<template>
  <div class="donut-chart">
    <apexchart type="donut" width="380" :options="chartOptions" :series="data"></apexchart>
  </div>
</template>
<script setup>
import { defineProps, ref ,computed} from 'vue'
/**
 * @prop {Array} data - 資料來源，為一個數值陣列。
 * @prop {Array} colorList - 圖表顏色列表。
 * @prop {Array} labelsName - 標籤名稱列表。
 * @prop {String} labelsPosition - 標籤位置，接受 "top" 或 "bottom"。
 */
const props = defineProps({
  data: {
    type: Array,
    default: ()=> [44, 55]
  },
  colorList: {
    type: Array,
    default: ()=> ["#D197CC", "#FC9F66",]
  },
  labelsName: {
    type: Array,
    default: ()=> ["標籤1", "標籤2",]
  },
  labelTextColor: {
    type: String,
    default: "#8A8A8A"
  },
  labelsPosition: {
    type: String,
    default: "center",
    validator(value) {
      // The value must match one of these strings
      return ['center', 'top', 'bottom','left'].includes(value)
    }
  },
  dataLabelsTextSize: {
    type: Object,
    default: () => ({
      fontSize: "14px",
      fontWeight: 400,
    })
  }
})

const extraData = ref('')
const chartOptions = computed(()=>({
  chart: {
      type: "donut",
    },
  colorList: props.colorList,
  labels:  props.labelsName,
  legend: {
    width: 230,
    offsetY: 100,
    position: props.labelsPosition,
    floating: true, //使legend浮動在圖表上方
    labels: {
      colors: props.labelTextColor,
    },
    itemMargin: {
      horizontal: 0,
    },
    markers: {
      width: 9,
      height: 9,
      radius: 9,
      offsetX: 0,
      offsetY: 0,
    },
  },
  plotOptions: {
    pie: {
      customScale: 1.0,
      offsetX: 0, //圓餅圖位置
    },
  },
  dataLabels: {
    //圓餅圖上顯示的數值設定
    style: {
      fontSize: "14px",
      fontWeight: 400,
    },
    dropShadow: {
      enabled: false, //是否要有陰影
    },
  },

    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        // console.log("所有圖表的資訊", w.globals);
        // console.log(series, seriesIndex, dataPointIndex)
        let Unit = unit || "人";
        if (extraData.value) {
          //假如有額外的資料要在hover時顯示的話
          const Data = extraData[seriesIndex]?.toLocaleString();
          const Text = extraUnit === "($)" ? "金額" : "人數";
          return (
            `<ul style="background-color:${w.globals?.colors[seriesIndex]}; padding:6px 10px 6px 10px;font-size:12px; font-weight:400">` +
            `<li>${labels[seriesIndex]}：${w.globals?.seriesTotals[
              seriesIndex
            ]?.toLocaleString()}${Unit}</li>` +
            `<li>${Text}：${Data}${extraUnit}</li>` +
            "</ul>"
          );
        } else {
          return (
            `<ul style="background-color:${w.globals.colors[seriesIndex]}; padding:6px 10px 6px 10px;font-size:12px; font-weight:400">` +
            `<li>${labels[seriesIndex]}：${w.globals.seriesTotals[
              seriesIndex
            ]?.toLocaleString()}${Unit}</li>` +
            "</ul>"
          );
        }
      },
    },
    responsive:  [
      {
        options: {
          chart: {
            width: 100,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    noData: {
      text: "此時間範圍無資料",
      align: "center",
      verticalAlign: "middle",
      offsetX: 0,
      offsetY: -15,
      style: {
        color: "#8A8A8A",
        fontSize: "14px",
      },
    },
  }))

</script>