import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import ReviewData from '../data/ReviewsData';

export default function Reviews() { 
  return (
    <Stack sx={{padding:4, marginTop:5, backgroundColor:'#e8e8e9'}}>
        <Typography variant='h4' sx={{
            fontWeight:'bold',
            marginBottom:'30px'
          }}>Reviews
        </Typography>


        {ReviewData.map((review) => {
            return (
                <Stack sx={{border:1,borderRadius:'15px', padding:2, marginBottom:4 }}>
                <Stack direction="row" sx={{alignItems:'center', paddingBottom:2,}}>
                    <Rating name="half-rating-read" defaultValue={review.Rating} precision={0.5} sx={{fontSize:'15px', alignItems:'center',justifyContent:'center',}} readOnly />
                    <Typography variant='base2' sx={{marginLeft:'20px', }}>{review.date}</Typography>
                </Stack>
                <Stack sx={{}}>
                    <Typography sx={{paddingBottom:2}}>
                        {review.info}
                    </Typography>
                    <Link href="#" underline="always" color="inherit" sx={{padding:'-5px', margin:'-5px'}}>
                        {'Reviews'}
                    </Link>
                </Stack>
                <Stack sx={{paddingTop:2, alignItems:'center'}} direction='row'>
                    <Avatar alt={review.alt} sx={{ bgcolor: deepOrange[500] }} src="/static/images/avatar/2.jpg" />
                    <Stack  sx={{marginLeft:'20px', }}>
                            <Typography sx={{fontWeight:'bold'}}>{review.name}</Typography>
                            <Typography sx={{fontWeight:'bold'}}>{review.location}</Typography>
                    </Stack>
                </Stack>
                </Stack>
            
            )
        })}
    </Stack>
  )
}
