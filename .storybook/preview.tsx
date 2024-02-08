import type { Preview } from "@storybook/react";
import { WhitelabelProvider } from "../src/lib/shared/context/Whitelabel";
import React from "react";
import { DEFAULT_THEME } from "../src/lib/theme/default-theme";

const preview: Preview = {
  decorators: [
    (Story) => (
      <WhitelabelProvider whitelabelTheme={DEFAULT_THEME}>
        <Story />
      </WhitelabelProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
