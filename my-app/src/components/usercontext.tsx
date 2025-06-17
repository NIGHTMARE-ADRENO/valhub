import { createContext, useContext, useState, type ReactNode } from 'react';

// 1. Define what a user looks like
type User = {
  id: string;
  name: string;
  email: string;
};

// 2. Define what the context will provide
type UserContextType = {
  user: User | null; // user info (null means logged out)
  setUser: (user: User | null) => void;
  showreeldiv:boolean;
  setshowreeldiv:(showreeldiv:boolean)=>void; // function to update user
};

// 3. Create the context with an undefined default
const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
};


export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [showreeldiv, setshowreeldiv] = useState<boolean>(false); // initial user is null (not logged in)

  return (
    <UserContext.Provider value={{
      user,
      setUser,
      showreeldiv,
      setshowreeldiv
    }}>
      {children}
    </UserContext.Provider>
  );
};

// 5. A helper function to use the user context in any component
export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used inside a UserProvider");
  }

  return context; // returns { user, setUser }
};
