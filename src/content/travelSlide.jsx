import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled, { createGlobalStyle } from 'styled-components';
import styles from "./travel.module.css";



const Global = createGlobalStyle`
  .slick-slide {
	  margin:50px auto;
    padding-bottom:20px;

  }
`;


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 610px;
    background-color: #f3f3f3;
    padding: 50px 0;
    box-sizing: border-box;

`;

const Wrap = styled.div`
    width: 1200px;

`

const StyledSlider = styled(Slider)`
    .slick-slide div{
      position: relative;
      height:382px;
      padding-bottom:10px
      
    }
    &::before{  
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 4px;
      height: 0;
      background-color: #d22c26;
    }
    .&:hover::before{
      width: 100%;
      transition: width 0.5s ease-out;
  }
  
`;

const ImageContainer = styled.div`
      width:282px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      background-color: #fff;
      
      `;

const Image = styled.img`

`;



const imgUrl = require('./images/pet.jpg');

const items = [
  { 
    id: 1, 
    url: 'https://contents-image.twayair.com/contents/2020/1112/0908a425-b0c7-4292-965a-44e2a081502e.jpg',
    departure:'김포',
    arrive:'제주',
    price:'38,900'
  },
  { 
    id: 2, 
    url: '	https://contents-image.twayair.com/contents/2020/1112/ca02ff6d-c4de-4f21-8973-1535edc7f69c.jpg',
    departure:'광주',
    arrive:'양양',
    price:'82,400'
  },
  { 
    id: 3, 
    url: '	https://contents-image.twayair.com/contents/2019/0328/1571374d-6fcd-4130-810d-e707bd6683fa.jpg',
    departure:'김포',
    arrive:'부산',
    price:'31,400'
  },
  { 
    id: 4, 
    url: 'https://contents-image.twayair.com/contents/2022/0523/118237ee-f460-4f9b-9dd0-1e9988079080.png',
    departure:'인천',
    arrive:'싱가포르',
    price:'214,700'
  },
  { 
    id: 5, 
    url: 'https://contents-image.twayair.com/contents/2019/0328/e5d99ad3-1171-43b5-a175-fd80f3ea9234.jpg',
    departure:'인천',
    arrive:'후쿠오카',
    price:'115,700'
  },
  { 
    id: 6, 
    url: '	https://contents-image.twayair.com/contents/2020/1201/ff847398-1455-4221-be56-2a7ccb8a0aec.jpg    ',
    departure:'광주',
    arrive:'제주',
    price:'31,900'
  },
  { 
    id: 7, 
    url: 'https://contents-image.twayair.com/contents/2020/1207/c8362b25-ceec-436b-9139-850d7f171664.jpg',
    departure:'대구',
    arrive:'제주',
    price:'47,400'
  },{ 
    id: 8, 
    url: '	https://contents-image.twayair.com/contents/2019/0328/0ad33585-8f1a-410f-a5f6-fd3a08cc6f29.jpg',
    departure:'인천',
    arrive:'방콕/수완나폼',
    price:'270,350'
  },{ 
    id: 9, 
    url: 'https://contents-image.twayair.com/contents/2019/0328/7b9e4206-db0d-4213-875f-58161e71fd62.jpg',
    departure:'인천',
    arrive:'다낭',
    price:'238,500'
  },
  { 
    id: 10, 
    url: 'https://contents-image.twayair.com/contents/2020/1201/c9208d2f-57f4-4635-bce2-a0437ff7782e.jpg',
    departure:'청주',
    arrive:'제주',
    price:'36,400'
  },
  { 
    id: 11, 
    url: 'https://contents-image.twayair.com/contents/2019/0328/2f36ff33-21c7-46ed-821a-a1abf6f11505.jpg',
    departure:'인천',
    arrive:'괌',
    price:'2227,720'
  },
  { 
    id: 12, 
    url: 'https://contents-image.twayair.com/contents/2019/0328/7603458d-4ab4-4a7e-ab7d-510baecd8998.jpg',
    departure:'인천',
    arrive:'나리타',
    price:'157,000'
  },
  { 
    id: 13, 
    url: 'https://contents-image.twayair.com/contents/2019/0328/7b9e4206-db0d-4213-875f-58161e71fd62.jpg',
    departure:'대구',
    arrive:'다낭',
    price:'233,500'
  },
];


export default class TravelSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay : true,	
      arrows : true, 
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      draggable:false
      
      
    };
    return (

      <Container>
        <Wrap>
        <h2 style={{fontSize:'28px', textAlign:'center', marginBottom:'50px'}}>최저가여행</h2>
        <StyledSlider {...settings}>
          {items.map(item => {
            return (
              <div className={styles.div} key={item.id}> 
                <ImageContainer>
                  <Image src={item.url} />
                  <i className={styles.icon}>편도총액</i>
                    <div className={styles.info_travel}>
                      <span>{item.departure}</span>
                      <span className={styles.arrow}></span>
                      <span>{item.arrive}</span>
                    </div>
                    <div className={styles.info_price}>
                        <span className={styles.won}>KRW</span>
                        <span className={styles.price}>{item.price}</span>
                    </div>
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