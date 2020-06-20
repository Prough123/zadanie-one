import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import ButtonNya from "../MyNewButton/MyNewButton";


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
        if (name !== "") {
            alert(`${name} привет`)
            props.addName(name)
            setName('')
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
            <ButtonNya onClick={HandlerHelloName}></ButtonNya>
            <span>Количество имён {props.arrayName.length}</span>
        </div>
    )

}


export default GreetNewComer;