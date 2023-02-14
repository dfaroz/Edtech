import { Container, Image } from "react-bootstrap"
import TextButton from "../atoms/text-button"

export function Footer() {
    return (
        <Container className="mb-5 d-flex flex-direction-row justify-content-around bg-primary">
            <div className="mt-3">
                <div className="d-flex flex-row mb-3">
                    <h4>Edtech</h4>
                    <h4 className='text-danger'>.</h4>
                </div>
                <div className="d-flex flex-row mb-3">
                    <div>
                        <Image src="" alt=""/>
                    </div>
                    <div className="btn-group-vertical btn-group-sm">
                        <h6 className="text-info">Contact us</h6>
                        <TextButton 
                            text={"email@domain.com"} 
                            onClick={function (): void {throw new Error("Function not implemented.")} } 
                        />
                        <TextButton 
                            text={"phone number"} 
                            onClick={function (): void {throw new Error("Function not implemented.")} } 
                        />
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div>
                        <Image src="" alt=""/>
                    </div>
                    <div className="btn-group-vertical btn-group-sm">
                        <h6 className="text-info">Location</h6>
                        <TextButton 
                            text={"Kota, Negara"} 
                            onClick={function (): void {throw new Error("Function not implemented.")} } 
                        />
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <div className="mb-3">
                    <h6 className="text-info text-center">Company</h6>
                </div>
                <div className="btn-group-vertical btn-group-sm">
                    <TextButton 
                        text={"Projects"} 
                        onClick={function (): void {throw new Error("Function not implemented.")} } 
                    />
                    <TextButton 
                        text={"Careers"} 
                        onClick={function (): void {throw new Error("Function not implemented.")} } 
                    />
                    <TextButton 
                        text={"Blog"} 
                        onClick={function (): void {throw new Error("Function not implemented.")} } 
                    />
                    <TextButton 
                        text={"About us"} 
                        onClick={function (): void {throw new Error("Function not implemented.")} } 
                    />
                    <TextButton 
                        text={"Pricing"} 
                        onClick={function (): void {throw new Error("Function not implemented.")} } 
                    />
                    <TextButton 
                        text={"Partners"} 
                        onClick={function (): void {throw new Error("Function not implemented.")} } 
                    />
                </div>
            </div>
            <div className="mt-3">
                <div className="mb-3">
                    <h6 className="text-info text-center">Service</h6>
                </div>
                <div className="btn-group-vertical btn-group-sm">
                    <TextButton 
                        text={"Products"} 
                        onClick={function (): void {throw new Error("Function not implemented.")} } 
                    />
                    <TextButton 
                        text={"Visual Design"} 
                        onClick={function (): void {throw new Error("Function not implemented.")} } 
                    />
                    <TextButton 
                        text={"Web Development"} 
                        onClick={function (): void {throw new Error("Function not implemented.")} } 
                    />
                    <TextButton 
                        text={"User Testing"} 
                        onClick={function (): void {throw new Error("Function not implemented.")} } 
                    />
                    <TextButton 
                        text={"Quality Assurance"} 
                        onClick={function (): void {throw new Error("Function not implemented.")} } 
                    />
                    <TextButton 
                        text={"Mvp Development"} 
                        onClick={function (): void {throw new Error("Function not implemented.")} } 
                    />
                    <TextButton 
                        text={"Cloud Application"} 
                        onClick={function (): void {throw new Error("Function not implemented.")} } 
                    />
                    <TextButton 
                        text={"All Service"} 
                        onClick={function (): void {throw new Error("Function not implemented.")} } 
                    />
                </div>
            </div>
            <div className="mt-3">
                <div className="mb-3">
                    <h6 className="text-info text-center">Workflow</h6>
                </div>
                <div className="btn-group-vertical btn-group-sm">
                    <TextButton 
                        text={"Startup"} 
                        onClick={function (): void {throw new Error("Function not implemented.")} } 
                    />
                    <TextButton 
                        text={"Scalling"} 
                        onClick={function (): void {throw new Error("Function not implemented.")} } 
                    />
                    <TextButton 
                        text={"Transformation"} 
                        onClick={function (): void {throw new Error("Function not implemented.")} } 
                    />                </div>
            </div>
            <div className="mt-3">
                <div className="mb-3">
                    <h6 className="text-info text-center">Technology</h6>
                </div>
                <div className="btn-group-vertical btn-group-sm">
                    <TextButton 
                        text={"React"} 
                        onClick={function (): void {throw new Error("Function not implemented.")} } 
                    />
                    <TextButton 
                        text={"Node"} 
                        onClick={function (): void {throw new Error("Function not implemented.")} } 
                    />
                    <TextButton 
                        text={"Angular"} 
                        onClick={function (): void {throw new Error("Function not implemented.")} } 
                    />
                </div>
            </div>
        </Container>
    )
}