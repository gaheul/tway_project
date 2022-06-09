import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';



const Container = styled.div`
overflow:hidden;
display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 590px;
    padding: 50px 0;
    box-sizing: border-box;
    background-color: #fff;
`;

const Wrap = styled.div`
    width: 1200px;

`

const StyledSlider = styled(Slider)`
    .slick-slide div{
      width:100%;
      outline: none;

    }
`;

const ImageContainer = styled.div`
overflow:hidden;
width: 100%;
height:340px;
margin: 50px auto 20px;

display: flex;
justify-content: space-around
;
  
`;

const Image = styled.img`
width: 580px;
    height: 340px;

    background-color: burlywood;
`;



const imgUrl = require('./images/pet.jpg');

const items = [
  { id: 1, url: '	https://contents-image.twayair.com/contents/2022/0520/c29a0174-1b69-4aee-9b5b-9a72849e56dc.png' },
  { id: 2, url: '	https://contents-image.twayair.com/contents/2022/0419/fe4c15ca-4e13-49ed-93a6-afff73bb9077.png'},
  { id: 3, url: 'https://contents-image.twayair.com/contents/2022/0525/71bf71e4-2a81-43b8-b9c5-358a69498baf.jpg' },
  { id: 4, url: 'https://contents-image.twayair.com/contents/2022/0429/f58eda8e-9b51-4107-91eb-feaec5cc02d8.png' },
  { id: 5, url: 'https://contents-image.twayair.com/contents/2022/0531/c49ab25b-5a44-475f-a5d5-72efdccfceff.png' },
  { id: 6, url: 'https://contents-image.twayair.com/contents/2022/0224/af8a9aa0-e241-4514-b6b7-7fb9f9f53059.jpg' },
  { id: 7, url: '	https://contents-image.twayair.com/contents/2022/0531/753954f6-75b4-4fd3-bd11-5453485d975a.jpg' },
  { id: 8, url: '	https://contents-image.twayair.com/contents/2022/0520/f773575f-4ee2-482a-90f8-75d3808e7d41.jpg' },
  { id: 9, url: '	https://contents-image.twayair.com/contents/2022/0520/fbb71097-9723-4849-b934-20c8fd69b793.jpg' },
  { id: 10, url: '	https://contents-image.twayair.com/contents/2022/0224/2bc8053e-6bbf-4c44-9ed9-f2b666fead07.jpg' },
  { id: 11, url: 'https://contents-image.twayair.com/contents/2022/0224/d203023c-8fc8-4232-9594-1982309d4804.jpg'},
  { id: 11, url: '	https://contents-image.twayair.com/contents/2022/0602/5fdb14a6-2666-48e2-b645-ed49923a86e3.jpg'},
];


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay : true,	
      arrows : true, 
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      
      
    };
    return (
      <Container>
        <Wrap>
        <h2 style={{fontSize:'28px', textAlign:'center'}}> 이벤트</h2>
        <StyledSlider {...settings}
        >
          {items.map(item => {
            return (
              <div key={item.id}>
                <ImageContainer>
                  <Image src={item.url} />
                </ImageContainer>
              </div>
            );
          })}
        </StyledSlider>

        </Wrap>
      </Container>
    );
  }
}