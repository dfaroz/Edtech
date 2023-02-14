import React from "react"
import { Card } from "react-bootstrap"

const Card2: React.FC<{
    card2logo: string,
    card2title: string
}> = ({
    card2logo, card2title
}) => {
    return (
        <Card className="card bg-primary card-outline-success text-info justify-content-center" style={{width: '15rem'}}>
            <Card.Body>
                <Card.Img src={card2logo} className="card-img-top mb-3" style={{height: '5rem'}} />
                <Card.Title className="mb-3 text-center text-info">{card2title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Card2