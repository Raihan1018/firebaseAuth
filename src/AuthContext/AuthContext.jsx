const { createContext, useContext, useState } = require("react");

const AuthContext = createContext();
export const useAuth = useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser };
  return;
  <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
