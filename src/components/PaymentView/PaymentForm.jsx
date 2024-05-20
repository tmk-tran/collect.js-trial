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
//             style={{ ...customCss, ...customWidth}}
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
//             style={{ ...customCss, ...customWidth}}
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
//         style={{ ...customCss, ...customWidth}}
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
import { flexRowSpace, fullWidth } from "../Utils/pageStyles";
import { border } from "../Utils/colors";

const fieldLabelStyle = {
  display: "block",
  textAlign: "left",
  fontSize: "18px",
  color: "ghostwhite",
};

const customWidth = {
  width: "99.8%",
  padding: 0,
};

const formContainer = {
  width: "90%",
  margin: "0 auto",
};

const customCss = {
  borderStyle: "solid",
  borderColor: "#c7c7c7",
  borderWidth: "1px",
  borderRadius: "10px",
  padding: "6px",
  fontSize: "16px",
  height: "56px",
  backgroundColor: "transparent",
};

function PaymentForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showLabels, setShowLabels] = useState(false);
  console.log(showLabels);

  const scriptLoaded = useRef(false);
  console.log(scriptLoaded);

  useEffect(() => {
    // need to send via json below for collect.js
    const customCss = {
      "border-style": "solid",
      "border-color": "#c7c7c7",
      "border-width": "1px",
      "border-radius": "10px",
      padding: "6px",
      "font-size": "16px",
      height: "56px",
      color: "white",
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

  useEffect(() => {
    if (scriptLoaded.current === true) {
      console.log("true");
      setLoading(false);
    }
    // Simulate loading delay
    setTimeout(() => {
      setShowLabels(true);
    }, 4000);

    // Cleanup function
    return () => {
      // Reset state
      setLoading(true);
      setShowLabels(false);
    };
  }, [activeStep]);
  console.log(loading);
  console.log(showLabels);

  // useEffect(() => {
  //   if (activeStep === 2) {
  //     const observer = new MutationObserver((mutations) => {
  //       const ccNumberElement = document.getElementById("ccnumber");
  //       const ccExpElement = document.getElementById("ccexp");
  //       const cvvElement = document.getElementById("cvv");

  //       if (ccNumberElement && ccExpElement && cvvElement) {
  //         setLoading(false);
  //         observer.disconnect();
  //       }
  //     });

  //     observer.observe(document.body, {
  //       childList: true,
  //       subtree: true,
  //     });

  //     return () => {
  //       observer.disconnect();
  //     };
  //   }
  // }, [activeStep]);

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
            <br />
            <br />
            <div style={formContainer}>
              {/* ~~~~~ FIRST NAME ~~~~~ */}
              <div style={fullWidth}>
                <label htmlFor="first_name" style={fieldLabelStyle}>
                  First Name
                </label>
                <br />
                <input
                  type="text"
                  id="first_name"
                  style={{ ...customCss, ...customWidth }}
                />
              </div>
              <br />
              {/* ~~~~~ LAST NAME ~~~~~ */}
              <div style={fullWidth}>
                <label htmlFor="last_name" style={fieldLabelStyle}>
                  Last Name
                </label>
                <br />
                <input
                  type="text"
                  id="last_name"
                  style={{ ...customCss, ...customWidth }}
                />
              </div>
              <br />
              {/* ~~~~~ EMAIL ~~~~~ */}
              <div style={fullWidth}>
                <label htmlFor="email" style={fieldLabelStyle}>
                  Email
                </label>
                <br />
                <input
                  type="text"
                  id="email"
                  style={{ ...customCss, ...customWidth }}
                />
              </div>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <br />
            <br />
            <div style={formContainer}>
              {/* ~~~~~ ADDRESS ~~~~~ */}
              <label htmlFor="address" style={fieldLabelStyle}>
                Address
              </label>
              <br />
              <input
                type="text"
                id="address"
                style={{ ...customCss, ...customWidth }}
              />
              <br />
              <br />
              {/* ~~~~~ CITY ~~~~~ */}
              <div style={{ ...flexRowSpace, gap: "25px" }}>
                <div style={fullWidth}>
                  <label htmlFor="city" style={fieldLabelStyle}>
                    City
                  </label>
                  <br />
                  <input
                    type="text"
                    id="city"
                    style={{ ...customCss, ...fullWidth, padding: 0 }}
                  />
                </div>
                {/* ~~~~~ STATE ~~~~~ */}
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
                  <br />
                </div>
                {/* ~~~~~ ZIP ~~~~~ */}
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
            </div>
          </>
        );
      case 2:
        return (
          <>
            <br />
            <br />
            <div style={formContainer}>
              {/* ~~~~~ CC INFO FIELDS ~~~~~ */}
              {showLabels && (
                <label htmlFor="ccnumber" style={fieldLabelStyle}>
                  Card Number
                </label>
              )}
              <br />
              <div id="ccnumber" aria-label="Card Number"></div>
              <br />
              <br />
              <div style={{ ...flexRowSpace, gap: "40px" }}>
                <div style={fullWidth}>
                  {showLabels && (
                    <label htmlFor="ccexp" style={fieldLabelStyle}>
                      Expiration Date
                    </label>
                  )}
                  <br />
                  <div id="ccexp" aria-label="Expiry Date"></div>
                  <br />
                  <br />
                </div>
                <div style={fullWidth}>
                  {showLabels && (
                    <label htmlFor="cvv" style={fieldLabelStyle}>
                      CVV
                    </label>
                  )}
                  <br />
                  <div id="cvv" aria-label="CVV"></div>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <form style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div style={{ flexGrow: 1 }}>{getStepContent(activeStep)}</div>
      <div style={{ marginTop: "50px" }}>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          style={{ marginLeft: "10px" }}
        >
          {activeStep === steps.length - 1 ? "Submit" : "Next"}
        </Button>
      </div>
    </form>
  );
}

export default PaymentForm;
