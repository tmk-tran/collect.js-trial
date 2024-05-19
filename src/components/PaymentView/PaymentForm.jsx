import React, { useEffect, useState, useRef } from "react";
import { Button } from "@mui/material";

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
      "border-radius": "3px",
      padding: "6px",
      "font-size": "16px",
      height: "33px",
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
      <div id="ccnumber"></div>
      <br />
      <div id="ccexp"></div>
      <br />
      <div id="cvv"></div>
    </form>
  );
}

export default PaymentForm;
