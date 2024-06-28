"use client";

import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export interface InitialStateTypes {
  jobs: boolean;
  messages: boolean;
  payments: boolean;
}

export const InitialState: InitialStateTypes = {
  jobs: true,
  messages: false,
  payments: false,
};

interface NavbarContextProps {
  navbarItems: InitialStateTypes;
  setNavbarItems: Dispatch<SetStateAction<InitialStateTypes>>;
}

const NavbarContext = createContext<NavbarContextProps | undefined>(undefined);

export const NavbarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [navbarItems, setNavbarItems] =
    useState<InitialStateTypes>(InitialState);
  return (
    <NavbarContext.Provider value={{ navbarItems, setNavbarItems }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = (): NavbarContextProps => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbarContext must be used within a NavbarProvider");
  }

  return context;
};
