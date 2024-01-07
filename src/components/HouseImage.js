import React , {useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import HouseIcon from '@mui/icons-material/House';
import BathroomIcon from '@mui/icons-material/Bathroom';
import ContentPasteOffIcon from '@mui/icons-material/ContentPasteOff';
import SwipeableViews from 'react-swipeable-views';


const images = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=400&q=60',
      imgName:undefined,
      id:1
    },
    {
      label: 'Bird',
      imgPath:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=400&q=60',
      imgName:'bedroom',
      id:2
    },
    {
      label: 'Bali, Indonesia',
      imgPath:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=400',
      imgName:'kitchen',
      id:3
    },
    {
      label: 'Goč, Serbia',
      imgPath:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=400&q=60',
      imgName:'bathroom',
      id:4
      },
  ];

  const imageNum = images.length

  console.log(imageNum)

export default function ImageCard() {
  return (
    <div>
    <Card sx={{
      width:400,
      
    }}>
        <CardMedia sx={{}}>
          <SwipeableViews enableMouseEvents>
            {images.map((imgdata) => (
              <div style={{height:'100%', position:'relative'}}> 
                  <img src={imgdata.imgPath} alt={imgdata.label}/>
                  <div style={{
                    position:'absolute',
                    bottom:'30px',
                    right:'40px',
                    backgroundColor:'#070707',
                    color:'#fff',
                    padding:'10px 20px 10px 20px',
                    borderRadius:'15px'
                    }}>{imgdata.id}/{imageNum}</div>

                    <div style={{
                      position:'absolute',
                      bottom:'30px',
                      left:'40px',
                      backgroundColor:'#070707',
                      color:'#fff',
                      padding:'10px 20px 10px 20px',
                      borderRadius:'15px',
                      fontSize:'15px',
                      visibility: imgdata.imgName !== undefined? 'visible': 'hidden'
                    }}>{imgdata.imgName}</div>
              </div>
            ))}
          </SwipeableViews>
            
        </CardMedia>
    </Card>


    <Stack 
    sx={{
      paddingX:4,
      paddingTop:2
    }}>
        <Typography variant='' 
        sx={{
          fontWeight:'bold',
          fontSize:'30px',
          marginBottom:1
          }}>Enjoy Santo Cruz de Tenerife</Typography>
        <Typography variant='base2' 
        sx={{
          marginBottom:'5px'
        }}>Room available in Spain</Typography>
        <Typography variant='base2'>1 Double bed - shared bathroom</Typography>
    </Stack>


    <Stack
     sx={{
      width: '80%',
      mx:'auto',
      marginTop:3,
      marginBottom:3,
      paddingX:1,
      paddingY:3,
      border:'solid',
      borderWidth:'1px',
      borderRadius:'15px',
      justifyContent:'space-evenly',
      
    }} direction='row'>
      <Stack sx={{alignItems:'center'}}>
        <Typography>4.87</Typography>
        <Rating name="half-rating-read" defaultValue={4.8} precision={0.5} sx={{fontSize:'15px'}} readOnly />
      </Stack>
      <div style={{border:'1px', borderRight:'solid', borderColor:'#666'}}></div>
      <Stack sx={{alignItems:'center'}}>
        <Typography>Guest</Typography>
        <Typography>Favorite</Typography>
      </Stack>
      <div style={{border:'1px', borderRight:'solid', borderColor:'#666'}}></div>
      <Stack sx={{alignItems:'center'}}>
        <Typography>3</Typography>
        <Link href="#" underline="always" color="inherit" sx={{padding:'-5px', margin:'-5px'}}>
        {'Reviews'}
        </Link>
      </Stack>

    </Stack>

    <Stack 
    sx={{
      padding:4
    }}>
      <div style={{border:'0.0001em', borderBottom:'solid', marginTop:'30px', borderColor:'#666'}}></div>
      
      <Stack 
      sx={{
       marginTop:3
      }} direction='row'> 
        <IconButton aria-label="delete" size="small" sx={{fontSize:'30px', marginRight:3}}>
            <BedroomParentIcon fontSize="inherit"/>
        </IconButton>
        <Stack>
          <Typography variant='base2' sx={{fontWeight:'bold'}}>Room in a Rental Unit</Typography>
          <Typography variant='base2'>Your own room in a home, plus access to shared space</Typography>
        </Stack>
      </Stack>
      <Stack
      sx={{
        marginTop:3
      }} direction='row'>
        <IconButton aria-label="delete" size="small" sx={{fontSize:'30px', marginRight:3}}>
            <HouseIcon fontSize="inherit" />
        </IconButton>
        <Stack>
          <Typography  variant='base2' sx={{fontWeight:'bold'}}>Shared Common Space</Typography>
          <Typography variant='base2'>You will share part of the home with other tenants</Typography>
        </Stack>
      </Stack>
      <Stack
      sx={{
        marginTop:3
      }} direction='row'>
        <IconButton aria-label="delete" size="small" sx={{fontSize:'30px', marginRight:3}}>
            <BathroomIcon fontSize="inherit" />
        </IconButton>
        <Stack>
          <Typography  variant='base2' sx={{fontWeight:'bold'}}>Shared Bathroom</Typography>
          <Typography variant='base2'>You will share the bathroom with others</Typography>
        </Stack>
      </Stack>

      <Stack 
        sx={{
          marginTop:3
        }} direction='row'>
        <IconButton aria-label="delete" size="small" sx={{fontSize:'30px', marginRight:3}}>
            <ContentPasteOffIcon fontSize="inherit" />
        </IconButton>
        <Stack>
          <Typography  variant='base2' sx={{fontWeight:'bold'}}>Free cancellation before 2 weeks of rent</Typography>
          
        </Stack>
      </Stack>
    </Stack>
    </div>
  )

}
