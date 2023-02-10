import { Container, Image, Button } from "react-bootstrap"

export function Banner() {
    return (
        <Container className="container-fluid bg-secondary d-flex flex-row justify-content-between mt-5" >
            <div className="mb-3 mt-3">
                <h6 className="text-warning"><small>World class education</small></h6>
                <h4 className="text-info">Give your</h4>
                <h4 className="text-info">team learning</h4>
                <h4 className="text-info">experience
                    <Image src="../../public/arrow.svg" className="float-end"/>
                </h4>
                <h6 className="text-warning"><small>Listen to audio lessons from 200+ of the worlds</small></h6>
                <h6 className="text-warning"><small>leading thinkers and experts.</small></h6>
                <div className="d-flex flex-row justify-content-between">
                    <Button className='btn-sm btn-info' href='' type='button'>
                        Get started
                    </Button>
                    <Button className='btn-sm btn-outline-warning' href='' type='button'>
                        Learn more
                    </Button>
                </div>
            </div>
            <div>
                <Image src="../../public/group.png" className="img-fluid"/>
            </div>
        </Container>
    )
}