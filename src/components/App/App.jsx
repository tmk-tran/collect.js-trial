// ~~~~~~~~~~ Style ~~~~~~~~~~ //
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
// ~~~~~~~~~~ Components ~~~~~~~~~~ //
import PaymentView from "../PaymentView/PaymentView";

const theme = createTheme({
  palette: {
    primary: {
      main: '#00a79d', // Devii button color
    },
  },
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    fontSize: 18, // Set the default font size for the entire application
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
