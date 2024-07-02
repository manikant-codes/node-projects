import { Button } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function VerifyEmail() {
  const navigate = useNavigate();

  function goToHome() {
    navigate("/");
  }

  return (
    <div>
      <div>
        <h1>Verifying Email</h1>
        <Button onClick={goToHome}>Go to Home</Button>
      </div>
    </div>
  );
}

export default VerifyEmail;
