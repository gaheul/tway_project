import React from "react";
import styles from './footer.module.css';

function Footer(){
    return(
            <div className={styles.footer}>
                <div className={styles.header}>
                    <div className={styles.header_in}>
                        <div className={styles.header_info}>
                            <span className={styles.book_title}>티웨이항공 예약센터</span>
                            <span className={styles.book_tel} >1688 - 8686</span>
                            <span className={styles.book_time}>07:00 ~ 19:00</span>
                        </div>
                    </div>
                </div>
                <div className={styles.section}>
                        <div className={styles.footer_menu}>
                            <ul>
                                <li>
                                    <div className={styles.footer_menu_title}><strong>회사 소개</strong></div>
                                    <div className={styles.footer_menu_con}>
                                        <ul>
                                            <li>티웨이항공 소개</li>
                                            <li>투자정보</li>
                                            <li>채용안내</li>
                                            <li>윤리경영</li>
                                        </ul>
                                        <ul>
                                            <li>광고 홍보 영상</li>
                                            <li>사회 공헌</li>
                                            <li>보도자료</li>
                                            <li>항공훈련센터</li>
                                        </ul>
                                    </div>
                                        

                                </li>
                                <li>
                                <div className={styles.footer_menu_title}><strong>고객센터</strong></div>
                                    <div className={styles.footer_menu_con}>
                                        <ul>
                                            <li>공지사항</li>
                                            <li>유실물센터</li>
                                            <li>고객의 말씀</li>
                                        </ul>
                                        <ul>
                                            <li>제휴문의</li>
                                            <li>FAQ</li>
                                            <li>서식자료실</li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                <div className={styles.footer_menu_title}><strong>규정 및 약관</strong></div>
                                    <div className={styles.footer_menu_con}>
                                        <ul>
                                            <li>여객운송약관</li>
                                            <li>운임 및 수수료</li>
                                            <li>기타 고지사항</li>
                                        </ul>
                                        <ul>
                                            <li>홈페이지 이용약관</li>
                                            <li>개인정보 처리방침</li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                <div className={styles.footer_menu_title}><strong>기타</strong></div>
                                    <div className={styles.footer_menu_con}>
                                        <ul>
                                            <li>항공교통 이용자서비스 게획</li>
                                            <li>피애구제계획</li>
                                            <li>t'agency</li>
                                        </ul>
                                        
                                    </div>
                                </li>
                            </ul>
                        </div>
                    
                </div>
                <div className={styles.copy}>
                    <div className={styles.copy_info}>
                        <div className={styles.info_logo}>
                            <img src={require('./images/footer_logo.png')} alt="" />
                        </div>
                        <address className={styles.info_con}>
                            <p>
                                <span>대표이사. 정홍근</span>
                                <span>사업자등록번호. 101-81-94800</span>
                                <span> 주소. 서울시 강서구 하늘길 210 국제화물청사 3층</span>
                            </p>
                            <p>
                                <span>통신판매업신고번호. 2017-서울강서-1292</span>
                                <span>개인정보 관리책임자. 경영본부장 김형이</span>
                            </p>
                            <copyright style={{fontSize:'12px',color:'#1a1a1a'}}>
                                Copyright ⓒ 2019 t’way Air. All Rights Reserved.
                            </copyright>
                        </address>
                        <div className={styles.info_security}>
                            <img className={styles.security_web} src={require('./images/footer_web.png')}   alt="" />
                            <img className={styles.security_isms} src={require('./images/footer_isms.png')} alt="" />
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Footer;