import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import { Phone, Coffee } from 'lucide-react';
import { useEffect, useState } from 'react';


function JointheWaitlist() {
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [cafeName, setCafeName] = useState('');
  const [score, setScore] = useState('10');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [invalidName, setInvalidName] = useState(false);
  const joinWaitlist = (e) => {
    e.preventDefault();

    if (Number(score) <= 5 && comment.trim().length <= 10) {
      alert('Please provide a reason why the experience was poor.');
      return;
    }// name="Kunal Singh",submittedName=""
    setName('');//name="",submittedName=""
    //setSubmittedName(name);
    setPhoneNo('');
    setCafeName('');
    setScore('10');
    setComment('');
    setSubmitted(true);
  };

  useEffect(() => {
    setInvalidName(name.length < 5 || name.length > 15);
    console.log("name", name, "submittedName", submittedName);
    if (name.length > 0) {
      setSubmittedName(name);
    }
  }, [name])

  return (
    <>
      <Alert variant="success" className="mt-3">
        Thank you for joining the waitlist,{submittedName}!
      </Alert>
      <Form onSubmit={joinWaitlist}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="name">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              style={{ borderColor: invalidName ? 'red' : '' }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              placeholder="Enter name"
              minLength={5}
              maxLength={15}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="phonenumber">
            <Phone /> <Form.Label>Phone No</Form.Label>
            <Form.Control
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              type="tel"
              name="phoneNo"
              placeholder="Phone No"
              maxLength={10}
              pattern="[0-9]{10}"
              title="10 digits must be entered"
              required
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="cafename">
          <Coffee /> <Form.Label>Cafe Name</Form.Label>
          <Form.Control
            value={cafeName}
            onChange={(e) => setCafeName(e.target.value)}
            name="cafeName"
            placeholder="Cafe name"
            required
          />
        </Form.Group>

        <h2>Feedback form</h2>

        <div className="field">
          <label>Score: {score}</label>
          <input
            type="range"
            min="0"
            max="10"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>

        <hr />

        {score <= 5 && (
          <>
            <Alert variant="danger">
              Please provide a reason why the experience was poor.
            </Alert>
            <label>Comment:</label>
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} /></>
        )}

        <Button
          disabled={!name || !phoneNo || !cafeName}
          variant="success"
          type="submit"
        >
          Join the Waitlist
        </Button>


      </Form>
    </>
  );
}

export default JointheWaitlist;