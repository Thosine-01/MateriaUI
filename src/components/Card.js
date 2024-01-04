import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import MobileStepper from '@mui/material/MobileStepper';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import IconButton from '@mui/material/IconButton';
import SwipeableViews from 'react-swipeable-views';
import Data from '../data/Carddata'






const images = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=450&q=60',
    },
    {
      label: 'Bird',
      imgPath:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=450&q=60',
    },
    {
      label: 'Bali, Indonesia',
      imgPath:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=450',
    },
    {
      label: 'Goč, Serbia',
      imgPath:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=450&q=60',
    },
  ];


export default function AirCard() {
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

      const handleStepChange = (step) => {
      setActiveStep(step);
      };
  return (
<div>
   {Data.map((data) => {
    return (
        <Card 
        sx={{
           height:450, 
           width:400,
           maxWidth: '90%',
           mx:'auto', 
           border:'transparent',
           outline:'transparent',
           display:'flex', 
           flexDirection: 'column',
           my:10,
           borderRadius:'20px'
           }} >
    
           <CardMedia 
           sx={{
                   position:'relative',
                   overflow:'hidden',
                   width: '100%',
                   borderRadius:'20px 20px 0 0'
                   
               }} 
               borderRadius ={16}>
           <SwipeableViews enableMouseEvents>
    
           {images.map((step,index) => (
               <div className='Slides'>
               <img src={step.imgPath} alt={step.label} sx={{borderRadius:'20px 20px 0 0'}} />
               </div>
           ))}
           </SwipeableViews>
           
    
    
               <MobileStepper
                   steps={maxSteps}
                   sx={{position:'absolute', justifyContent:'center', bottom:'2px', backgroundColor:'transparent', color:'white'}}
                   activeStep={activeStep}
                   >
    
               </MobileStepper>
    
               
               <IconButton aria-label="delete" size="small" sx={{position:'absolute', top:'50%', left:'0px', color:'white'}} onClick={handleBack}>
                   <ArrowCircleLeftIcon fontSize="inherit" />
               </IconButton>
               <IconButton aria-label="delete" size="small" sx={{position:'absolute', top:'50%', right:'0px', color:'white'}}onClick={handleNext}>
                   <ArrowCircleRightIcon fontSize="inherit" />
               </IconButton>
    
               </CardMedia>
        
              <CardContent sx={{}}>
               <Stack direction="row" spacing={2} sx={{justifyContent:"space-between", alignItem:'center'}}>
                    <Typography  variant="h6" sx={{fontWeight:'bold'}} >{data.name}</Typography>
                    <Button size="large" color='secondary' startIcon={<StarIcon />}>{data.rating}</Button>
               </Stack>
               <Stack>
                   <Typography variant='base2'>{data.location}</Typography>
                   <Typography variant='base2'>{data.date}</Typography>
                   <Typography variant='base2'>{data.price}</Typography>
               </Stack>
           </CardContent>
           
    
           
       </Card>
    );
   })}
</div>
   

  )
}