import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import {Simulate} from "react-dom/test-utils";



type addNameProps = {
    addName: (titleName: string) => void;
    arrayName:Array<object>;
}

function GreetNewComer(props: addNameProps) {
    let [name, setName] = useState<string>("")

    const HandlerInput = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }


    const HandlerHelloName = () => {
        if (name) {
            alert(`${name} привет`)
            props.addName(name)
            setName('')
        } else {
            alert('Пустота')
        }
    }

    const HandlerOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.addName(name)
            setName('')
        }
    }


    return (
        <div>
            <h3>Задание 3</h3>
            <input
                type="text"
                value={name}
                onChange={HandlerInput}
                onKeyPress={HandlerOnKeyPress}/>
            <button onClick={HandlerHelloName}>Добавить</button>
            <span>Количество имён {props.arrayName.length}</span>
        </div>
    )

}


export default GreetNewComer;