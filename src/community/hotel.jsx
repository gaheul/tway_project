import React from "react";
import Footer from "../footer";
import styles from './community.module.css';
import PartnerHotel from "./partnersHotel";

function Hotel(){
    return(
        <div>
            <div className={styles.content}>
             <div className={styles.content_header}>
                    <div className={styles.content_title}>
                        <h3>호텔</h3>
                    </div>
                    <div className={styles.con_sale}>
                    <h3>이달의 호텔 할인</h3>
                    <p>이달의 제휴 할인으로 알뜰하게 이용해보세요!</p>
                </div>
             </div>
             <div className={styles.section}>
                <div className={styles.company}>
                    <div className={styles.company_img}>
                        <img src={require('./images/airbnb.png')} alt="" />
                    </div>
                    <div className={styles.company_go}>
                        <strong>에어비앤비</strong>
                        <p>제주에서 즐기는 색다른 숙소! <br/>
                            제주 여행도 역시 Airbnb!
                        </p>
                        <button>에어비앤비 바로가기</button>
                    </div>
                </div>
                <div className={styles.company_list}>
                    <PartnerHotel/>
                </div>
             </div>
            </div>
            
        </div>
    )
}

export default Hotel;