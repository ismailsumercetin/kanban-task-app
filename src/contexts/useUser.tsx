import React, { createContext, useState, useContext, FunctionComponent, ReactNode } from 'react';
import { IUser, IUserContext } from '../types';

const UserContext = createContext<IUserContext>({} as IUserContext);

const USERS = [
  {
     id: '0',
		 name: "Bill Gates",
     bio: "Chairman of Microsof",
     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bill_Gates_2017_%28cropped%29.jpg/220px-Bill_Gates_2017_%28cropped%29.jpg'
  },
  {
     id: '1',
     name: "Elon Musk",
     bio: "CTO at Tesla",
     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg'
  },
  {
     id: '2',
     name: "Jeff Bezos",
     bio: "CEO at Amazon",
     image: 'https://cdn.britannica.com/56/199056-050-CCC44482/Jeff-Bezos-2017.jpg'
  }
];

const getRandomUser = () => {
  const randId = Math.floor(Math.random() * 3);
  return USERS.find(user => user.id === `${randId}`);
};

export const UserProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [user, ] = useState(getRandomUser());

  const getUserById = (id: string) => USERS.find(user => user.id === id) as IUser;

  const values = {
    user,
    getUserById
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
