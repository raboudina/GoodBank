import React from 'react';
export const AllUsersContext = React.createContext({
    users: [
      {
        name: "Radwa",
        email: "radwa@mail.com",
        password: "secret",
        balance: 100,
      },
    ],
  });

  export const currentUserContext = React.createContext({
    name: "Radwa",
    email: "radwa.mail@gmail.com",
    password: "secret",
    balance: 100,
  });
