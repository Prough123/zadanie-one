import React from 'react';
import './App.css';
import MessageContent from "./components/messageContent/messageContent";

function App() {

    const Profile = [
        {name: "Илья Божок", text:"Yarn top!", date:"12:00", avatar:"https://sun9-20.userapi.com/c824201/v824201969/173425/UZNGRozhtic.jpg?ava=1"},
    ]

    const Director = [
        {name: "Сегрей Сипов", text:"БелГисс", date:"14:88", avatar:"https://sun1.beltelecom-by-minsk.userapi.com/OWvWE8LDS56yDyXJRaEBcqwyF_JNFmaT5Wre2w/P7opltbcJRc.jpg"},
    ]



    return (
        <div className="App">
            <MessageContent content={Profile}/>
            <MessageContent content={Director}/>
        </div>
    );
}

export default App;
