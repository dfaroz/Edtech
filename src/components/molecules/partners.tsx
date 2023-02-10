import { Container, Image } from "react-bootstrap";

export function Partner() {
    return (
        <Container className="container-fluid bg-primary">
            <h6 className="text-info text-center align-center mt-3 mb-3"><small>Over 2,000 trusted partner around the world</small></h6>
            <div className="d-flex flex-row justify-content-around mb-3">
                <Image src="../../public/logo.png" className="img-fluid"/>
                <Image src="../../public/logo.png" className="img-fluid"/>
                <Image src="../../public/logo.png" className="img-fluid"/>
                <Image src="../../public/logo.png" className="img-fluid"/>
                <Image src="../../public/logo.png" className="img-fluid"/>
            </div>
        </Container>
    )
}