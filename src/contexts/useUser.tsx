import React, { createContext, useState, useContext, FunctionComponent, ReactNode } from 'react';
import { IUserContext } from '../types';

const UserContext = createContext<IUserContext>({} as IUserContext);

const USERS = [
  {
     "id": 0,
		 "name": "Bill Gates",
     "bio": "Chairman of Microsof",
  },
  {
     "id": 1,
     "name": "Elon Musk",
     "bio": "CTO at Tesla"
  },
  {
     "id": 2,
     "name": "Jeff Bezos",
     "bio": "CEO at Amazon"
  }
];

const getRandomUser = () => {
  const randId = Math.floor(Math.random() * 3);
  return USERS.find(user => user.id === randId);
};

export const UserProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [user, ] = useState(getRandomUser());

  const values = {
    user
  };

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  );
};

export default function useUser() {
  return useContext(UserContext);
};
