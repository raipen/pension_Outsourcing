import React from 'react';

export default ()=> {
    return (
      <div>
        <span>객실 소개</span>
        <table>
            <tr>
                <th>시기</th>
                <th>주중</th>
                <th>금요일</th>
                <th>토요일</th>
            </tr>
            <tr>
                <td>비수기</td>
                <td>270,000</td>
                <td>350,000</td>
                <td>500,000</td>
            </tr>
            <tr>
                <td>준성수기</td>
                <td>270,000</td>
                <td>350,000</td>
                <td>500,000</td>
            </tr>
            <tr>
                <td>성수기</td>
                <td>270,000</td>
                <td>350,000</td>
                <td>500,000</td>
            </tr>
        </table>
      </div>
    );
}
