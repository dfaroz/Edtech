import React from "react"
import { Card } from "react-bootstrap"

const Card3: React.FC<{
    card3logo: string,
    card3title: string,
    card3description: string
}> = ({
    card3logo, card3title, card3description
}) => {
    return (
        <Card className="card bg-white card-outline-white text-info justify-content-center" style={{width: '15rem'}}>
            <Card.Body>
                <Card.Img src={card3logo} className="card-img-top mb-3" style={{height: '5rem'}} />
                <Card.Title className="mb-3 text-center text-info">{card3title}</Card.Title>
                <Card.Text className="mb-3 text-center text-warning"><small>{card3description}</small></Card.Text>
                <Card.Img src="../public/Vector3.svg" style={{height: '3rem'}}/>
            </Card.Body>
        </Card>
    )
}

export default Card3