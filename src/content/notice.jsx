import React from "react";
import styles from "./notice.module.css";

function Notice(){
    return(
        <div>
            <div className={styles.content}>
                <div className={styles.content_wrap}>
                    <div className={styles.notice}>
                        <div className={styles.notice_title}>
                            <h2>공지사항</h2>
                            <a href="#" className={styles.more_btn}></a>
                        </div>
                        <div className={styles.notice_list}>
                            <ul>
                                <li>
                                    <a href="#">
                                        <div className={styles.notice_con}>
                                            <p className={styles.subject}>2022년 6월 국내선 유류할증료</p>
                                            <p className={styles.date}>2022-05-10</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.notice_list}>
                            <ul>
                                <li>
                                    <a href="#">
                                        <div className={styles.notice_con}>
                                            <p className={styles.subject}>국내선 월요일 주말운임 적용 변경 안내(22/05/10부)</p>
                                            <p className={styles.date}>2022-04-20</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.notice_list}>
                            <ul>
                                <li>
                                    <a href="#">
                                        <div className={styles.notice_con}>
                                            <p className={styles.subject}>국내선 탑승수속 마감시간 변경(22년 3월 18일 부)</p>
                                            <p className={styles.date}>2022-03-04</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.notice_sns}>
                        <div className={styles.notice_title}>
                            <h2>SNS</h2>
                            
                        </div>
                        <div className={styles.sns_list}>
                            <ul>
                                <li>
                                    <a href="#">
                                        <img src={require('./images/sns_facebook.png')} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={require('./images/sns_insta.png')} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={require('./images/sns_youtube.png')} alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Notice;