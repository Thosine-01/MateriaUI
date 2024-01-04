import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
  return (
    <Box 
    sx={{
      backgroundColor:'#f4f4f9',
      
    }}>
      <div style={{border:'1px', borderBottom:'solid', }}></div>
      <Stack 
      sx={{
        marginTop:4,
        paddingX:3 
        
        }} spacing={1}>
        <Typography variant="body2" sx={{fontWeight:'bold'}}>Support</Typography>
        <Typography variant="body2" >Help Center</Typography>
        <Typography variant="body2" >AirCover</Typography>
        <Typography variant="body2" >Anti-discrimination</Typography>
        <Typography variant="body2" >Disbility</Typography>
        <Typography variant="body2" >Cancellation</Typography>
        <Typography variant="body2" >Report</Typography>
        <div style={{border:'0.0001em', borderBottom:'solid', marginTop:'30px', borderColor:'#666'}}></div>
      </Stack>

      <Stack 
      sx={{
        marginTop:4,
        paddingX:3
        }} spacing={1}>
        <Typography variant='body2' sx={{fontWeight:'bold'}}>Hosting</Typography>
        <Typography variant='body2'>Airbnb your home</Typography>
        <Typography variant='body2'>AirCover for Hosts</Typography>
        <Typography variant='body2'>Hosting resources</Typography>
        <Typography variant='body2'>Community forum</Typography>
        <Typography variant='body2'>Hosting responsibly</Typography>
        <Typography variant='body2'>Airbnb-friendly apartments</Typography>
        <div style={{borderWidth:'thin', borderBottom:'solid', marginTop:'30px', borderColor:'#666'}}></div>
      </Stack>

      <Stack 
      sx={{
        marginTop:4,
        paddingX:3
        }} spacing={1}>
        <Typography variant='body2' sx={{fontWeight:'bold'}}>Airbnb</Typography>
        <Typography variant='body2'>Newsroom</Typography>
        <Typography variant='body2'>New features</Typography>
        <Typography variant='body2'>Careers</Typography>
        <Typography variant='body2'>Investors</Typography>
        <Typography variant='body2'>Gift cards</Typography>
        <Typography variant='body2'>Airbnb.org emergency stays</Typography>
        <div style={{border:'0.0001em', borderBottom:'solid', marginTop:'30px', borderColor:'#666'}}></div>
      </Stack>
      <Stack
      sx={{
        marginTop:4,
        paddingX:3,
        PaddingBottom:'10px'
        }} >
          <div style={{display:'flex', alignItems:'center'}}>
          <IconButton aria-label="laguage"  color="primary">
            <LanguageIcon />
          </IconButton><Typography variant='body2'>English</Typography>
          </div>

          <span  style={{display:'flex', alignItems:'center'}}>
          <IconButton aria-label="laguage"  color="#000" size='10px'>
            <CopyrightIcon />
          </IconButton>
          <Typography variant='body2'>2024 Airbnb, inc</Typography>
          </span>

      </Stack>
    </Box>
  )
}
