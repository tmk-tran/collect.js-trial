// import React, { useEffect, useRef } from "react";
// import { Button, TextField } from "@mui/material";
// import { flexRowSpace } from "../Utils/pageStyles";
// import { border } from "../Utils/colors";

// const fieldLabelStyle = {
//   display: "block",
//   textAlign: "left",
//   fontSize: "18px",
//   color: "ghostwhite",
// };

// const customCss = {
//   "border-style": "solid",
//   "border-color": "#c7c7c7",
//   "border-width": "1px",
//   "border-radius": "10px",
//   padding: "6px",
//   "font-size": "16px",
//   height: "56px",
//   color: "white",
//   "background-color": "transparent", // match the background color
// };

// function PaymentForm() {
//   // useRef here is used to check if the script has been loaded
//   // ensures that the script is only loaded once
//   const scriptLoaded = useRef(false);

//   useEffect(() => {
//     // from collect.js tutorial
//     // Custom properties added here:
//     // MOVED TO GLOBAL INITIALIZED ABOVE //
//     ///////////////////////////////////////
//     // const customCss = {
//     //   "border-style": "solid",
//     //   "border-color": "#c7c7c7",
//     //   "border-width": "1px",
//     //   "border-radius": "10px",
//     //   padding: "6px",
//     //   "font-size": "16px",
//     //   height: "56px",
//     //   color: "white",
//     //   "background-color": "transparent", // match the background color
//     // };

//     const loadScript = () => {
//       const script = document.createElement("script");
//       script.src = "https://secure.transactiongateway.com/token/Collect.js";
//       script.async = true;
//       script.setAttribute(
//         "data-tokenization-key",
//         "7TzE7p-Xp22Ey-9Rb83Y-R4WS3z"
//       );
//       script.setAttribute("data-variant", "inline");
//       script.setAttribute(
//         "data-field-ccnumber-placeholder",
//         "0000 0000 0000 0000"
//       );
//       script.setAttribute("data-field-ccexp-placeholder", "10 / 22");
//       script.setAttribute("data-field-cvv-placeholder", "123");
//       script.setAttribute("data-custom-css", JSON.stringify(customCss));

//       document.body.appendChild(script);

//       scriptLoaded.current = true;
//     };

//     if (!scriptLoaded.current) {
//       if (document.readyState === "loading") {
//         document.addEventListener("DOMContentLoaded", loadScript);
//       } else {
//         loadScript();
//       }
//     }

//     return () => {
//       if (scriptLoaded.current) {
//         // Cleanup code if needed
//         // document.body.removeChild(script);
//       }
//     };
//   }, []);

//   return (
//     <form>
//       <div style={{ ...flexRowSpace, gap: "25px" }}>
//         {/* ~~~~~ FIRST NAME ~~~~~ */}
//         <div style={{ width: "100%" }}>
//           <label htmlFor="first_name" style={fieldLabelStyle}>
//             First Name
//           </label>
//           <br />
//           <input
//             type="text"
//             id="first_name"
//             style={{ ...customCss, width: "99.8%", padding: 0 }}
//           />
//         </div>
//         {/* ~~~~~ LAST NAME ~~~~~ */}
//         <div style={{ width: "100%" }}>
//           <label htmlFor="last_name" style={fieldLabelStyle}>
//             Last Name
//           </label>
//           <br />
//           <input
//             type="text"
//             id="last_name"
//             style={{ ...customCss, width: "99.8%", padding: 0 }}
//           />
//         </div>
//       </div>
//       <br />
//       {/* ~~~~~ ADDRESS ~~~~~ */}
//       <label htmlFor="address" style={fieldLabelStyle}>
//         Address
//       </label>
//       <br />
//       <input
//         type="text"
//         id="address"
//         style={{ ...customCss, width: "99.8%", padding: 0 }}
//       />
//       <br />
//       <br />
//       {/* ~~~~~ CITY ~~~~~ */}
//       <div style={{ ...flexRowSpace, gap: "25px" }}>
//         <div style={{ width: "100%" }}>
//           <label htmlFor="city" style={fieldLabelStyle}>
//             City
//           </label>
//           <br />
//           <input
//             type="text"
//             id="city"
//             style={{ ...customCss, width: "100%", padding: 0 }}
//           />
//         </div>
//         {/* ~~~~~ STATE ~~~~~ */}
//         <div>
//           <label htmlFor="state" style={fieldLabelStyle}>
//             State
//           </label>
//           <br />
//           <input type="text" id="state" style={{ ...customCss, padding: 0 }} />
//           <br />
//         </div>
//         {/* ~~~~~ ZIP ~~~~~ */}
//         <div>
//           <label htmlFor="zip" style={fieldLabelStyle}>
//             Zip Code
//           </label>
//           <br />
//           <input type="text" id="zip" style={{ ...customCss, padding: 0 }} />
//         </div>
//       </div>

//       <br />
//       <br />
//       {/* ~~~~~ CC INFO FIELDS ~~~~~ */}
//       <label htmlFor="ccnumber" style={fieldLabelStyle}>
//         Card Number
//       </label>
//       <br />
//       <div id="ccnumber" aria-label="Card Number"></div>
//       <br />
//       <br />
//       <div style={{ ...flexRowSpace, gap: "40px" }}>
//         <div style={{ width: "100%" }}>
//           <label htmlFor="ccexp" style={fieldLabelStyle}>
//             Expiration Date
//           </label>
//           <br />
//           <div id="ccexp" aria-label="Expiry Date"></div>
//           <br />
//           <br />
//         </div>
//         <div style={{ width: "100%" }}>
//           <label htmlFor="cvv" style={fieldLabelStyle}>
//             CVV
//           </label>
//           <br />
//           <div id="cvv" aria-label="CVV"></div>
//           <br />
//           <br />
//         </div>
//       </div>
//       <Button fullWidth variant="contained" sx={{ borderRadius: 50 }}>
//         Submit
//       </Button>
//     </form>
//   );
// }

// export default PaymentForm;

import React, { useState, useEffect, useRef } from "react";
import { Button, Stepper, Step, StepLabel } from "@mui/material";
import { flexRowSpace } from "../Utils/pageStyles";

const fieldLabelStyle = {
  display: "block",
  textAlign: "left",
  fontSize: "18px",
  color: "ghostwhite",
};

const customCss = {
  "border-style": "solid",
  "border-color": "#c7c7c7",
  "border-width": "1px",
  "border-radius": "10px",
  padding: "6px",
  "font-size": "16px",
  height: "56px",
  "background-color": "transparent",
};

function PaymentForm() {
  const [activeStep, setActiveStep] = useState(0);
  console.log(activeStep);

  const scriptLoaded = useRef(false);

  useEffect(() => {
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

    if (activeStep === 2 && !scriptLoaded.current) {
      console.log("true");
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", loadScript);
      } else {
        loadScript();
      }
    }

    return () => {
      // Reset scriptLoaded flag when component unmounts
      scriptLoaded.current = false;
      // Cleanup logic if needed
    };
  }, [activeStep]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const steps = ["Personal Information", "Address", "Payment Information"];

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <div style={{ width: "100%" }}>
              <label htmlFor="first_name" style={fieldLabelStyle}>
                First Name
              </label>
              <br />
              <input
                type="text"
                id="first_name"
                style={{ ...customCss, width: "99.8%", padding: 0 }}
              />
            </div>
            <div style={{ width: "100%" }}>
              <label htmlFor="last_name" style={fieldLabelStyle}>
                Last Name
              </label>
              <br />
              <input
                type="text"
                id="last_name"
                style={{ ...customCss, width: "99.8%", padding: 0 }}
              />
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div>
              <label htmlFor="address" style={fieldLabelStyle}>
                Address
              </label>
              <br />
              <input
                type="text"
                id="address"
                style={{ ...customCss, width: "99.8%", padding: 0 }}
              />
            </div>
            <div style={{ ...flexRowSpace, gap: "25px" }}>
              <div style={{ width: "100%" }}>
                <label htmlFor="city" style={fieldLabelStyle}>
                  City
                </label>
                <br />
                <input
                  type="text"
                  id="city"
                  style={{ ...customCss, width: "100%", padding: 0 }}
                />
              </div>
              <div>
                <label htmlFor="state" style={fieldLabelStyle}>
                  State
                </label>
                <br />
                <input
                  type="text"
                  id="state"
                  style={{ ...customCss, padding: 0 }}
                />
              </div>
              <div>
                <label htmlFor="zip" style={fieldLabelStyle}>
                  Zip Code
                </label>
                <br />
                <input
                  type="text"
                  id="zip"
                  style={{ ...customCss, padding: 0 }}
                />
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div>
              <label htmlFor="ccnumber" style={fieldLabelStyle}>
                Card Number
              </label>
              <br />
              <div id="ccnumber" aria-label="Card Number"></div>
            </div>
            <div style={{ ...flexRowSpace, gap: "40px" }}>
              <div style={{ width: "100%" }}>
                <label htmlFor="ccexp" style={fieldLabelStyle}>
                  Expiration Date
                </label>
                <br />
                <div id="ccexp" aria-label="Expiry Date"></div>
              </div>
              <div style={{ width: "100%" }}>
                <label htmlFor="cvv" style={fieldLabelStyle}>
                  CVV
                </label>
                <br />
                <div id="cvv" aria-label="CVV"></div>
              </div>
            </div>
          </>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <form>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>{getStepContent(activeStep)}</div>
      <div style={{ marginTop: "20px" }}>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          style={{ marginLeft: "10px" }}
        >
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </form>
  );
}

export default PaymentForm;
