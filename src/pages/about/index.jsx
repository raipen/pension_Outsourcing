import React from "react";
import ReactMarkdown from "react-markdown";

const Intro = () => {
    const [markdown, setMarkdown] = React.useState("");
    React.useEffect(() => {
        fetch("/intro.md")
        .then((res) => res.text())
        .then((text) => {
            setMarkdown(text);
        });
    }, []);
    return (
        <div>
            <ReactMarkdown children={markdown} />
        </div>
    );
}

export default Intro;