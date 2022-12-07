import React from 'react'
// import { Button } from 'react-bootstrap';
import {Container,Nav} from 'react-bootstrap'


function Header() {
    return (
        <div>
            <Container>
                <Nav
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="Menu">Menu</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="Survice">Survice</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="Blog">Blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="Contuct">Contuct</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </div>
        
    )
}

export default Header
