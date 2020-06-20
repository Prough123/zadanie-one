import React, { DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'

import s from './MyNewInput.module.css'

export type InputNyaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { onEnter?: () => void, error?: string | null} ;



const InputNya = (props:InputNyaPropsType) => {
    const {onEnter, error, ...restProps} = props;

    const HandlerOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            if (onEnter){
                onEnter()
            }
        }
    }



    return (
        <div className={s.wrapper}>
            <div className={s.div}>
                <input  onKeyPress={HandlerOnKeyPress}  className={s.inputnya}  {...restProps} type="text"/>
                {error && <span className={s.errorMessage}>{error}</span>}
            </div>
        </div>
    );
};
export default InputNya;