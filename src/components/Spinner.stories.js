import Spinner from "./Spinner.vue";


export default {
  title: 'Loading/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
  },
};

const Template = (args) => ({
  components: { Spinner },
  setup() {
    return { args };
  },
  template: '<Spinner v-bind="args" />',
});
export const Default = Template.bind({});
Default.args = {
  // 在這裡傳入 PureButton 需要的 props
};

