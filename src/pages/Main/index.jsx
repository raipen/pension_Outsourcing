import React,{useEffect} from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import style from './index.module.css';
import BlurCircle from '../../components/BlurCircle';

let isScrolling = false;
let page = 0;
let maxPage = 3;
const wheelHandler = (e)=>{
  if(isScrolling){
    return;
  }
  const {deltaY} = e;
  const htmlTag = document.getElementsByTagName("html")[0];
  const pageHeight = document.querySelectorAll("."+style.main+">div")[4].clientHeight;
  
  if(deltaY > 0){
    if(page === maxPage)
      return;
    page++;
  }
  else if(deltaY < 0){
    if(page === 0)
      return;
    page--;
  }

  isScrolling = true;
  htmlTag.scrollTo({
    top: page*pageHeight,
    left: 0,
    behavior: 'smooth'
  });
  setTimeout(()=>{
    isScrolling = false;
  },1000);
};

const preventScroll = (e)=>{
  e.preventDefault();
};

const Main = ()=> {
    useEffect(()=>{
      window.addEventListener('wheel', preventScroll, {passive: false});  
      window.addEventListener('wheel', wheelHandler);

        return ()=>{
          window.removeEventListener('wheel', preventScroll);
          window.removeEventListener('wheel', wheelHandler);
        };
    },[]);

    return (
      <div className={style.main}>
        <BlurCircle top="calc(100vh + 10vw)" left="-15vw" m_top="calc(60vw + 290px)" color="#80E8FF" />
        <BlurCircle right="-15vw" top="calc(200vh - 15vw)" m_top="calc(85vw + 580px)" color="#FFAEFC" />
        <BlurCircle left="30vw" top="calc(300vh - 15vw)" m_top="calc(135vw + 870px)" color="#C4CFFF" />
        <Page1 />
        <Page2 />
        <Page3 />
      </div>
    );
}

export default Main;