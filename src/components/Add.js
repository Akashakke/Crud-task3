import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Students from "./Students";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [book, setBook] = useState("");
  const [contact, setContact] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = uuid();
    let uniqueId = id.slice(0, 8);

    let a = name,
      b = date,
      c = book,
      d = contact;
    Students.push({ id: uniqueId, Name: a, Date: b, Book: c, Contact: d });
    history("/");
  };
  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDate">
          <Form.Control
            type="date"
            placeholder="Enter Date"
            required
            onChange={(e) => setDate(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBook">
          <Form.Control
            type="text"
            placeholder="Enter Book"
            required
            onChange={(e) => setBook(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formContact">
          <Form.Control
            type="number"
            placeholder="Enter Contact"
            required
            onChange={(e) => setContact(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
}
