import React from 'react'
import {useState} from 'react'

function Hi() {
    //let name = 'Mike' // state가 아닌 단순히 변수
    const [name, setName] = useState("Mike"); // useState는 배열을 반환한다.
    // 배열의 첫번쨰 값은 state(변수명이라 생각) 두번째는 state를 변경해주는 함수
    // setName 함수가 호출되어서 name이 바뀌면 리액트는 Hi컴포넌트를 다시 렌더링해준다
    // 그리고 useState()괄호 안에는 초기값을 넣어준다.

    function changeName() {
        const newName = name === "Mike" ? "Jane" : "Mike"
        console.log(name)
        //돔으로 마이크를 제인으로 바꿔보자
       // document.querySelector(".name").textContent = name;
       setName(newName)
    }

    return(
        <div>
            <h1>state</h1>
            <h2 className ="name">{name}</h2>
            <button onClick = {changeName}>Change</button>
        </div>

    )
}export default Hi