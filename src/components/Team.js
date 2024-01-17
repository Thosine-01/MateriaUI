import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TeamData from '../data/Teamdata';

export default function Team() {
  return (
    <div>
        {TeamData.map((team) => {
            return (
            <Stack sx={{width:'250px', height:'', border:1, justifyContent:'center'}}>
                <img src={team.img} style={{height:'200px'}}/>
                <Typography>{team.position}</Typography>
                <Typography>{team.name}</Typography>
            </Stack>
            )
        })}

    </div>
  )
}
