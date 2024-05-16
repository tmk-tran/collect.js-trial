import { Box, Card, CardContent, Typography } from "@mui/material";
// ~~~~~~~~~~ Hooks ~~~~~~~~~~ //
import { flexCenter } from "../Utils/pageStyles";
import Logo from "../Logo/Logo";
// import { border } from "../Utils/colors";

const cardStyle = {
  height: "70vh",
  width: "40vw",
  margin: "0 auto",
  backgroundColor: "rgb(23 41 78)",
  borderRadius: 3,
};

export default function PaymentView() {
  return (
    <div
      style={{
        ...flexCenter,
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ mb: 3 }}>
        <Logo />
      </Box>
      <Card sx={cardStyle}>
        <CardContent>
          <Typography variant="h5" sx={{ color: "white" }}>
            Payment
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
