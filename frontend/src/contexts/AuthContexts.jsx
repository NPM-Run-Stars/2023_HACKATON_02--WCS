import { createContext, useContext, useState } from "react";
// import PropTypes from "prop-types";

const CurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);

export function CurrentUserProvider({ children }) {
  const [user, setUser] = useState("");
  return (
    <CurrentUserContext.Provider value={{ user, setUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
}

// CurrentUserProvider.propTypes = {
//     children: PropTypes.element.isRequired
// };
