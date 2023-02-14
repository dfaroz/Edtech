import React from "react"
import { Card } from "react-bootstrap"

const Card1: React.FC<{
    card1title: string,
    card1description: string,
    card1logo: string
}> = ({
    card1title,
    card1description,
    card1logo
}) => {
    return (
        <Card className="card bg-success text-white" style={{width: '15rem'}}>
            <Card.Body>
                <Card.Img src={card1logo} className="card-img-top  mb-3 bg-white" style={{width: '5rem'}} />
                <Card.Title className="card-title mb-2">{card1title}</Card.Title>
                <Card.Text className="card-text"><small>{card1description}</small></Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Card1