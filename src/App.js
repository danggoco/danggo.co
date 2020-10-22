import React from "react";
import "./App.css";

import Navigationbar from "./components/Navigationbar";

import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Breadcrumb, Button, Card, Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navigationbar></Navigationbar>
      <Container>
        <Card className="mb-3">
          <Card.Img />
          <Card.Body>
            <Card.Title>Card Example</Card.Title>
            <Card.Text>This is an example of react bootstrap cards</Card.Text>
            <Button variant="primary">Read more</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Test 1</Breadcrumb.Item>
          <Breadcrumb.Item>Test 2</Breadcrumb.Item>
          <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="success">This is a button</Alert>
        <Button>Test Button</Button>
      </Container>
    </div>
  );
}

export default App;
