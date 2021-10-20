const InNeedPopUp: React.FC<any> = ({ modalData }) => {
  return (
    <div>
      <h1>In need details</h1>
      <p>Name:{modalData.name}</p>
      <p>City:{modalData.city}</p>
      <p>Street:{modalData.street}</p>
      <p>streetNumber:{modalData.apartmentNumber}</p>
      <p>Phone:{modalData.phone}</p>
      <p>Zip code:{modalData.zipCode}</p>
      <p>Discription:{modalData.discription}</p>
    </div>
  );
};

export default InNeedPopUp;
