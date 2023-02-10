import { Container } from "react-bootstrap";
import { Banner } from "../components/molecules/banner";
import { FlexibleOptions } from "../components/molecules/flexible-options";
import { LearningPaths } from "../components/molecules/learning-paths";
import { Partner } from "../components/molecules/partners";
import { PopularSubjects } from "../components/molecules/popular-subjects";

export function Edtech() {
    return (
        <Container className="container-fluid">
            <Banner />
            <Partner />
            <FlexibleOptions />
            <PopularSubjects />
            <LearningPaths />
        </Container>
    )
}