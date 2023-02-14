import { Container } from "react-bootstrap";
import Card2 from "../atoms/card-2";
import Button from "../atoms/button";

export function PopularSubjects() {
    return (
        <Container>
            <div className="d-flex flex-direction-row justify-content-around mt-3 mb-3">
                <Button 
                    text="Health" 
                    onClick={function (): void {
                    throw new Error("Function not implemented.");
                    } }
                />
                <Button 
                    text="Digital Marketing" 
                    onClick={function (): void {
                    throw new Error("Function not implemented.");
                    } }
                />
                <Button 
                    text="Communication" 
                    onClick={function (): void {
                    throw new Error("Function not implemented.");
                    } }
                />
                <Button 
                    text="Illustration" 
                    onClick={function (): void {
                    throw new Error("Function not implemented.");
                    } }
                />
                <Button 
                    text="Animation" 
                    onClick={function (): void {
                    throw new Error("Function not implemented.");
                    } }
                />
                <Button 
                    text="See All" 
                    onClick={function (): void {
                    throw new Error("Function not implemented.");
                    } }
                />
            </div>
            <div>
                <h4 className="text-info text-center">Popular Subjects</h4>
            </div>
            <div className="d-flex flex-direction-row justify-content-between mt-3 mb-3">
                <Card2 
                    card2logo={"../public/Group17.svg"} 
                    card2title={"Mechanical Animation"} />
                <Card2 
                    card2logo={"../public/Group16.svg"} 
                    card2title={"Rotoscope Animation"} />
                <Card2 
                    card2logo={"../public/Group15.svg"} 
                    card2title={"3D Animation"} />
                <Card2 
                    card2logo={"../public/Group14.svg"} 
                    card2title={"Motion Capture"} />
            </div>
        </Container>
    )
}