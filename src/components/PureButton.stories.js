import PureButton from './PureButton.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
/** 單純Vue button
 * - dataLength 資料總數
 ***
 ### data (emit)
 * - 
 * */
export default {
  title: 'Button/PureButton',
  component: PureButton,
  tags: ['autodocs'],
  argTypes: {
  },
};

const Template = (args) => ({
  components: { PureButton },
  setup() {
    return { args };
  },
  template: '<PureButton v-bind="args" />',
});
export const Default = Template.bind({});
Default.args = {
  // 在這裡傳入 PureButton 需要的 props
};

