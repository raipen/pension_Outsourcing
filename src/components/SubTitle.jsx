import style from "./SubTitle.module.css";

const SubTitle = ({ subTitle, description, margin }) => {
    //margin에 left, right, top, bottom이 있는 경우에만 적용
    const marginStyle = {};
    console.log(margin);
    if (margin) {
        if (margin.left)
            marginStyle.marginLeft = margin.left;
        if (margin.right)
            marginStyle.marginRight = margin.right;
        if (margin.top)
            marginStyle.marginTop = margin.top;
        if (margin.bottom)
            marginStyle.marginBottom = margin.bottom;
    }

    return (
        <div className={style.container} style={marginStyle}>
            <div className={style.subTitle}>
                {subTitle}
            </div>
            <div className={style.description}>
                {description}
            </div>
        </div>
    );
}

export default SubTitle;