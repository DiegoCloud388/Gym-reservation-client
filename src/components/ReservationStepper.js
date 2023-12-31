import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import * as React from 'react';
import ReservationFirstStep from './ReservationFirstStep';

const steps = ['Choose date and time', 'Choose service', 'Completion of data']

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [data, setData] = React.useState({
        stepOneData: '',
        stepTwoData: '',
        stepThreeData: ''
    });
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };    

    return(
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1}}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2}}>
                        <Box sx={{ flex: '1 1 auto'}}/>
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2}}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}>
                                Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }}></Box>
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                    <Typography component='div' sx={{ mt: 2, mb: 1 }}>
                        {activeStep === 0 &&
                            <ReservationFirstStep></ReservationFirstStep>
                        }
                    </Typography>

                </React.Fragment>
            )}
        </Box>
    );
}