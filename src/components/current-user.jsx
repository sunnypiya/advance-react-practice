import React, { useState } from "react";
//container component pattern
const CurrentUser = ({ children }) => {
  const [user, setUser] = useState({ id: 1, name: "Shyam" });

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user, setUser });
        }
        return child;
      })}
    </>
  );
};

export default CurrentUser;
