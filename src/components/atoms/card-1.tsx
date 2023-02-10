import React from "react"
import { Image } from "react-bootstrap"

const Card1: React.FC<{
    title: string,
    description: string,
    logo: string
}> = ({
    title,
    description,
    logo
}) => {
    return (
        <div className="card bg-success text-white" style={{width: '15rem'}}>
            <Image src={logo} className="card-img-top  mt-1 ml-1" style={{width: '5rem'}}/>
            <div className="card-body">
                <h5 className="card-title mb-2">{title}</h5>
                <h6 className="card-text">{description}</h6>
            </div>
        </div>
    )
}

export default Card1