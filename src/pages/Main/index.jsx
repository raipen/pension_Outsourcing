import React,{useEffect} from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import style from './index.module.css';

let isScrolling = false;
let page = 0;
let maxPage = 3;
const wheelHandler = (e)=>{
  console.log("wheel");
  if(isScrolling){
    return;
  }
  const {deltaY} = e;
  const htmlTag = document.getElementsByTagName("html")[0];
  const {scrollTop} = htmlTag;
  const pageHeight = window.innerHeight;
  
  console.log(scrollTop);
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