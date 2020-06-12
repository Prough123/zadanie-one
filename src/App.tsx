import React, {useState} from 'react';
import './App.css';
import MessageContent from "./components/messageContent/messageContent";
import GreetNewComer from "./components/GreetNewComer/GreetNewComer"
import {v1} from "uuid";


export type FilterValueType = "all" | "hight" | "low" | "middle";

type AddedNameType = {
        id: string,
        name: string,
    }


function App() {
    const Profile = [
        {
            name: "Илья Божок",
            text: "Yarn top!",
            date: "12:00",
            avatar: "https://sun9-20.userapi.com/c824201/v824201969/173425/UZNGRozhtic.jpg?ava=1"
        },
    ]

    let [work, setWorking] = useState([
        {id: 1, n: "работа", p: "hight"},
        {id: 2, n: "аниме", p: "low"},
        {id: 3, n: "игры", p: "middle"},
        {id: 4, n: "реакт", p: "hight"},
        {id: 5, n: "хтмл", p: "low"}
    ])

    let [name, setName] = useState<Array<AddedNameType>>([])

    let [filter, setFilter] = useState<FilterValueType>("all")

    function addName(titleName:string) {
        let nameCount = {id: v1(), name: titleName}
        setName([...name, nameCount])
        console.log(name.length)
    }

    const removeDoings = (id: number) => {
        let filteredWork = work.filter(t => t.id !== id);
        setWorking(filteredWork)
    }
    let workForMessageContent = work;
    const changeFilter = (value: FilterValueType) => {
        setFilter(value)
    }

    if (filter !== "all") {
        workForMessageContent = work.filter(work => work.p === filter)
    }

    return (
        <div className="App">
            <MessageContent
                content={Profile}
                myWorking={workForMessageContent}
                removeDoings={removeDoings}
                changeFilter={changeFilter}
            />

            <GreetNewComer arrayName={name} addName={addName}/>
        </div>
    );
}

export default App;
