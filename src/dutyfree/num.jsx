import React from "react";
import styles from './dutyfree.module.css';



function Num({number}){
    return(
        <div>
            <div className={styles.num}>
                        <a className={styles.num_prev_first} href="#"></a>
                        <a className={styles.num_prev} href="#"></a>
                        <a className={styles.num_on} href="#">{number.num}</a>
                        <a className={styles.num_on} href="#">{number.num}</a>
                        <a className={styles.num_next} href="#"></a>
                        <a className={styles.num_next_first} href="#"></a>
            </div>
        </div>
    )
}

function NumList(){
    const number = [
        {
            num:'1'
        },
        {
            num:'2'
        }
    ]

    return(
        <div>
            <Num number={number[0]}/>
            <Num number={number[1]}/>
        </div>
    )
}

export default NumList;