import React, { useEffect, useRef } from "react";
import { Button } from "@mui/material";

const fieldLabelStyle = {
  display: "block",
  textAlign: "left",
  fontSize: "18px",
  color: "ghostwhite",
};

function PaymentForm() {
  // useRef here is used to check if the script has been loaded
  // ensures that the script is only loaded once
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // from collect.js tutorial
    const customCss = {
      "border-style": "solid",
      "border-color": "#c7c7c7",
      "border-width": "1px",
      "border-radius": "10px",
      padding: "6px",
      "font-size": "16px",
      height: "56px",
      "background-color": "transparent", // match the background color
    };

    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://secure.transactiongateway.com/token/Collect.js";
      script.async = true;
      script.setAttribute(
        "data-tokenization-key",
        "7TzE7p-Xp22Ey-9Rb83Y-R4WS3z"
      );
      script.setAttribute("data-variant", "inline");
      script.setAttribute(
        "data-field-ccnumber-placeholder",
        "0000 0000 0000 0000"
      );
      script.setAttribute("data-field-ccexp-placeholder", "10 / 22");
      script.setAttribute("data-field-cvv-placeholder", "123");
      script.setAttribute("data-custom-css", JSON.stringify(customCss));

      document.body.appendChild(script);

      scriptLoaded.current = true;
    };

    if (!scriptLoaded.current) {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", loadScript);
      } else {
        loadScript();
      }
    }

    return () => {
      if (scriptLoaded.current) {
        // Cleanup code if needed
        // document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <form>
      <label htmlFor="ccnumber" style={fieldLabelStyle}>
        Card Number
      </label>
      <br />
      <div id="ccnumber" aria-label="Card Number"></div>
      <br />
      <br />
      <label htmlFor="ccexp" style={fieldLabelStyle}>
        Expiry Date
      </label>
      <br />
      <div id="ccexp" aria-label="Expiry Date"></div>
      <br />
      <br />
      <label htmlFor="cvv" style={fieldLabelStyle}>
        CVV
      </label>
      <br />
      <div id="cvv" aria-label="CVV"></div>
      <br />
      <br />
      <Button fullWidth variant="contained" sx={{ borderRadius: 50 }}>
        Submit
      </Button>
    </form>
  );
}

export default PaymentForm;
