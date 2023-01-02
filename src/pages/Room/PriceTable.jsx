import { useState , useEffect } from "react";

const PriceTable = () => {
    const [price, setPrice] = useState({});

    useEffect(() => {
        fetch("/price.json")
            .then((res) => res.json())
            .then((json) => {
                setPrice(json);
            });
    }, []);

    return (
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign:"center"}}>
            <thead>
                <tr>
                    <th style={{ padding: "10px" }}>시기</th>
                    <th style={{ padding: "10px" }}>주중</th>
                    <th style={{ padding: "10px" }}>금요일</th>
                    <th style={{ padding: "10px" }}>토요일</th>
                    <th style={{ padding: "10px" }}>일요일</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(price).map((key, index) => {
                    return (
                        <tr key={index}>
                            <th style={{padding: "10px" }}>{key}</th>
                            {price[key].map((m, index) => {
                                return <td key={index} style={{ padding: "10px" }}>{m}</td>
                            })}
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
    );
}

export default PriceTable;