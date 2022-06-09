import React from "react";
import styles from "./contents.module.css";

function Service({add}){
    return(
        <div style={{padding: '0 12px'}}>
            <div className={styles.content_box}>
                    <div className={styles.img}>
                        <img src={add.img} alt="부가서비스" />
                    </div>
                    <p className={styles.name}>{add.name}</p>
                </div>
        </div>
    )
}

function AddService(){
    const serviceList = [
        {
            img:'https://contents-image.twayair.com/homepage/images/main/img_srv01.png',
            name:'부가서비스 번들'
        },
        {
            img:'	https://contents-image.twayair.com/homepage/images/main/img_srv02.png',
            name:'수하물 추가구매'
        },
        {
            img:'	https://contents-image.twayair.com/homepage/images/main/img_srv03.png',
            name:'사전 좌석 구매'
        },
        {
            img:'https://contents-image.twayair.com/homepage/images/main/img_srv04.png',
            name:'기내식 사전주문'
        },
        {
            img:'https://contents-image.twayair.com/homepage/images/main/img_srv05.png',
            name:`면세품 & t'shop`
        },
        {
            img:'https://contents-image.twayair.com/homepage/images/main/img_srv07.png',
            name:'원클릭 여행 보험'
        }
    ]

    return(
        <div style={{display:'flex'}}>
            {serviceList.map(add=>(
                <Service add={add} key={add.name}/>
            ))}
        </div>
    )
}

export default AddService;