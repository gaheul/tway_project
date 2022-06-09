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
                       <p  style={{padding:"0 85px"}}>{infoList.con}</p>
                       <button>{infoList.name}바로가기</button> 
                    </div>
        </div>
    )
}

function PartnerRent(){
    const info=[
        {   
            img:'https://contents-image.twayair.com/contents/2021/0422/5720559e-9a63-4000-ae74-2d5abfe04e64.png',
            name:'렌터카스',
            con:`160개국 900개 업체를 한눈에!최저가 보장으로 예약하자!`,
        },
        {   
            img:'https://contents-image.twayair.com/contents/2021/1215/133b2202-a085-48f3-b3ad-22520813b0ec.png',
            name:'SK렌터카',
            con:`제주지역 차량 보유대수 1위!똑똑한 선택! 즐거운 여행!`,
            
        },
    ]

    return(
        <div style={{display:'flex'}}>
            {info.map(infoList=>(
                <Partner infoList={infoList} key={infoList.name}/>
            ))}
        </div>
    )
}

export default PartnerRent;