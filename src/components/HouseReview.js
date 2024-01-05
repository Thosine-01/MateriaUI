import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';

export default function HouseReview() {
  return (
    <div>
            <Stack sx={{paddingX:4,marginTop:5,textAlign:'center'}}>
                <Stack sx={{
                    alignItems:'center'
                }}>
                    <Typography variant='h3' sx={{fontWeight:'bold'}}>4.88</Typography>
                    <Rating name="half-rating-read" defaultValue={4.8} precision={0.5} sx={{fontSize:'15px', alignItems:'center',justifyContent:'center', marginBottom:3}} readOnly />
                    <Typography variant='base1' sx={{fontWeight:'bold'}}>Geust Favorite</Typography>
                    <Typography>One of the most loved homes on Airbnb based on ratings, reviews, and reliability</Typography>
                </Stack>
            </Stack>
            <Stack sx={{border:1, margin:4, borderRadius:'15px', padding:2}}>
                <Stack direction="row" sx={{alignItems:'center', paddingBottom:2}}>
                    <Rating name="half-rating-read" defaultValue={4.8} precision={0.5} sx={{fontSize:'15px', alignItems:'center',justifyContent:'center',}} readOnly />
                    <Typography variant='base2' sx={{marginLeft:'20px', }}>5 days ago</Typography>
                </Stack>
                <Stack sx={{}}>
                    <Typography sx={{paddingBottom:2}}>
                    Carmela made us feel at home, we immediately had a great time, the rooms were very clean and tidy, excellent location and easily
                    </Typography>
                    <Link href="#" underline="always" color="inherit" sx={{padding:'-5px', margin:'-5px'}}>
                    {'Reviews'}
                    </Link>
                </Stack>
                <Stack sx={{paddingTop:2, alignItems:'center'}} direction='row'>
                    <Avatar alt="Rravis Howard" sx={{ bgcolor: deepOrange[500] }} src="/static/images/avatar/2.jpg" />
                    <Stack  sx={{marginLeft:'20px', }}>
                        <Typography sx={{fontWeight:'bold'}}>lawal Rahman</Typography>
                        <Typography sx={{fontWeight:'bold'}}>Ibadan</Typography>
                    </Stack>
                </Stack>
            </Stack >
            <Stack sx={{border:1, margin:4, borderRadius:'15px', padding:2, textAlign:'center'}}>
                    <Typography>Show All 5 Reviews</Typography>
            </Stack>
    </div>
  )
}
