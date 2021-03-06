import React, {ChangeEvent, useState} from 'react';
import './App.css';
import MessageContent from "./components/messageContent/messageContent";
import GreetNewComer from "./components/GreetNewComer/GreetNewComer"
import {v1} from "uuid";
import InputNya from "./components/MyNewInput/MyNewInput";
import ButtonNya from "./components/MyNewButton/MyNewButton";
import {HashRouter, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";


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

    let [names, setNames] = useState<Array<AddedNameType>>([])

    let [name, setName] = useState<string>("")

    let [filter, setFilter] = useState<FilterValueType>("all")

    let [error, setError] = useState<string | null>(null)

    function addName(titleName: string) {
        if (titleName.trim() !== "") {
            let nameCount = {id: v1(), name: titleName}
            setNames([...names, nameCount])
            setName("")
        } else {
            setError('Title is required')
        }
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

    const OnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        setError('')
    }


    return (
        <HashRouter>
            <div className="App">
                <header className='header'>
                    <span>Statuses</span>
                    <NavBar/>
                </header>
                <div className="content">
                    <Route path="/prejunior" render={() => <GreetNewComer arrayName={names}
                                                                addName={addName}/>}/>
                    <Route path="/prejunior" render={() => <InputNya error={error}
                                                           value={name}
                                                           onChange={OnChange}
                                                           onEnter={() => addName(name)}/>}/>
                    <Route path="/prejunior" render={() => <MessageContent content={Profile}
                                                                 myWorking={workForMessageContent}
                                                                 removeDoings={removeDoings}
                                                                 changeFilter={changeFilter}/>}/>


                    <Route  path="/prejunior"render={()=> <ButtonNya/>}/>
                </div>

            </div>
        </HashRouter>
    );
}

export default App;
