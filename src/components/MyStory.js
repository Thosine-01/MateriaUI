import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const aboutImag = 'https://img.freepik.com/free-photo/new-home-keys-plan-table-with-defocused-couple_23-2148814388.jpg?w=740&t=st=1705098113~exp=1705098713~hmac=b9a65fa567e3a00a817dfaac0258331109f86e9a25366c4c9a15c3789de1b855'


export default function MyStory() {
  return (
    <Stack sx={{padding:4}}>

      <Stack >
          <Typography variant='h4' sx={{
            fontWeight:'bold',
            marginTop:'30px'
          }}>About Us
          </Typography>
          <Typography variant='base2' sx={{
            paddingTop:2, paddingBottom:4
          }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  lacus viverra magna ullamcorper ultricies. Laoreet est molestie tellus, volutpat, vitae. Viverra vitae nunc molestie nec. Id orci tincidunt ametr morbi mauris augue. Faucibus ornare tincidunt malesuada phasellus.
            Volutpat, est id tincidunt dolor eu. Enim 
            Aliquam viverra tempor sodales proin penatibus elit ut sem. Volutpat, purus eget diam et, donec quis lectus magna elementum. Consequat, nunc, varius venenatis proin diam nullam cras. Et ut condimentum dui eu. Vestibulum fermentum vitae mauris quis. Odio eu velit tortor pulvinar eget nec. Non orci, sodales consequat 
          </Typography>
      </Stack>

      <Stack>
      <Typography variant='h4' sx={{
            fontWeight:'bold',
            marginTop:'30px'
          }}>Our Vision
      </Typography>
        
      <img  src={aboutImag} style={{paddingTop:'30px', paddingBottom:'30px'}}/>
      
      <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  lacus viverra magna ullamcorper ultricies. Laoreet est molestie tellus, volutpat, vitae. Viverra vitae nunc molestie nec. Id orci tincidunt ametr morbi mauris augue. Faucibus ornare tincidunt malesuada phasellus.
            Volutpat, est id tincidunt dolor eu. Enim 
            Aliquam viverra tempor sodales proin penatibus elit ut sem. Volutpat, purus eget diam et, donec quis lectus magna elementum. Consequat, nunc, varius venenatis proin diam nullam cras. Et ut condimentum dui eu. Vestibulum fermentum vitae mauris quis. Odio eu velit tortor pulvinar eget nec. Non orci, sodales consequat 
      </Typography>
      </Stack>
    </Stack>
  )
}
