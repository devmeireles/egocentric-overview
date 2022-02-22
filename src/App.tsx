import React from 'react';
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";

import Navigation from './components/organisms/Navigation';

const App: React.FC = ({ children }) => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box>
          <CssBaseline />
          <Navigation onClick={() => colorMode.toggleColorMode()} />
          <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            {children}
          </Container>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
