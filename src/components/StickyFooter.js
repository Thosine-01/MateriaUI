import React from 'react'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



export default function ActiveFooter() {
  return (
    <div>
        <Container
        sx ={{
            display:'flex',
            justifyContent:'space-evenly',
            paddingY:1,
        }}>
            <Stack direction='column' sx={{alignItems:'center'}}>
                <IconButton aria-label="delete" size='small' sx={{fontSize:'40px'}}>
                   <SearchIcon fontSize="inherit" />
               </IconButton>
               <Typography variant='base1' sx={{fontWeight:'medium'}}>DIscover</Typography>
            </Stack>
            <Stack direction='column'>
                <IconButton aria-label="delete" size="small" sx={{fontSize:'40px'}}>
                   <AccountCircleIcon fontSize="inherit" />
               </IconButton>
               <Typography variant='base1' sx={{fontWeight:'medium'}}>Sign In</Typography>
            </Stack>
        </Container>
    </div>
  )
}
