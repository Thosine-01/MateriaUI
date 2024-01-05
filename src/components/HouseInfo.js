import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import HouseIcon from '@mui/icons-material/House';
import BathroomIcon from '@mui/icons-material/Bathroom';
import ContentPasteOffIcon from '@mui/icons-material/ContentPasteOff';
import WifiIcon from '@mui/icons-material/Wifi';
import TungstenIcon from '@mui/icons-material/Tungsten';
import CheckroomIcon from '@mui/icons-material/Checkroom';



export default function HouseInfo() {
  return (
    <Stack sx={{backgroundColor:'#fcced8', padding:4,}}>
        <Stack sx={{
            
        }}>
            <Typography variant='h5' sx={{fontWeight:'bold', marginBottom:2}}>About This House</Typography>
            <Typography variant='base1'  sx={{fontWeight:'medium',marginBottom:2, textAlign:'left'}}>we are in a building of from the 1800's, in a quiet street but in the heart of historic Turin. to 10 min. the biggest square in Europe "Piazza Vittorio" where ther's the night life. Convenient to all services. In the district you can find every day a local market with fresh ...</Typography>
            <Link href="#" underline="always" color="inherit" sx={{fontWeight:'medium',padding:'-5px', margin:'-5px'}}>
            {'Read More>>>'}
            </Link>
        </Stack>

        <div style={{border:'0.0001em', borderBottom:'solid', marginTop:'30px',marginBottom:'30px', borderColor:'#666'}}></div>
        
    <Stack >
        <Typography variant='h5' sx={{fontWeight:'bold', marginBottom:2}}>WHat This House Offers</Typography>
        <Stack 
            sx={{
            marginTop:3
            }} direction='row'> 
            <IconButton aria-label="delete" size="small" sx={{fontSize:'30px', marginRight:3}}>
                <BedroomParentIcon fontSize="inherit"/>
            </IconButton>
            <Stack>
            <Typography variant='base2'>Free Wifi</Typography>
            </Stack>
        </Stack>
        <Stack
        sx={{
            marginTop:2
        }} direction='row'>
            <IconButton aria-label="delete" size="small" sx={{fontSize:'30px', marginRight:3}}>
                <HouseIcon fontSize="inherit" />
            </IconButton>
            <Stack>
            <Typography variant='base2'>24/7 hours</Typography>
            </Stack>
        </Stack>
        <Stack
        sx={{
            marginTop:2
        }} direction='row'>
            <IconButton aria-label="delete" size="small" sx={{fontSize:'30px', marginRight:3}}>
                <BathroomIcon fontSize="inherit" />
            </IconButton>
            <Stack>
            <Typography variant='base2'>Water</Typography>
            </Stack>
        </Stack>

        <Stack
        sx={{
            marginTop:2
        }} direction='row'>
            <IconButton aria-label="delete" size="small" sx={{fontSize:'30px', marginRight:3}}>
                <BathroomIcon fontSize="inherit" />
            </IconButton>
            <Stack>
            <Typography variant='base2'>Work Space</Typography>
            </Stack>
        </Stack>

        <Stack 
            sx={{
            marginTop:2
            }} direction='row'>
            <IconButton aria-label="delete" size="small" sx={{fontSize:'30px', marginRight:3}}>
                <ContentPasteOffIcon fontSize="inherit" />
            </IconButton>
            <Stack>
            <Typography  variant='base2' sx={{fontWeight:'bold'}}>Closet</Typography>
            
            </Stack>
        </Stack>
    </Stack>

    </Stack>
  )
}
