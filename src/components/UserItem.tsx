import React from "react";
import "../components/UserList";

type User = {
  id: number;
  name: String;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipCode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
export default function UserItem({ getUser }: { getUser: User }) {
    console.log(getUser);
    return (
        <div>
          <div>
            <strong>Name:</strong>
            {getUser.name}
          </div>
          <div>
            <strong>UserName:</strong>
            {getUser.username}
          </div>
          <div>
            <strong>Phone.no</strong>
            {getUser.phone}
          </div>
          <div>
            <strong>Address:</strong>
            <li>
              <strong>Street:</strong>
              {getUser.address.street}
            </li>
            <li>
              <strong>City:</strong>
              {getUser.address.city}
            </li>
            <li>
              <strong>Suite:</strong>
              {getUser.address.suite}
            </li>
            <li>
              <strong>Zipcode:</strong>
              {getUser.address.zipCode}
            </li>
          </div>
        </div>
    );
  }


