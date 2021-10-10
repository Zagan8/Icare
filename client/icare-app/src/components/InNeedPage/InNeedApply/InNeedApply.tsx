import {useState} from "react"
import TextField from "@material-ui/core/TextField";
const InNeedApply: React.FC = () => {
    const [name,setName] = useState("");
    const [phone,setPhone] = useState(0);
    const [city,setCity] = useState("");
    const [street,setStreet] = useState();
    const [apartmentNumber,setApartmentNumber] = useState(0);
    const [zipCode,setZipCode] = useState(0);
    const [discription,setDiscription] = useState("");
  return (
    <div>
      <h1>One more step</h1>
      <TextField onChange={e => {setName(e.target.value)}} label="Full name" />
      <TextField onChange={e => {setPhone(e.target.value)}} label="Phone" />
      <TextField onChange={e => {setCity(e.target.value)}} label="City" />
      <TextField onChange={e => {setStreet(e.target.value)}} label="Street" />
      <TextField onChange={e => {setApartmentNumber(e.target.value)}} label="Apartment number" />
      <TextField onChange={e => {setZipCode(e.target.value)}} label="zip code" />
      <TextField
        style={{ width: "400px" }}
        id="filled-multiline-static"
        label="Discription"
        multiline
        rows={4}
        placeholder="Here you can tell the volunteers what you need and why"
        variant="filled"
      />
    </div>
  );
};

export default InNeedApply;
