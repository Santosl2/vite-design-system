import { Button, Input } from "./lib/components";
import { WhitelabelProvider } from "./lib/shared/context/Whitelabel";
import { DEFAULT_THEME } from "./lib/theme/default-theme";

function App() {
  return (
    <WhitelabelProvider whitelabelTheme={DEFAULT_THEME}>
      <Button>Hello world</Button>
      <Input name="name" placeholder="E-mail" />
    </WhitelabelProvider>
  );
}

export { App };
