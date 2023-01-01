import style from "./SubTitle.module.css";

const SubTitle = ({ subTitle, description, margin }) => {
    //margin에 left, right, top, bottom이 있는 경우에만 적용
    const marginStyle = {};
    if (margin) {
        if (margin.left)
            style.marginLeft = margin.left;
        if (margin.right)
            style.marginRight = margin.right;
        if (margin.top)
            style.marginTop = margin.top;
        if (margin.bottom)
            style.marginBottom = margin.bottom;
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