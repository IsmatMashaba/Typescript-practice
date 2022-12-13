import React from "react";
import UserItem from "./UserItem";


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
  export default function UserList({userListProp}: { userListProp: User[] }) {

    return (
          <div>
            {userListProp.map((item, index) => (
                <div key={index}>
                  <UserItem getUser={item}/>
                </div>
            ))}
          </div>
    );
  }
