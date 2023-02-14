import { Container } from "react-bootstrap";
import Card3 from "../atoms/card-3";

export function StaySharp() {
    return (
        <Container  className="mt-5 mb-3">
            <div className="mb-3">
                <h4 className="text-info text-center">Stay sharp get ahead with learning paths</h4>
            </div>
            <div className="d-flex flex-direction-row justify-content-around">
                <Card3 
                    card3title={"Welcome to Edtech"} 
                    card3description={"Build skills with courses, certificates, and degrees online from world-class universities."} 
                    card3logo={"../public/Group13.svg"} />
                <Card3 
                    card3title={"Learn latest skills"} 
                    card3description={"Apply what you learn with self-paced quizzes and hands-on projects."} 
                    card3logo={"../public/Group12.svg"} />
                <Card3 
                    card3title={"Ready for course?"} 
                    card3description={"Choose from many options including free courses and university degrees."} 
                    card3logo={"../public/Group11.svg"} />
            </div>
        </Container>
    )
}