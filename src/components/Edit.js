import React, { useEffect, useState } from "react";
import { Form,Button } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Students from "./Students";

export default function Edit() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [book, setBook] = useState("");
  const [contact, setContact] = useState("");
  const [id, setId] = useState("");

  let history = useNavigate();

  var index = Students.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = Students[index];
    a.Name = name;
    a.Date = date;
    a.Book=book;
    a.Contact=contact;

    history("/");
  };

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setDate(localStorage.getItem("Date"));
    setBook(localStorage.getItem("Book"));
    setContact(localStorage.getItem("Contact"));
    setId(localStorage.getItem("Id"));
  }, []);
  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDate">
          <Form.Control
            type="date"
            placeholder="Enter Date"
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBook">
          <Form.Control
            type="text"
            placeholder="Enter Book"
            value={book}
            required
            onChange={(e) => setBook(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formContact">
          <Form.Control
            type="number"
            placeholder="Enter Contact"
            value={contact}
            required
            onChange={(e) => setContact(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}
