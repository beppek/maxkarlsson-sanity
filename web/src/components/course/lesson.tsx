// import React, { useState, useRef } from 'react';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
// import PortableText from '../portable-text';
// import { useScrollToRef } from '../../hooks/use-scroll';

// type LessonProps = {
//   lesson: any;
//   onNextLesson: any;
//   lastLesson: boolean;
// };

// function Lesson({ lesson, onNextLesson, lastLesson }: LessonProps) {
//   const [activeStep, setActiveStep] = useState(0);
//   const { ref, executeScroll } = useScrollToRef();

//   const steps = lesson._rawParts;

//   const handleNext = () => {
//     if (activeStep === steps.length - 1) onNextLesson();
//     setActiveStep((prevActiveStep) => {
//       return prevActiveStep === steps.length - 1 ? 0 : prevActiveStep + 1;
//     });
//     executeScroll();
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   return (
//     <div ref={ref}>
//       <Stepper activeStep={activeStep} alternativeLabel>
//         {steps.map((step: any) => (
//           <Step key={step.title}>
//             <StepLabel>{step.title}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       <PortableText blocks={steps[activeStep].body} />
//       <div>
//         <ButtonGroup color="primary" aria-label="outlined primary button group">
//           <Button
//             disableElevation
//             disabled={activeStep === 0}
//             onClick={handleBack}
//           >
//             Back
//           </Button>
//           <Button
//             disableElevation
//             variant="contained"
//             color="primary"
//             onClick={handleNext}
//           >
//             {activeStep !== steps.length - 1
//               ? 'Next'
//               : lastLesson
//               ? 'Finish'
//               : 'Next lesson'}
//           </Button>
//         </ButtonGroup>
//       </div>
//     </div>
//   );
// }

// export default Lesson;
