import React,{useEffect} from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import style from './index.module.css';

let isScrolling = false;
const wheelHandler = (e)=>{
  if(isScrolling){
    return;
  }
  const {deltaY} = e;
  const htmlTag = document.getElementsByTagName("html")[0];
  const {scrollTop} = htmlTag;
  const pageHeight = window.innerHeight;
  let page = 0;
  
  if(deltaY > 0){
    page = Math.floor(scrollTop/pageHeight)+1;
  }
  else if(deltaY < 0){
    page = Math.ceil(scrollTop/pageHeight)-1;
    if(page < 0){
      page = 0;
    }
  }

  isScrolling = true;
  htmlTag.scrollTo({
    top: page*pageHeight,
    left: 0,
    behavior: 'smooth'
  });
  setTimeout(()=>{
    isScrolling = false;
  },2000);
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
        <Page1 />
        <Page2 />
        <Page3 />
      </div>
    );
}

export default Main;