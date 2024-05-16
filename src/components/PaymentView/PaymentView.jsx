import { Box } from "@mui/material";
// ~~~~~~~~~~ Hooks ~~~~~~~~~~ //
import { flexCenter } from "../Utils/pageStyles";
import Logo from "../Logo/Logo";
import PaymentCard from "./PaymentCard";
// import { border } from "../Utils/colors";

export default function PaymentView() {
  return (
    <div
      style={{
        ...flexCenter,
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {/* ~~~~~ Logo ~~~~~ */}
      <Box sx={{ mb: 3 }}>
        <Logo />
      </Box>
      {/* ~~~~~ Form ~~~~~ */}
      <PaymentCard />
    </div>
  );
}
