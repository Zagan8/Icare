import { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
const InNeedApply: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [apartmentNumber, setApartmentNumber] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [discription, setDiscription] = useState("");

  const applyObj = {
    name: name,
    phone: phone,
    adress: {
      city: city,
      street: street,
      apartmentNumber: apartmentNumber,
      zipCode: zipCode,
    },
    discription: discription,
  };

  function onApply(applyObj: {}) {
    console.log(applyObj);
    axios
      .post(
        "http://localhost:3001/wishes",
        {
          name: name,
          phone: phone,
          city: city,
          street: street,
          apartmentNumber: apartmentNumber,
          zipCode: zipCode,
          discription: discription,
        },
        {
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM0NDg2MjY1LCJleHAiOjE2MzcwNzgyNjV9.hwBLn834Q9TlFhjrxtA46boZLCWrq3qcRrdGUmq5VsA",
          },
        }
      )
      .then((res) => console.log(res));
  }
  return (
    <div>
      <h1>One more step</h1>
      <TextField
        onChange={(e) => {
          setName(e.target.value);
        }}
        label="Full name"
      />
      <br />
      <TextField
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        label="Phone"
      />
      <br />
      <TextField
        onChange={(e) => {
          setCity(e.target.value);
        }}
        label="City"
      />
      <br />
      <TextField
        onChange={(e) => {
          setStreet(e.target.value);
        }}
        label="Street"
      />
      <br />
      <TextField
        onChange={(e) => {
          setApartmentNumber(e.target.value);
        }}
        label="Apartment number"
      />
      <br />
      <TextField
        onChange={(e) => {
          setZipCode(e.target.value);
        }}
        label="zip code"
      />
      <br />
      <br />
      <TextField
        onChange={(e) => {
          setDiscription(e.target.value);
        }}
        style={{ width: "400px" }}
        id="filled-multiline-static"
        label="Discription"
        multiline
        rows={4}
        placeholder="Here you can tell the volunteers what you need and why"
        variant="filled"
      />
      <br />
      <br />
      <Button
        onClick={() => onApply(applyObj)}
        variant="contained"
        color="primary"
      >
        {" "}
        Apply{" "}
      </Button>
    </div>
  );
};

export default InNeedApply;
