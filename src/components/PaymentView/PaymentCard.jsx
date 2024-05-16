import { Card, CardContent, Typography } from "@mui/material";
import PaymentForm from "./PaymentForm";

const cardStyle = {
  height: "70vh",
  width: "40vw",
  margin: "0 auto",
  backgroundColor: "rgb(23 41 78)",
  borderRadius: 3,
};

export default function PaymentCard() {
  return (
    <Card sx={cardStyle}>
      <CardContent>
        <Typography variant="h5" sx={{ color: "white" }}>
          Payment
        </Typography>
        <PaymentForm />
      </CardContent>
    </Card>
  );
}
