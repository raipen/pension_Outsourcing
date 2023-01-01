import style from "./Title.module.css";
import BlurCircle from "./BlurCircle";

const Title = ({ title }) => {
    return (
        <div className={style.title}>
            {title}
            <BlurCircle top="-15vw" left="-15vw" color="#80E8FF" />
            <BlurCircle right="-15vw" bottom="-15vw" m_bottom="-15vw" color="#FFAEFC" />
        </div>
    );
}

export default Title;