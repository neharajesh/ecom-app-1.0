export const AddressCard = ({ address }) => {
  return (
    <>
      <div>
        <div className="addressDetails">
          <b> Name </b>
          <p> {address.name} </p>
        </div>
        <div className="addressDetails">
          <b> Phone Number </b>
          <p> {address.phno} </p>
        </div>
        <div className="addressDetails">
          <b> Address </b>
          <p> {address.address} </p>
        </div>
        <div className="addressDetails">
          <b> Landmark </b>
          <p> {address.landmark} </p>
        </div>
        <div className="addressDetails">
          <b> Pincode </b>
          <p> {address.pincode} </p>
        </div>
        <div className="addressDetails">
          <b> City </b>
          <p> {address.city} </p>
        </div>
        <div className="addressDetails">
          <b> State </b>
          <p> {address.state} </p>
        </div>
        <div className="addressDetails">
          <b> Type </b>
          <p> {address.addressType} </p>
        </div>
      </div>
    </>
  );
};
