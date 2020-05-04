import React from 'react';
import Card from 'react-bootstrap/Card'


export default function Experience() {
    return (
        <>
            <Card >
                <Card.Body>
                <Card.Title>Schedule Director</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">WTIU / PBS Television Station</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">September 2018 - Present</Card.Subtitle>
                <Card.Text>
                    <ul>
                    <li>Direct 2-minute news breaks and live news teases</li>
                    <li>Update weather pages, and top stories pages</li>
                    <li>Tag promos</li>
                    <li>Prepping and monitoring broadcast programs</li>
                    </ul>
                </Card.Text>
                </Card.Body>
             </Card>
            <Card >
            <Card.Body>
                <Card.Title>Producer's Intern / Assistant</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">WTIU / PBS Television Station</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">May 2018 - September 2018</Card.Subtitle>
                <Card.Text>
                    <ul>
                    <li>Provided script supervision on 5 PBS testimonial shoots to keep talent on-brand and prevent them misspeaking on air</li>
                    <li>Studio assisted promo shoots</li>
                    <li>Wrote promo scripts</li>
                    <li>Cut 20 and 30-second promos</li>
                    </ul>
                </Card.Text>
                </Card.Body>
            </Card>

        </>
    )
}