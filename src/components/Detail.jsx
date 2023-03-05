import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebase'

const Detail = () => {
  const{id}=useParams();
  console.log(id);
  const [movie, setMovie]=useState();

  useEffect(()=>{
     db.collection("Movies")
     .doc(id)
     .get()
     .then((doc)=>{
      if(doc.exists){
        setMovie(doc.data());
      }
      else
        {

        }
     })
    },[id]);
    console.log(movie);



  return (
    <Container>
      {movie &&
      <>
      <Background>
            <img src={movie.BackgroundImg} alt="" srcset="" />
      </Background>
      <ImageTitle>
        <img src={movie.TitleImg} alt="" srcset="" />
      </ImageTitle>
      <Controls>
        <PlayButton>
               <img src="/images/play-icon-black.png" alt="" srcset="" />
               <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
              <img src="/images/play-icon-white.png" alt="" srcset="" />
               <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
              <span>+</span>
        </AddButton>
        <GroupWatchButton>
              <img src="/images/group-icon.png" alt="" srcset="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>
      {movie.Genres}
      </SubTitle>
      <Description>
            {movie.Description}
      </Description>
      </>}
    </Container>
  )
}

export default Detail


const Container=styled.div`
min-height:calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position:relative;
overflow:hidden;
`

const Background=styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:-1;
opacity:0.8;

img{
    width:100%;
    height:100%;
    object-fit:cover;
}
`

const ImageTitle=styled.div`
height:30vh;
width:35vw;
min-height:170px;
min-width:200px;
margin-top:60px;
img{
    width:100%;
    height:100%;
    object-fit:contain;
}
`
const Controls=styled.div`
display:flex;
align-items:center;
`
const PlayButton=styled.button`
display:flex;
align-items:center;
margin-right:22px;
padding:0px 24px;
height:56px;
border-radius:4px;
border:none;
background:rgb(249,249,249);
font-size:15px;
letter-spacing:1.8px;
cursor:pointer;

&:hover{
  background:rgb(198,198,198);
}
`
const TrailerButton=styled(PlayButton)`
background:rgba(0, 0,0,0.3);
border:1px solid rgb(249,249,249);
color:rgb(249,249,249);
`

const AddButton=styled.button`
height:44px;
width:44px;
display:flex;
align-items:center;
justify-content:center;
margin-right:22px;
border-radius:50%;
border:2px solid white;
background-color:rgba(0,0,0,0.6);
cursor:pointer;

span{
  font-size:30px;
  color:white;
}
`
const GroupWatchButton=styled(AddButton)`
background-color:rgb(0,0,0) !important;
`
const SubTitle=styled.div`
color:rgb(249,249,249);
font-size:15px;
min-height:20px;
margin-top:26px;
`
const Description=styled.div`
line-height:1.4;
font-size:20px;
margin-top:16px;
color:rgb(249,249,249);
max-width:760px;
`