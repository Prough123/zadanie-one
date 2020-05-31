import React from 'react'
import './messageContent.css'
import MyQuality from "../myQualities/myQualities";


const Quality = ['html/pug ', 'css/scss ', 'bs4 ', 'бэм ', 'gulp ', 'html/pug ', 'css/scss ', 'bs4 ', 'бэм ', 'gulp ']

type ContentProps = {
    name: string,
    text: string,
    date: string,
    avatar: string,
}

type PropsType = {
    content: Array<ContentProps>
}
const MessageContent = (props: PropsType) => {
    return (
        <div className='wrapper'>
            <div className='avatar'><img width='40px' height='40px' src={props.content[0].avatar} alt=""/></div>
            <div className='box-content'>
                <div className='container'>
                    <div className='name'>{props.content[0].name}</div>
                    <MyQuality arrQuality={Quality}/>
                    <div className='date'>{props.content[0].date}</div>
                </div>
            </div>
        </div>
    )
};


export default MessageContent;