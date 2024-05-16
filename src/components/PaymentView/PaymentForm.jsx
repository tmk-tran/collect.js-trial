import React, { useEffect, useState } from "react";

function PaymentForm() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!scriptLoaded && document.body) {
      const customCss = {
        "border-style": "solid",
        "border-color": "#c7c7c7",
        "border-width": "1px",
        "border-radius": "3px",
        padding: "6px",
        "font-size": "16px",
        height: "33px",
      };

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

      setScriptLoaded(true);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [scriptLoaded]);

  console.log("log test");

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
