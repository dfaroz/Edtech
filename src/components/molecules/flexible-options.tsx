import { Container } from "react-bootstrap";
import Card1 from "../atoms/card-1";

export function FlexibleOptions() {
    return (
        <Container className="mt-5 mb-3">
            <div className="mb-3">
                <h4 className="text-info text-center">Find flexible affordable options</h4>
            </div>
            <div className="d-flex flex-direction-row justify-content-around">
                <Card1 
                    card1title={"Get ready career"} 
                    card1description={"Choose from many options including free coursesand university degrees."} 
                    card1logo={"../public/Group20.svg"} />
                <Card1 
                    card1title={"Learn latest skills"} 
                    card1description={"University degrees at a breaktrough price. Learn at your own pace 100% online."} 
                    card1logo={"../public/Group19.svg"} />
                <Card1 
                    card1title={"Earn a degree"} 
                    card1description={"Apply what you leat with self-paced quizzes and hands-on projects."} 
                    card1logo={"../public/Group18.svg"} />
            </div>
        </Container>
    )
}