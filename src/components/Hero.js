import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import  '../App.css'

export default function Hero() {
    const backgImage = "https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661457.jpg?w=360&t=st=1704282933~exp=1704283533~hmac=80f33226a179ad46a66b3befab0d96ddd84c7d99d30b82f8d3d0545dfa0564d5"
  return (
    <div 
    className='Hero' 
    style={{
        backgroundImage: `url(${backgImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        height: '100vh'}}
    >
        <Box className='heroContent' sx={{display:'flex', width:'75%', paddingX:2 }}><Typography sx={{position:'relative', color:'#fff', zIndex:999,fontSize:'45px', fontWeight:'bold', marginTop:'250px'}}>Find Your Future Luxury Home With Just a Scroll</Typography></Box>
        
    </div>
  )
}


