import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TeamData from '../data/Teamdata';

export default function Team() {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:"40px", marginBottom:"50px"}}>
        <Stack>
          <Typography sx={{fontSize:'35px', fontWeight:'bold'}}>The Team</Typography>
        </Stack>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
              {TeamData.map((team) => {
            return (
            <Stack sx={{width:'250px', height:'', border:0, boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px', marginTop:'30px',  marginBottom:'40px'} }>
                <img src={team.img} style={{height:'200px'}}/>
                <div style={{padding:'20px', display:'flex', flexDirection:'column'}}>
                  <Typography variant='' sx={{fontWeight:'bold', fontSize:'22px'}}>{team.position}</Typography>
                  <Typography variant='' sx={{fontSize:'16px', PaddingTop:2}}>{team.name}</Typography>
                </div>
            
            </Stack>
            )
        })}

        </div>
    </div>

  )
}
