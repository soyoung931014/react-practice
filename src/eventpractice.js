import React from 'react'

function Hello() {
    function left() {
        console.log('Mike')
    }
  /*   function change(e){
        console.log(e.target.value)
    } */
    
    return (
        <div>
        <h1>hello everyone!</h1>
        <button onClick = {left}>left</button>
        <button onClick = {()=> console.log('오른쪽')}>right</button>
        <div>
        <input type ='text' /* onChange = {change} */ onChange ={(e) =>{
            console.log(e.target.value)
        }} />
        </div>
        </div>
    )
}
export default Hello;