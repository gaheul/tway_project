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
                       <p>{infoList.con}</p>
                       <button>{infoList.go}바로가기</button> 
                    </div>
        </div>
    )
}

function PartnerHotel(){
    const info=[
        {   
            img:'https://contents-image.twayair.com/contents/2021/1025/be813eac-2d0e-4057-8e15-ab88cba2613c.png',
            name:'호텔스컴바인',
            con:`호텔 가격 한번에 검색하고 최저가보장으로 예약하세요!`,
            go:'호텔스 컴바인'
        },
        {   
            img:'https://contents-image.twayair.com/contents/2021/0422/4b23ea06-13d7-4fbf-b7f0-34fa0c5ad6f3.jpg',
            name:'5성급 복합 리조트',
            con:`티웨이항공 회원 특별 혜택`,
            go:'제주신화월드'
            
        },
        {   
            img:'https://contents-image.twayair.com/contents/2021/0422/37d48cb9-b3dd-43d6-a983-435386193e0e.jpg',
            name:'Booking.com',
            con:`티웨이 모든 취항지의 숙소 예약 최저가로 진행하세요!`,
            go:'Booking.com'
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

export default PartnerHotel;