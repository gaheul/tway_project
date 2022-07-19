import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./item.module.css";
import Label from "./label";



function ItemList({items,best,hot}){
    Label.defaultProps = {
        best:'BEST',
        hot:"HOT"
    }

    const [open, setOpen] = useState(false)
    const [opens, setOpens] = useState(false)

    const onBasket = () => setOpen(!open);
    const onShop = () => setOpens(!opens);

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
             {items.label ? <Label/> : null}
            </div> 
            <div className={styles.item_link} >
                <Link className={styles.basket}  onMouseEnter={onBasket} onMouseLeave={onBasket} >                   
                    {open ? <div className={styles.basket_text}>장바구니</div> : <div className={styles.basket_img}></div>}
                </Link>
                <Link className={styles.shop} onMouseEnter={onShop} onMouseLeave={onShop}>
                    {opens ? <div className={styles.shop_text}>주문하기</div> : <div className={styles.shop_img}></div>}
                </Link>
            </div>
         </div>
            
        </div>
    )

}

function ItemGift(){
    
    const itemLists=[
        {
            img:'https://contents-image.twayair.com/contents/2020/0109/496e9307-73e8-4c15-82d9-9be9e508e588.jpg',
            brand:'LG 프라엘',
            name:'토탈 타이트업 케어',
            salePrice: '$372.00',
            price:'$186.00',
            exchage:'(₩238,000)',
            label:true
            
        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0109/00045ef9-a951-4de3-ad0d-6c308720a1c5.jpg',
            brand:'뱅앤올룹슨',
            name:'A8 이어폰 블랙',
            salePrice: '$129.00',
            price:'$65.00',
            exchage:'(₩83,500)'
        },
        {           
            img:'	https://contents-image.twayair.com/contents/2020/0109/00045ef9-a951-4de3-ad0d-6c308720a1c5.jpg',
            brand:'뱅앤올룹슨',
            name:'베오플레이 P2 블루투스 스피커',
            salePrice: '$166.00',
            price:'$116.00',
            exchage:'(₩148,500)',
        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0228/de8cfb62-2207-470d-b033-82bcf50ad3b0.jpg',
            brand:'보이로',
            name:'상완 혈압계(BM54)',
            salePrice: '$79.00',
            price:'$55.00',
            exchage:'(₩70,500)',
        },
        {   
            img:'	https://contents-image.twayair.com/contents/2020/0228/3d0c3231-209f-4388-8d42-461cd9c7126f.jpg',
            brand:'보이로',
            name:'비접촉식 적외선 온도계(IFT87)',
            salePrice: '#59.00',
            price:'$41.00',
            exchage:'(₩52,500)',
        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0109/1c1944ec-8393-4ab9-b814-1ee34cc8b6fe.jpg',
            brand:'보이로',
            name:'IEM 48 디지털 경피신경 전기자극기',
            salePrice: '$129.00',
            price:'$90.00',
            exchage:'(₩115,500)',
        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0108/7d47f7c6-c295-46b8-bb99-3b65917eee6d.jpg',
            brand:'HC 보헤미안',
            name:'보헤미안시계&팔찌세트',
            salePrice: '$35.00',
            price:'$25.00',
            exchage:'(₩32,000)'
        },
        {
            img:'	https://contents-image.twayair.com/contents/2020/0108/7fbb81b7-fb06-4888-a855-acea24bbb5bb.jpg',
            brand:'HC 보헤미안',
            name:'페인티드 로제 시계팔찌',
            salePrice: '$45.00',
            price:'$32.00',
            exchage:'(₩41,000)'
        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0109/246227ab-cb98-4282-a005-67d6f04435f1.jpg',
            brand:'샤오미',
            name:'러판 목베개 마사지기',
            salePrice: '$31.00',
            price:'$22.00',
            exchage:'(₩28,500)'
        },
        {
            img:'	https://contents-image.twayair.com/contents/2020/0109/87398da1-d20d-4c08-924f-654e44b1d426.jpg',
            brand:'샤오미',
            name:'러판 저주파 미니 안마기',
            salePrice: '$27.00',
            price:'$19.00',
            exchage:'(₩24,500)'
        },
        {
            img:'	https://contents-image.twayair.com/contents/2020/0109/c604afe2-c590-4817-9396-e79eb8dacc42.jpg',
            brand:'샤오미',
            name:'삼각대 셀카봉',
            salePrice: '$24.00',
            price:'$17.00',
            exchage:'(₩22,000)'
        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0109/3f433fff-8623-4d3d-aefa-89fdc88d57e5.jpg',
            brand:'스와로브스키',
            name:'SWAN NECKLACE',
            salePrice: '$91.00',
            price:'$64.00',
            exchage:'(₩82,000)'
        },
        {
            img:'	https://contents-image.twayair.com/contents/2020/0109/6ae08a59-c18a-4013-a26c-61147858fca2.jpg',
            brand:'스와로브스키',
            name:'블랙스완 목걸이(스몰)',
            salePrice: '$99.00',
            price:'$69.00',
            exchage:'(₩88,500)'
        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0109/c859064a-36cc-45ac-bb40-da3b862dfa59.jpg',
            brand:'스와로브스키',
            name:'슬레이크 팔찌',
            salePrice: '$78.00',
            price:'$55.00',
            exchage:'(₩70,500)'
        },
        {
            img:'	https://contents-image.twayair.com/contents/2020/0109/0f3a4aaa-e4c0-4364-9d30-03f48face8fe.jpg',
            brand:'미사키',
            name:'사만타 세트(진주 귀걸이 증정)',
            salePrice: '$159.00',
            price:'$95.00',
            exchage:'(₩122,000)'
        },
        {
            img:'	https://contents-image.twayair.com/contents/2020/0109/52f9fc9a-7da6-4280-adb2-5893b0889a1e.jpg',
            brand:'미사키',
            name:'트리오2(진주 귀걸이 증정)',
            salePrice: '$99.00',
            price:'59.00',
            exchage:'(₩76,000)'
        },
        {
            img:'	https://contents-image.twayair.com/contents/2020/0109/30e95cdb-4f0e-4358-9e27-0f59d88b6a3e.jpg',
            brand:'버클리 런던',
            name:'러시안 스파클 세트',
            salePrice: '$125.00',
            price:'$75.00',
            exchage:'(₩96,000)'
        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0109/e7563752-4bb4-49e2-932d-f3a0d53d0ba9.jpg',
            brand:'버클리 런던',
            name:'XO팔찌 5종세트',
            salePrice: '$75.00',
            price:'$45.00',
            exchage:'(₩58,000)'
        },
        {
            img:'https://contents-image.twayair.com/contents/2020/0109/ca6eb735-09e1-4fd1-a6be-b5e30bedb7a9.jpg',
            brand:'람브레타',
            name:'시멜로 여성용 시계팔찌세트',
            salePrice: '$138.00',
            price:'$83.00',
            exchage:'(₩106,500)'
        },
        {
            img:'	https://contents-image.twayair.com/contents/2020/0120/7760a7e7-69a8-4155-8e5a-9a87ee8b7077.jpg',
            brand:'피카렐라',
            name:'튤립 블라썸 목걸이',
            salePrice: '$66.00',
            price:'$53.00',
            exchage:'(₩68,000)'
        }

    ]

    return(
       <div>  
           {itemLists.map(gift => (
               <ItemList  items={gift} key={gift.img}/>
           ))}
       </div>
       
    )
}

export default ItemGift;