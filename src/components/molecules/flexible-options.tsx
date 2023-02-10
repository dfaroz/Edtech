import { Container } from "react-bootstrap";
import Card1 from "../atoms/card-1";

export function FlexibleOptions() {
    return (
        <Container style={{
            backgroundImage: 'url(../public/Group-1.svg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%'
        }} className="mt-5 mb-3">
            <div>
                <h4 className="text-info text-center">Find flexible</h4>
                <h4 className="text-info text-center">affordable options</h4>
            </div>
            <div className="d-flex flex-direction-row justify-content-around">
                <Card1 title={""} description={""} logo={""} />
                <Card1 title={""} description={""} logo={""} />
                <Card1 title={""} description={""} logo={""} />
            </div>
        </Container>
    )
}