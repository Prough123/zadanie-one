import React from 'react'


type QualityProps = {
    arrQuality:Array<string>,
}

const MyQuality = (props:QualityProps) => {
    const elem = props.arrQuality.map((item:string,index) => item)

    return(
        <p> {elem} </p>
    )
}

export default MyQuality;