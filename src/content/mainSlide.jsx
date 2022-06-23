import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import styles from './maincontent.module.css';



const Container = styled.div`
    width:1200px;   
    position: absolute;
    top: 60%;
    left:20%;
`;


const Wrapper = styled.div`
    width:100%
    height:auto;      
`;

const StyledSlider = styled(Slider)`
    .slick-slide div{
    
      width:100%;
      
      
    }
`;

const ImageContainer = styled.div`

width:100%;


 


  
`;

const Image = styled.img`
max-height: 160px;
margin: 0 auto;
`;



const imgUrl = require('./images/pet.jpg');

const items = [
  { 
    id: 1, 
    url: 'https://contents-image.twayair.com/contents/2022/0323/f58ed9a7-92b2-4997-8bee-98518bad179d.png',
    
  },
  { 
    id: 2, 
    url: 'https://contents-image.twayair.com/contents/2022/0523/fd4b5024-ed46-4aa4-a354-21a4275a9f4d.png    ',
    
  },
  { 
    id: 3, 
    url: '	https://contents-image.twayair.com/contents/2022/0406/a629b1fb-40e2-4cab-9a8d-43f5c3c07b82.png',
    
  },
  { 
    id: 4, 
    url: '	https://contents-image.twayair.com/contents/2022/0418/30aeff60-db71-42a1-add8-39957d01d4c6.png',
    
  },
  { 
    id: 5, 
    url: '	https://contents-image.twayair.com/contents/2022/0531/62aaa891-eb73-406b-b96b-279a2f32c8ec.png',
    
  },
  { 
    id: 6, 
    url: 'https://contents-image.twayair.com/contents/2022/0321/6e754416-31f3-40e6-a313-98ea62565472.png',
    
  },
  { 
    id: 7, 
    url: 'https://contents-image.twayair.com/contents/2022/0411/76cf7d5e-58f5-4a58-b00b-eef169f240dd.png',
    
  },
  { 
    id: 8, 
    url: 'https://contents-image.twayair.com/contents/2022/0411/7d09f426-7549-4260-b044-988831203931.png',
    
  },
  { 
    id: 9, 
    url: 'https://contents-image.twayair.com/contents/2022/0531/163cf96c-a35d-4a37-8673-1b3c5d9e10ad.png',
    
  },
  { 
    id: 10, 
    url: 'https://contents-image.twayair.com/contents/2022/0531/54379f35-2ad8-4d2b-8017-11df2134270e.png',
    
  }
];


export default class ManinSlider extends Component {
  render() {
    const settings = {

      infinite: true,
      autoplay : true,	
      arrows : false, 
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable:false
      
      
    };
    return (
      <Container>
        <Wrapper>
        <StyledSlider {...settings}>
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

        </Wrapper>
      </Container>
    );
  }
}