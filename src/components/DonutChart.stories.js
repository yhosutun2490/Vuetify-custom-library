import DonutChart from './DonutChart.vue';

export default {
  title: 'Chart/DonutChart',
  tags: ['autodocs'],
  component: DonutChart,
  argTypes: {
    data: {
      description: '資料來源，為一個數值陣列。',
      control: { type: 'array' },
    },
    colorList: {
      description: '圖表顏色列表，為一個字串陣列。',
      control: { type: 'array' },
    },
    labelsName: {
      description: '標籤名稱，為一個字串陣列。',
      control: { type: 'array' },
    },
    labelsPosition: {
      description: '標籤位置，接受 "top" 或 "bottom"。',
      control: { type: 'radio', options: ['top', 'bottom'] },
    },
    dataLabelsTextSize: {
      description: '資料顯示字體大小和粗度 (fontWeight)',
      control: { type: 'object' },
      defaultValue: { fontSize: '12px', fontWeight: 'bold' },
    },
  },
};

const mockFetchData = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve([40, 60]);
    }, 1000);
  });
};

const Template = (args) => ({
  components: { DonutChart },
  setup() {
    return { args };
  },
  template: '<DonutChart v-bind="args" />',
});


export const Default = Template.bind({});
Default.args = {
  data: [40,60],
  isLoading: false,
};

Default.play = async ({ args }) => {
  // 模擬 API 請求
  args.isLoading = true;
  const result = await mockFetchData();
  // 更新 args，顯示加載完成後的資料
  args.data = result;
  args.isLoading = false;
};

export const noData = Template.bind({});
noData.args = {
  data: [],
  isLoading: false,
};
noData.play = async ({ args }) => {
  // 模擬 API 請求
  // 更新 args，顯示加載完成後的資料
  args.isLoading = true;
  await mockFetchData();
  args.data = [];
  args.isLoading = false;
};
