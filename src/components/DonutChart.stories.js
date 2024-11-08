// PieChart.stories.js
import DonutChart from './DonutChart.vue'

export default {
  title: 'Chart/DonutChart',
  tags: ['autodocs'],
  component: DonutChart,
  argTypes: {
    data: {
      description: '資料來源，為一個數值陣列。',
      control: {
        type:'array'
      },
    },
    colorList: {
      description: '圖表顏色列表，為一個字串陣列。',
      control: {
        type:'array'
      },
    },
    labelsName: {
      description: '標籤名稱，為一個字串陣列。',
      control: {
        type:'array'
      },
    },
    labelsPosition: {
      description: '標籤位置，接受 "top" 或 "bottom"。',
      control: {
        type:'text'
      },
    },
    dataLabelsTextSize: {
      description: '資料顯示字體大小和粗度(fontWeight)',
      control: {
        type:'object'
      },
    },
  },
}

const Template = (args) => ({
  components: { DonutChart },
  setup() {
    return { args }
  },
  template: '<DonutChart v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {}
