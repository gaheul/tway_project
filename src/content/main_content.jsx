import React from "react";
import styles from './maincontent.module.css';
import { IoIosCheckmarkCircleOutline,IoIosHelpCircleOutline,IoMdCheckmarkCircle } from "react-icons/io";
import ManinSlider from "./mainSlide";
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from 'styled-components';


function MainContent(){
    const [check, setCheck] = useState(true);

    const click = () => {
      setCheck(!check);
    }

    const selectFlightMethod = (event) => {
        //event.stopPropagation();
        //event.preventDefault();
        if(event.target.nodeName == "LI") {
            event.target.children[0].click();
        }
    }
    const [open, setOpen] = useState(false)

    const onHover = () => setOpen(!open);


    
        const SaleCode = styled.div`

        position: absolute;
        top: 20px;
        left: 50%;
        padding: 22px;
        width: 390px;
        text-align: left;
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(77, 77, 77);
        box-shadow: rgb(204 204 204) 1px 1px 15px;
        z-index: 20;
        `;

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
                                <li onClick={selectFlightMethod}>
                                    <input type="radio" id="round" name="flight_method" />
                                    <button type="button">
                                        <label for="round">왕복</label>
                                    </button>
                                </li>
                                <li onClick={selectFlightMethod}>
                                    <input type="radio" id="round" name="flight_method" />
                                    <button type="button">
                                        <label for="round">편도</label>
                                    </button>
                                </li>
                                <li onClick={selectFlightMethod}>
                                    <input type="radio" id="round" name="flight_method" />
                                    <button type="button">
                                        <label for="round">다구간</label>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.check}>
                            <input type="checkbox" onClick={click} id="group" className={styles.input_check} name="checkInput" />
                            <label for="group" className={styles.check_con}>
                                <span>
                                {check ? (<IoIosCheckmarkCircleOutline/>) : (<IoMdCheckmarkCircle /> )}                                
                                </span>
                                단체(10명이상)
                            </label>
                        </div>
                        <div className={styles.code}>
                            <input type="text" placeholder="할인코드 입력"/>
                            <span>
                                <IoIosHelpCircleOutline onMouseEnter={onHover} onMouseLeave={onHover}/>
                                    {open ? (
                                    <SaleCode>
                                        <p className={styles.code_title}>할인코드란?</p>
                                        <p className={styles.code_txt}>
                                            티웨이항공 탑승 고객을 대상으로 특정 기간 동안
                                            추가 할인을제공해 드리는 제도입니다.
                                            예약 시 사전에 안내된 코드를 입력하시면,
                                            할인 가격이 적용된 항공편을 선택하실 수 있습니다.
                                        </p>
                                    </SaleCode>
                                    ) : (
                                    ""
                                    )}
                            </span>
                        </div>

                    </div>
                    <div className={styles.section}>
                        <div className={styles.book_location}>
                            <input type="text" placeholder="출발지" name="departure" />
                            <Link className={styles.departure}></Link>
                        </div>
                        <div className={styles.book_location}>
                            <input type="text" placeholder="도착지" name="arrive"/>
                            <Link className={styles.departure}></Link>
                        </div>
                        <div className={styles.book_date}>
                            <input type="text" placeholder="YYYY-MM-DD" name="arrive" className={styles.date} />
                            <span>~</span>
                            <input type="text" placeholder="YYYY-MM-DD" name="arrive" className={styles.date} />
                            <Link className={styles.date_img}></Link>
                        </div>
                        <div className={styles.book_passenger}>
                            <input type="text" placeholder="성인1,소아0,유아0" readOnly name="arrive" className={styles.passenger} />
                            <Link className={styles.passenger_img}></Link>
                        </div>
                        <button type="button" className={styles.bookBtn}>조회</button>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default MainContent;