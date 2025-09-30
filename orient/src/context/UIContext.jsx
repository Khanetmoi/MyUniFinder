import { createContext, useContext, useState } from 'react';

const UIContext = createContext();

export function UIProvider({ children }) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <UIContext.Provider value={{
      showLoginModal, setShowLoginModal,
      showSubscribeModal, setShowSubscribeModal,
      showSignupModal, setShowSignupModal
    }}>
      {children}
    </UIContext.Provider>
  );
}

export const useUI = () => useContext(UIContext);
