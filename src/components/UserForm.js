import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PhotoCamera } from "@mui/icons-material";
import { formControlClasses, StepButton } from "@mui/material";
import UserDetailsForm from "./UserDetailsForm";
import PersonalDetailsForm from "./PersonalDetailsForm";
import Review from "./Review";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["User Details", "Personal Details", "Rewiew & Submit"];
const initForm = {
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    organisation:'',
    city:'',
    bio:''
  };
export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [form, setForm] = React.useState(initForm);

  const getStepContent = step => {
    switch (step) {
      case 0:
        return (
          <UserDetailsForm
          form={form}
          handleChange={handleChange}
          />
        );
        case 1:
        return (
          <PersonalDetailsForm
          form={form}
          handleChange={handleChange}
          />
        );
        case 2:
            return <Review form={form} />
      default:
        return <Typography variant="h6">Unable to Fetch. Try again later.</Typography>    }
  };

  const handleNext = () => {
    (activeStep<steps.length-1)? setActiveStep(activeStep+1) : handleFinish()
  };

  const handleBack = () => {
    (activeStep>0) && setActiveStep(activeStep - 1);
  };

  const handleChange = input => e => {
    setForm({...form, [input]:e.target.value});
  }

  const handleFinish = () => {
    console.log(form);
    setActiveStep(0);
    setForm(initForm);
    // Service call to backend
  }

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Profiler</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container component="main" maxWidth="sm" sx={{ p: 2 }}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom>
              Register
            </Typography>
            <Stepper nonLinear activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label, index) => (
                <Step key={index}>
                  <StepButton onClick={() => setActiveStep(index)}>
                    {label}
                  </StepButton>
                </Step>
              ))}
            </Stepper>
            {getStepContent(activeStep)}
            <Box
              px={2}
              mt={5}
              sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button onClick={handleBack} disabled={activeStep<=0}>Back</Button>
              <Button variant="contained" onClick={handleNext}>{(activeStep<steps.length-1)?'Next':'Finish'}</Button>
            </Box>
          </Paper>
        </Container>
      </main>
    </>
  );
}
