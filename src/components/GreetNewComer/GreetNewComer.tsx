import React, {ChangeEvent, KeyboardEvent, useState} from 'react'


type addNameProps = {
    addName: (titleName: string) => void;
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

        }

    }


    return (
        <div>
            <h3></h3>
            <input
                type="text"
                value={name}
                onChange={HandlerInput}
                onKeyPress={HandlerOnKeyPress}/>
            <button onClick={HandlerHelloName}>Добавить</button>
        </div>
    )

}


export default GreetNewComer;