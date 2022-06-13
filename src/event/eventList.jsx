import React from "react";
import styles from "./event.module.css"


function EventList({event}){
    return(
        <div>
                <div className={styles.event_content}>
                        <div className={styles.event_img}>
                            <img src={event.img} alt="이벤트이미지" /></div>
                        <strong style={{marginTop:"20px"}}>{event.title}</strong>
                        <p style={{marginTop:"5px"}}>{event.con}</p>
                        <p style={{marginTop:"10px", color:" #808080"}}>{event.date}</p>
                    </div>
            </div>
    )
}

function EventItem(){
    const item = [
        {
            img:'https://contents-image.twayair.com/contents/2022/0610/636b6829-d9c6-4d33-b22a-7d001d1738ae.jpg',
            title:'제주 얼리버드 할인',
            con:'9~10월 출발 최대 10% 할인',
            date:'2022-06-13 ~ 2022-06-26'
        },
        {
            img:'https://contents-image.twayair.com/contents/2022/0224/136ed577-8109-4f6d-a902-37f6a01bedeb.jpg',
            title:'주간 랜덤 쿠폰 선착순 지급',
            con:'김포-제주 2천원 즉시 할인',
            date:'2022-06-08 ~ 2022-06-14'
        },
        {
            img:'https://contents-image.twayair.com/contents/2022/0602/5fdb14a6-2666-48e2-b645-ed49923a86e3.jpg',
            title:`t'pet 서비스 시즌3`,
            con:'댕냥이 친구들을 위한 반려동물 동반 여행 혜택',
            date:'2022-06-02 ~ 2022-09-30'
        },
        {
            img:'https://contents-image.twayair.com/contents/2022/0520/c29a0174-1b69-4aee-9b5b-9a72849e56dc.png',
            title:'자가격리 없이 떠나는 해외여행',
            con:'무료 예약 변경+코로나19 검사 할인',
            date:'2022-06-02 ~ 2022-06-30'
        },
        {
            img:'https://contents-image.twayair.com/contents/2022/0429/f58eda8e-9b51-4107-91eb-feaec5cc02d8.png',
            title:'무착륙 관광비행',
            con:'면세점과 함께하는 무착륙 쇼핑',
            date:'2022-06-01 ~ 2022-06-26'
        },
        {
            img:'https://contents-image.twayair.com/contents/2022/0531/c49ab25b-5a44-475f-a5d5-72efdccfceff.png',
            title:'티웨이페이 결제 할인',
            con:'티웨이페이 삼성카드 최대5만원 할인',
            date:'2022-06-01 ~ 2022-06-30'
        },
        {
            img:'https://contents-image.twayair.com/contents/2022/0531/753954f6-75b4-4fd3-bd11-5453485d975a.jpg',
            title:'6월 이달의 혜택',
            con:'최대 5만원 할인받고 항공권 구매하자!',
            date:'2022-06-01 ~ 2022-06-30'
        },
        {
            img:'https://contents-image.twayair.com/contents/2022/0429/a17e2baa-8f12-4f31-8d59-36c78898c3ee.jpg',
            title:'6월 카드 결제 할인',
            con:'국내선 10% 즉시 할인',
            date:'2022-06-01 ~ 2022-06-30'
        },
        {
            img:'https://contents-image.twayair.com/contents/2022/0525/71bf71e4-2a81-43b8-b9c5-358a69498baf.jpg',
            title:'티웨이 타면 왓챠 이용권 증정!',
            con:'2022년 업그레이드 된 왓챠 혜택 확인!',
            date:'2022-06-01 ~ 2023-01-01'
        },
    ]

    return(
        <div style={{}}>
            {item.map(event =>(
                <EventList event={event} key={event.title}/>
            ))}
        </div>
    )
}

export default EventItem;