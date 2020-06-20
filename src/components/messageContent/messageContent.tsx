import React from 'react'
import ModuleCss from './messageContent.module.css'
import {FilterValueType} from "../../App";
import ButtonNya from "../MyNewButton/MyNewButton";


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
            <li className={ModuleCss.list_working} key={work.id}>
                <span>{work.n}</span>
                <button onClick={() => {
                    props.removeDoings(work.id)
                }}>remove
                </button>
            </li>
        )
    })


    return (
        <div className={ModuleCss.wrapper}>
            <div className={ModuleCss.avatar}><img width='40px' height='40px' src={props.content[0].avatar} alt=""/></div>
            <div className={ModuleCss.box_content}>
                <div className={ModuleCss.container}>
                    <div className={ModuleCss.name}>{props.content[0].name}</div>
                    <ul className={ModuleCss.list_working}>
                        {jsxMyWorking}
                    </ul>
                    <div className={ModuleCss.date}>{props.content[0].date}</div>
                </div>
            </div>
            <div>
                <h1>Фильтры</h1>
                <div>
                    <ButtonNya onClick={() => {props.changeFilter("all")}}>All</ButtonNya>
                    <ButtonNya onClick={() => {props.changeFilter( "hight")}}>Hight</ButtonNya>
                    <ButtonNya onClick={() => {props.changeFilter( "low")}}>Low</ButtonNya>
                    <ButtonNya onClick={() => {props.changeFilter( "middle")}}>Mid</ButtonNya>
                </div>
            </div>
        </div>
    )
};


export default MessageContent;