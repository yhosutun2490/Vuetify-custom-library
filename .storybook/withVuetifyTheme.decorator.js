import { h } from 'vue';
import StoryWrapper from './StoryWrapper.vue';

export const DEFAULT_THEME = 'light';
export const withVuetifyTheme = (storyFn, context) => {
  const story = storyFn();
  // Pull our global theme variable, fallback to DEFAULT_THEME
  const themeName = context.globals.theme || DEFAULT_THEME;
  return () => {
    return h(
      StoryWrapper,
      {themeName}, // Props for StoryWrapper
      {
        // Puts your story into StoryWrapper's "story" slot with your story args
        story: () => h(story, { ...context.args }),
      }
    );
  };
};