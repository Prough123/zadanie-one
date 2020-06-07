import React from 'react'
import './messageContent.css'
import {FilterValueType} from "../../App";


type ContentProps = {
    name: string,
    text: string,
    date: string,
    avatar: string,
}

type myWorkingProps = {
    id: number,
    p: string,
    n: string,
}


type PropsType = {
    myWorking: Array<myWorkingProps>,
    content: Array<ContentProps>,
    removeDoings: (id: number) => void,
    changeFilter: (value: FilterValueType) => void
}


const MessageContent = (props: PropsType) => {


    let jsxMyWorking = props.myWorking.map((work) => {
        return (
            <li className='list-working' key={work.id}>
                <span>{work.n}</span>
                <button onClick={() => {
                    props.removeDoings(work.id)
                }}>remove
                </button>
            </li>
        )
    })


    return (
        <div className='wrapper'>
            <div className='avatar'><img width='40px' height='40px' src={props.content[0].avatar} alt=""/></div>
            <div className='box-content'>
                <div className='container'>
                    <div className='name'>{props.content[0].name}</div>
                    <ul className='list-working'>
                        {jsxMyWorking}
                    </ul>
                    <div className='date'>{props.content[0].date}</div>
                </div>
            </div>
            <div>
                <h1>Фильтры</h1>
                <div>
                    <button onClick={() => {props.changeFilter("all")}}>All</button>
                    <button onClick={() => {props.changeFilter( "hight")}}>Hight</button>
                    <button onClick={() => {props.changeFilter( "low")}}>Low</button>
                    <button onClick={() => {props.changeFilter( "middle")}}>Middle</button>
                </div>
            </div>
        </div>
    )
};


export default MessageContent;