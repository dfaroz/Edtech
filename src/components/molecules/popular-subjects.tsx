import { Container, Button } from "react-bootstrap";
import Card2 from "../atoms/card-2";

export function PopularSubjects() {
    return (
        <Container>
            <div className="d-flex flex-direction-row justify-content-around mt-3 mb-3">
                    <Button className='btn-sm btn-outline-warning' href='' type='button'>
                        Health
                    </Button>
                    <Button className='btn-sm btn-info' href='' type='button'>
                        Illustration
                    </Button>
                    <Button className='btn-sm btn-outline-warning' href='' type='button'>
                        Communication
                    </Button>
                    <Button className='btn-sm btn-outline-warning' href='' type='button'>
                        Digital Marketing
                    </Button>
                    <Button className='btn-sm btn-outline-warning' href='' type='button'>
                        Animation
                    </Button>
            </div>
            <div>
                <h4 className="text-info text-center">Popular Subjects</h4>
            </div>
            <div className="d-flex flex-direction-row justify-content-between mt-3 mb-3">
                <Card2 logo={""} title={""} />
                <Card2 logo={""} title={""} />
                <Card2 logo={""} title={""} />
                <Card2 logo={""} title={""} />
            </div>
        </Container>
    )
}