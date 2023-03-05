import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogOne src="/images/cta-logo-one.svg"/>
        <Signup>
            Get All There
        </Signup>
        <Description>
            Get Premier Access to Raya and The Last Dragon 
            for an additional free with a Disney+ subscription 
            As of 30/01/13, the price of Disney+ and The Disney 
            Bundle will increase by $1.
        </Description>
        <CTALogTwo src="/images/cta-logo-two.png"/>
      </CTA>
    </Container>
  )
}

export default Login

const Container=styled.div`
position:relative;
height: calc(100vh - 70px);
display:flex;
align-items:center;
justify-content:center;

&:before{
    background-image:  url("/images/login-background.jpg");
    background-position:top;
    background-repeat:no-repeat;
    background-size:cover;
    content:"";
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    opacity:0.7;

}
`

const CTA=styled.div`
max-width:650px;
padding:80px 40px;
width:90%;
display:flex;
flex-direction:column;
align-items:center;


`
const CTALogOne= styled.img`
`

const Signup =styled.a`
text-transform:uppercase;
width:100%;
background-color:#0063e5;
font-weight:bold;
padding:17px 0;
color:#f9f9f9;
text-align:center;
font-size:18px;
cursor:pointer;
letter-spacing:1.5px;
transition:all 250ms;
margin-top:8px;
margin-bottom:12px;

&:hover{
    background:#0483ee;
}
`

const Description=styled.p`
text-align:center;
font-size:11px;
letter-spacing:1.5px;
line-height:1.5;
`
const CTALogTwo=styled.img`
width:90%;
`