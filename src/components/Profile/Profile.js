import React from "react";
import { useUser } from "context/user-context";
import { Address } from "../Address/Address";

export const Profile = () => {
  const { user } = useUser();
  return (
    <>
      <div className="w-75 flex-col flex-col-items-center mg-2">
        <h1> Profile Page </h1>
        <div className="mg-1">
          <div className="inputContainer bdr-thin bdr-rad-m bdr-grey pd-05">
            <b> Name </b>
            <p> {user.name} </p>
          </div>
          <div className="inputContainer bdr-thin bdr-rad-m bdr-grey pd-05">
            <b> Username </b>
            <p> {user.username} </p>
          </div>
        </div>
        <Address />
      </div>
    </>
  );
};
