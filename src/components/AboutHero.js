import React from 'react'





export default function MyStory() {

  const Vision = 'https://img.freepik.com/free-photo/villa-house-model-key-drawing-retro-desktop-real-estate-sale-concept_1387-410.jpg?w=540&t=st=1705052123~exp=1705052723~hmac=986e517a7bd880e8eefadd31e3f8a3a2919bcae57df4243fe01b5124ec3a8ea1'

  return (
    <div 
      className='About'
      style={{
        backgroundImage: `url(${Vision})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        height:'400px',

      }}
    >
      <div style={{
        color: '#fff',
        fontSize: '2rem',
        fontWeight:'bold',
        position:'relative',
        zIndex:'9999',
        display:'flex',
        justifyContent:'center',
        paddingTop:'180px'
      }}>
         About Us
      </div>
     
    </div>
  )
}
