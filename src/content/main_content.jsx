import React from "react";
import styles from './maincontent.module.css';
import { IoIosCheckmarkCircleOutline,IoIosHelpCircleOutline } from "react-icons/io";
import ManinSlider from "./mainSlide";


function MainContent(){
    return(
        <div>
            <ManinSlider/>
            <div className={styles.list_menu}>
                    <ul className={styles.list_con}>
                        <li>
                             <a>
                                <span className={styles.mainImg}>
                                <img src="/class.png" alt="" />
                                </span>
                                <p>항공훈련센터</p>
                            </a>
                        </li>
                        <li>
                             <a>
                                <span className={styles.mainImg}>
                                <img src="/pet.png" alt="" />
                                </span>
                                <p>반려동물 동반여행</p>
                            </a>
                        </li>
                        <li>
                             <a>
                                <span className={styles.mainImg}>
                                <img src="/cupon.png" alt="" />
                                </span>
                                <p>쿠폰다운로드</p>
                            </a>
                        </li>
                    </ul>
            </div>
            <div style={{display:"flex",justifyContent:"center", alignItems:"flex-end", position:"relative"}}>
                <div className={styles.mainBook}>
                    <div className={styles.book}>
                        <div className={styles.book_section}>
                            <ul>
                                <li><a>왕복</a></li>
                                <li><a>편도</a></li>
                                <li><a>다구간</a></li>
                            </ul>
                        </div>
                        <div className={styles.check}>
                            <input type="checkbox" id="group" className={styles.input_check} name="checkInput" />
                            <label for="group" className={styles.check_con}>
                                <span><IoIosCheckmarkCircleOutline/></span>
                                단체(10명이상)
                            </label>
                        </div>
                        <div className={styles.code}>
                            <input type="text" placeholder="할인코드 입력"/>
                            <a><IoIosHelpCircleOutline/></a>
                        </div>

                    </div>
                    <div className={styles.section}>
                        <div className={styles.book_location}>
                            <input type="text" placeholder="출발지" name="departure" className={styles.departure} />
                        </div>
                        <div className={styles.book_location}>
                            <input type="text" placeholder="도착지" name="arrive" className={styles.arrive} />
                        </div>
                        <div className={styles.book_date}>
                            <input type="text" placeholder="YYYY-MM-DD" name="arrive" className={styles.date} />
                            <span>~</span>
                            <input type="text" placeholder="YYYY-MM-DD" name="arrive" className={styles.date} />
                        </div>
                        <div className={styles.book_passenger}>
                            <input type="text" placeholder="성인1,소아0,유아0" readOnly name="arrive" className={styles.passenger} />
                        </div>
                        <button type="button" className={styles.bookBtn}>조회</button>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default MainContent;