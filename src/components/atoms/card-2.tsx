import React from "react"
import { Image } from "react-bootstrap"

const Card2: React.FC<{
    logo: string,
    title: string
}> = ({
    logo, title
}) => {
    return (
        <div className="card bg-primary card-outline-success text-info justify-content-center" style={{width: '15rem'}}>
            <Image src={logo} className="card-img-top " style={{width: '5rem'}}/>
            <div className="card-body">
                <h6 className="card-title mb-2"><small>{title}</small></h6>
            </div>
        </div>
    )
}

export default Card2