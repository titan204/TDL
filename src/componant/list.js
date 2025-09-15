import { useRef } from "react"
import { useContext } from "react";
import { Lisst } from "../App";
import { useState } from "react";


export default function List() {
    const l = useContext(Lisst);
    const task_input = useRef(null)
    const [array, setarray] = useState(l)
    const task_butt = useRef(null)
    function del(index) {
        setarray(array.filter((_, i) => i !== index))
    }

    function add(elemant) {
        if(task_input.current.value){
            setarray([...array, elemant])
        }
    }


    document.addEventListener("keydown" , (e)=>{
        console.log(e)
        if (task_input.current.value && e.key== 
            "Enter"){
            task_butt.current.click();
        }
    })
    return (
        <div  className="main-container">
            <div className="input-par">
                <input ref={task_input} placeholder="input new task">
                </input>
                <button ref={task_butt} onClick={() => {
                    add(task_input.current.value)
                    task_input.current.value =""
                }}>+</button>
            </div>
            <div className="tasks">
                {
                    array.map((t, i) => (
                        <div className="task-box">
                            <div className="task" key={i} >{t}</div>
                            <button onClick={() => {
                                del(i)
                            }}>delete</button>
                        </div>
                    ))
                }
            </div>
        </div >

    )
}