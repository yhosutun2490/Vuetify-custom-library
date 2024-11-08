/** @type { import('@storybook/vue3').Preview } */
import { setup } from '@storybook/vue3';
import { registerPlugins } from '../src/plugins';
import { withVuetifyTheme } from './withVuetifyTheme.decorator';
import VueApexCharts from "vue3-apexcharts";
import "apexcharts/dist/apexcharts.css";
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      toolbar: {
        icon: 'paintbrush',
        // Array of plain string values or MenuItem shape
        items: [
          { value: 'light', title: 'Light', left: '🌞' },
          { value: 'dark', title: 'Dark', left: '🌛' },
        ],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
};

// storybook 註冊vuetify app
setup((app) => {
  // Registers your app's plugins into Storybook
  registerPlugins(app);
  app.use(VueApexCharts)
});

/* snipped for brevity */
 
export const decorators = [withVuetifyTheme];

export default preview;
