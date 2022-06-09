import { render } from "@testing-library/react";
import React from "react";
import styles from './community.module.css';

function Partner({infoList}){
    return(
        <div>
            
                    <div className={styles.list_con}>
                        <div className={styles.list_img}>
                            <img src={infoList.img} alt=""></img>
                        </div>
                       <strong>{infoList.name}</strong>
                       <p style={{padding:"0",height:"18px"}}>{infoList.con}</p>
                       <p style={{padding:"0",height:"18px",textOverflow:"ellipsis",overflow:"hidden", whiteSpace: 'nowrap'}}>{infoList.con2}</p>
                       <button>카드 자세히 보기</button> 
                    </div>
        </div>
    );

}

function PartnerBank(){
    const info=[
        {   
            img:'	https://contents-image.twayair.com/contents/2021/0426/5b5884d7-2a5d-4b90-8f4b-c2be99b8fb8f.jpg',
            name:'KB 국민 Easy fly 티타늄카드',
            con:`· 항공권/유료 부가서비스 할인은 기본!`
                 ,
            con2:`· 면세/숙박 할인, 해외캐시백, 공항라운지 등 여행 관련 풍성한 혜택!`
        },
        {   
            img:'https://contents-image.twayair.com/contents/2021/0426/7a7ea555-57ce-412e-b02d-fd4faba7e081.jpg',
            name:'우리 카드의 정석 UniMile 카드',
            con:`· UniMile 최대 3% 적립`
            ,
            con2:`· 프리미엄 투어 서비스`
        },
        {   
            img:'	https://contents-image.twayair.com/contents/2021/0426/65f938f9-c0d5-4423-9ed7-5093af4901bc.jpg',
            name:'IBK기업은행 원 에어(유니마일) 카드',
            con:`· 유니마일 적립 여행특화서비스는 기본!`
            ,
            con2:`· 스타벅스 사이렌 오더 할인까지!`
        }
    ]

    return(
        <div style={{display:'flex'}}>
            {info.map(infoList=>(
                <Partner infoList={infoList} key={infoList.name}/>
            ))}
        </div>
    )
}

export default PartnerBank;