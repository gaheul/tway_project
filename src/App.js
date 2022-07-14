import React, { useEffect, useState } from 'react';
import {Route,Link} from 'react-router-dom';
import './App.css';
import MainCom from './main';
import Dutyfree from './dutyfree/dutyfree';
import Event from './event/event';
import Community from './community/community';
import { FiUser,FiAlignRight} from "react-icons/fi";
import { HiSearch } from "react-icons/hi";
import Comunuties from './community/communities';

//yarn add react-router-dom@5
//아이콘 : yarn add react-icons
//yarn add styled-components
//yarn add react-slick
//yarn add slick-carousel

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(()=>{
      window.addEventListener('scroll', updateScroll);
  });

  return (
    <div>
    <div className={scrollPosition < 100 ? "original_header" : "change_header"}>
      <div className='header_in'>
        <div className='logo'><Link to='/'><img src={require('./images/logo-1.png')}></img></Link></div>
        <div className='nav'>
          <ul>
            <li><Link to='/' className='nav-list'>항공권예매</Link></li>
            <li><Link to='/'className='nav-list'>나의 예약</Link></li>
            <li><Link to='/'className='nav-list'>서비스 안내</Link></li>
            <li><Link to='/dutyfree/dutyfree'className='nav-list'>온라인면세점</Link></li>
            <li><Link to='/event/event'className='nav-list'>이벤트</Link></li>
            <li><Link to='/community/community'className='nav-list'>제휴</Link></li>
          </ul>
        </div>
        <div className='add_menu'>
          <ul className='add_menu_ko'>
            <li>
              <a href='#'>한국</a>
            </li>
            <li>
              <a href='#'>한국어</a>
            </li>
          </ul>
          <div className='util_menu'>
            <ul>
              <li><a><FiUser/></a></li>
              <li><a><HiSearch/></a></li>
              <li><a><FiAlignRight/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
   <div >
        <Route path="/" exact={true} component={MainCom}/>
        <Route path="/dutyfree/dutyfree" component={Dutyfree}/>
        <Route path="/event/event" component={Event}/>
        <Route path="/community/community" component={Community}/>
      </div>
    </div>

  );
}

export default App;
