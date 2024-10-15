import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const steps = [
  {
    label: '',
    title: 'Post Property Ads',
    description: 'Ensure to include all the necessary information such as the name of the locality, amenities, etc. You also have the option to upload photos.',
  },
  {
    label: '',
    title: 'Choose Proper Locality/Address',
    description: 'Ensure accurate mapping of the locality when providing property details to receive genuine queries.',
  },
  {
    label: '',
    title: 'Add Quality Images',
    description: 'Remember to include high-quality photos as they are essential for your property to stand out. Potential buyers will request a photoshoot of your property through HexaHome.',
  },
];

// Custom styling for white text and increased icon size
const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
  '& .MuiStepLabel-label': {
    color: 'white', // Text color white
    fontSize: '1.25rem', // Increased font size
  },
  '& .MuiStepIcon-root': {
    color: '#FFFFFF', // Step icon color white
    fontSize: '2rem', // Increased icon size
    '&.Mui-completed': {
      color: '#4CAF50', // Completed step color (green)
    },
    '&.Mui-active': {
      color: 'white', // Active step color (white)
    },
  },
}));

const CircularButton = styled(Box)(({ theme }) => ({
  width: '48px', // Larger for accessibility
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.2)', // Circular background
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.4)', // Hover effect
  },
  [theme.breakpoints.down('sm')]: {
    width: '40px', // Smaller buttons on mobile
    height: '40px',
  },
}));

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => step === 1;

  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%', position: 'relative', py: 10 }}>
      <Box sx={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: 2 }}>
        <CircularButton onClick={handleBack} disabled={activeStep === 0} sx={{ color: 'white' }}>
          <ArrowBackIcon fontSize="small" sx={{ color: 'white' }} />
        </CircularButton>
        {isStepOptional(activeStep) && (
          <CircularButton onClick={handleSkip} sx={{ color: 'white' }}>
            Skip
          </CircularButton>
        )}
        <CircularButton onClick={handleNext} sx={{ color: 'white' }}>
          <ArrowForwardIcon fontSize="small" sx={{ color: 'white' }} />
        </CircularButton>
      </Box>

      <Stepper activeStep={activeStep} sx={{ paddingBottom: 3 }}>
        {steps.map((step, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption" sx={{ color: 'white', fontSize: '1rem' }}>
                Optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={step.label} {...stepProps}>
              <CustomStepLabel {...labelProps}>{step.label}</CustomStepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1, color: 'white', fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
            All steps completed you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Typography onClick={handleReset} sx={{ color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>
              Reset
            </Typography>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1, color: 'white', fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
            Step {activeStep + 1}
          </Typography>
          <Typography sx={{ color: 'white', fontSize: { xs: '1rem', md: '1.2rem' }, mb: 1 }}>
            {steps[activeStep].title}
          </Typography>
          <Typography sx={{ color: 'white', fontSize: { xs: '0.9rem', md: '1.1rem' }, lineHeight: 1.5, mb: 1 }}>
            {steps[activeStep].description}
          </Typography>
        </React.Fragment>
      )}
    </Box>
  );
}
