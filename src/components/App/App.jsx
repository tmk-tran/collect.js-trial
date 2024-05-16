// ~~~~~~~~~~ Style ~~~~~~~~~~ //
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
// ~~~~~~~~~~ Components ~~~~~~~~~~ //
import PaymentView from "../PaymentView/PaymentView";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <PaymentView />
      </div>
    </ThemeProvider>
  );
}

export default App;
