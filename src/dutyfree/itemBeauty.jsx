import React from "react";
import styles from "./item.module.css";
import Label from "./label";



function ItemList({items}){
    

    return(
     <div className={styles.item}>    
         <div className={styles.product}>
            <div className={styles.item_img}>
                <div><img src={items.img} alt="" /></div>
            </div>
            <div className={styles.item_name}>
                <p className={styles.brand}>{items.brand}</p>
                <strong className={styles.name}>{items.name}</strong>
                
            </div>
            <div className={styles.item_price}>
                <del>{items.salePrice}</del>
                <strong>{items.price}</strong>
                <span>{items.exchage}</span>
            </div>
             <div className={styles.item_label}>
                {items.label}
            </div> 
         </div>
            
        </div>
    )

}

function ItemBeauty(){
    
    const itemLists=[
        {
            img:'	https://contents-image.twayair.com/contents/2022/0331/c163bd55-0397-40b6-a89c-f0bf8d59d2d8.jpg',
            brand:'엘리자베스아덴',
            name:'엘리자베스아덴 어드밴스드 세라마이드 캡슐 세럼 트리오',
            salePrice: '$103.00',
            price:'$82.00',
            exchage:'(₩105,000)',
            
        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0120/6e7a2e34-4350-41a4-a314-5a6eda2ad88f.jpg',
            brand:'시니오스트레일리아',
            name:'플라센타 세럼',
            salePrice: '$95.00',
            price:'$29.00',
            exchage:'(₩37,500)'
        },
        {           
            img:'https://contents-image.twayair.com/contents/2020/0109/032514b8-e3be-47c8-9d9e-5e22a6cb84cd.jpg',
            brand:'시니케어',
            name:'포포 오인트먼트 세트',
            salePrice: '$31.00',
            price:'$29.00',
            exchage:'(₩37,500)',
            label:<Label/>
        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0109/84424e65-f3e6-46d4-9740-aff8b7101b04.jpg',
            brand:'존바바토스',
            name:'아티산 오드 뚜알렛',
            salePrice: '$59.00',
            price:'$47.00',
            exchage:'(₩60,500)',
            label:<Label/>
        },
        {   
            img:'	https://contents-image.twayair.com/contents/2020/0109/ac1698b9-e223-47be-b8b6-4f040b262257.jpg',
            brand:'존바바토스',
            name:'아티산 블루 오드 뚜알렛',
            salePrice: '$60.00',
            price:'$42.00',
            exchage:'(₩54,000)',
            label:<Label/>
        },
        {
            img:'https://contents-image.twayair.com/contents/2022/0516/7fa7df75-6b10-4523-b8b7-ba88f570f668.jpg',
            brand:'마지맥스',
            name:'제주 마유&마태반 크림',
            salePrice: '$32.00',
            price:'$29.00',
            exchage:'(₩37,500)',
            label:<Label/>
        },
        {
            img:'	https://contents-image.twayair.com/contents/2022/0516/26c8dee8-633d-43ab-824c-392188715ce4.jpg',
            brand:'마지맥스',
            name:'아쿠아 셀 크림',
            salePrice: '$32.00',
            price:'$29.00',
            exchage:'(₩37,500)'
        },
        {
            img:'	https://contents-image.twayair.com/contents/2020/0123/3d10f223-c860-43f2-b376-79659481a745.jpg',
            brand:'코스메팉',
            name:'LED 마스크',
            salePrice: '$58.00',
            price:'$41.00',
            exchage:'(₩52,500)'
        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0106/5d58737e-413f-4237-925b-686bd197cd02.jpg',
            brand:'메디힐',
            name:'앰플마스크 EX 2종 세트',
            salePrice: '$28.00',
            price:'$25.00',
            exchage:'(₩32,000)'
        }

    ]

    return(
       <div>  
           {itemLists.map(items => (
               <ItemList  items={items} key={items.brand}/>
           ))}
       </div>
       
    )
}

export default ItemBeauty;