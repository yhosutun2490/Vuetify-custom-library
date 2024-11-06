import Paginator from './Paginator.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
/** 
 * - dataLength 資料總數
 * - dataPerPage 每個分頁要顯示的資料筆數 
 * - 文件 [Vuetify Paginator](https://primevue.org/paginator/#currentpagereport)
 ***
 ### data (emit)
 * - 目前頁數 currentPage
 * */
export default {
  title: 'Paginator/Paginator',
  component: Paginator,
  tags: ['autodocs'],
  argTypes: {
    dataLength: {
      control: {type: 'number'},
      description: 'Total number of items',
      defaultValue: 56,
    },
    dataPerPage: {
      control: 'number',
      description: 'Number of items per page',
      defaultValue: 6,
    },
  },
};

const Template = (args) => ({
  components: { Paginator },
  setup() {
    return { args };
  },
  template: '<Paginator v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  dataLength: 56,
  dataPerPage: 6,
};

// 示例：3 頁
export const ThreePages = Template.bind({});
ThreePages.args = {
  dataLength: 18,  // 3頁，假設每頁6個項目
  dataPerPage: 6,
};

// 示例：多頁數
export const TenPages = Template.bind({});
TenPages.args = {
  dataLength: 60,  // 10頁，假設每頁6個項目
  dataPerPage: 6,
};