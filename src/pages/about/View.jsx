import React from 'react';
import view1 from '../../images/view1.jpg';
import view2 from '../../images/view2.jpg';
import view3 from '../../images/view3.jpg';
import AutoImgSlider from '../../components/AutoImgSlider';

const View =  ()=> {
    return (
      <div>
        <div>VIEW</div>
        <div>| 외부전경</div>
        <AutoImgSlider imgList={[view1,view2,view3]} isRelative={true}/>
      </div>
    );
}

export default View;