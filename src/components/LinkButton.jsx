import style from './LinkButton.module.css';

const LinkButton = ({text}) => {
    return (
        <div className={style.button}>
            {text}
        </div>
    );
};

export default LinkButton;