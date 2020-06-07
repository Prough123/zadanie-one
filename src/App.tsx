import React, {useState} from 'react';
import './App.css';
import MessageContent from "./components/messageContent/messageContent";



export type FilterValueType = "all" | "hight" | "low" | "middle";

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

    let [filter, setFilter] = useState<FilterValueType>("all")


    const removeDoings = (id: number) => {
        let filteredWork = work.filter(t => t.id !== id);
        setWorking(filteredWork)
    }
    let workForMessageContent = work;
    const changeFilter = (value: FilterValueType) => {
    setFilter(value)

    }


    //
    if (filter !== "all") {
        workForMessageContent = work.filter(work => work.p === filter)
    }
    // if (filter === "middle") {
    //     workForMessageContent = work.filter(work => work.p === "middle")
    // }
    // if (filter === "hight") {
    //     workForMessageContent = work.filter(work => work.p === "hight")
    // }

    return (
        <div className="App">
            <MessageContent
                content={Profile}
                myWorking={workForMessageContent}
                removeDoings={removeDoings}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
