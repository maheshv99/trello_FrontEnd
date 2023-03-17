import React from 'react'
import { Container } from 'react-bootstrap'
import FooterContainer1 from './FooterContainer1'



export default function Footer() {
  return (
    <>
    <Container>
      <footer className='footer'>
        <FooterContainer1/>
        <hr className='my-5'/>

      </footer>
    </Container>

    </>
  )
}
