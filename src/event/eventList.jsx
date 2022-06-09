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
            img:'https://contents-image.twayair.com/contents/2022/0223/ef91358c-72ab-4209-8e8b-f2c30d12c1da.jpg',
            title:'국내선 주말 특가',
            con:'단, 3일간의 국내선 특별할인',
            date:'2022-06-03 ~ 2022-06-05'
        },
        {
            img:'https://contents-image.twayair.com/contents/2022/0223/ef91358c-72ab-4209-8e8b-f2c30d12c1da.jpg',
            title:'국내선 주말 특가',
            con:'단, 3일간의 국내선 특별할인',
            date:'2022-06-03 ~ 2022-06-05'
        },
        {
            img:'https://contents-image.twayair.com/contents/2022/0223/ef91358c-72ab-4209-8e8b-f2c30d12c1da.jpg',
            title:'국내선 주말 특가',
            con:'단, 3일간의 국내선 특별할인',
            date:'2022-06-03 ~ 2022-06-05'
        },
        {
            img:'https://contents-image.twayair.com/contents/2022/0223/ef91358c-72ab-4209-8e8b-f2c30d12c1da.jpg',
            title:'국내선 주말 특가',
            con:'단, 3일간의 국내선 특별할인',
            date:'2022-06-03 ~ 2022-06-05'
        },
        {
            img:'https://contents-image.twayair.com/contents/2022/0223/ef91358c-72ab-4209-8e8b-f2c30d12c1da.jpg',
            title:'국내선 주말 특가',
            con:'단, 3일간의 국내선 특별할인',
            date:'2022-06-03 ~ 2022-06-05'
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