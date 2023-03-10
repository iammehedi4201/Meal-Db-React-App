import React from "react";
import Alert from "react-bootstrap/Alert";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-message">
      <Alert variant="danger">
        <Alert.Heading className="text-center">Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    </div>
  );
};

export default Error;
