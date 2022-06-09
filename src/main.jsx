import React from "react";
import Footer from "./footer";
import MainContent from "./content/main_content";
import Contents from "./content/contents";
import styles from './main.module.css';

function MainCom(){
    return(
        <div>
            <div className={styles.mainImg}>
                <div className={styles.mainImg}>
                    <MainContent/>
                </div>
            </div>
            <div className={styles.contents}>
                <Contents/>
            </div>
            <Footer/>
        </div>
    )
}

export default MainCom;