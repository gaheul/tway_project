import React from "react";
import Footer from "../footer";
import styles from './community.module.css';
import PartnerInfo from "./partnersHotel";
import Partner from "./partnersHotel";
import PartnerRent from "./partnersRent";

function Rent(){
    return(
        <div>
            <div className={styles.content}>
             <div className={styles.content_header}>
                    <div className={styles.content_title}>
                        <h3>렌터카</h3>
                    </div>
                    <div className={styles.con_sale}>
                    <h3>이달의 렌터카 할인</h3>
                    <p>렌트카 제휴사들의 다양한 할인을 확인해보세요!</p>
                </div>
             </div>
             
             <div className={styles.section}>
                <div className={styles.company}>
                    <div className={styles.company_img_other}> <img src={require('./images/passrent.png')} alt="" /></div>
                    <div  style={{backgroundColor:"#6B85BE"}} className={styles.company_go}>
                         <strong>제주패스렌트카</strong>
                        <p>제주에서 즐기는 색다른 숙소! <br/>
                            제주 여행도 역시 Airbnb!
                        </p>
                        <button>제주패스렌트카 바로가기</button>
                    </div>
                </div>
                <div className={styles.company}>
                    <div className={styles.company_img_other}> <img src={require('./images/rentcar.jpg')} alt="" /></div>
                    <div style={{backgroundColor:"#8C74CC"}} className={styles.company_go}>
                         <strong>제주렌트카</strong>
                        <p>가장 가까운 렌터카(도보 3분/셔틀 1분) <br/>
                            티웨이항공 회원 전 차종 최대 85% 할인</p>
                        <button>제주렌트카 바로가기</button>
                    </div>
                </div>
                <div className={styles.company_list}>
                    <PartnerRent/>
                </div>
             </div>
            </div>
            
        </div>
    )
}

export default Rent;