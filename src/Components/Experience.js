import Certificates from "./Certificates"

export default function Experience() {
    return (
    <div className="experience-container">
        <Certificates />
        <div className="job-container">
            <ul>Freelance Developer
                <li>Building websites from scratch, using semantic elements and "mobile first" approach. Planning their structure and design</li>
                <li>Creating react components, dumb components and using hooks</li>
                <li>Troubleshooting problems with JavaScript logic and refining perfect styles</li>
                <li>Writing unit tests (JEST)</li>
                <li>Creating animations using css animations and keyframes</li>
                <li>Configuring VPS servers and dockerized apps with Docker-Compose</li>
                <li>Working closely with clients to understand their project requirements and deliver solutions that meet their business goals.</li>
                <li>Providing ongoing maintenance and support for existing websites, addressing issues and implementing updates as needed.</li>
            </ul>
            <ul>EI Software Developer
                <li>Developing custom integration solutions.</li>
                <li>Implementing data transformation, validation, and enrichment processes within integration flows.</li>
                <li>Writing and optimizing code using Java, Apache Camel, XML, RESTful and SOAP APIs.</li>
                <li>Creating data mapping specifications and transformation logic to align data formats between systems.</li>
                <li>Utilizing data transformation tools and libraries to handle data in various formats (XML, JSON, CSV, etc.).</li>
                <li>Unit testing and integration testing to validate the functionality of integration solutions.</li>
                <li>Resolving defects and performance bottlenecks in integration flows.</li>
                <li>Collaborating with QA teams to ensure end-to-end testing and validation.</li>
                <li>Working closely with cross-functional teams, including business analysts, system administrators, and project managers.</li>
                <li>Communicating technical concepts to non-technical stakeholders effectively.</li>
                <li>Ensuring compliance with industry best practices and standards for enterprise integration.</li>
            </ul>
        </div>
    </div>
    )
}