import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'

import s from './MyNewButton.module.css'

export type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;


const ButtonNya = (props:ButtonNyaPropsType) => <button className={s.buttonnya} {...props}/>


export default ButtonNya;