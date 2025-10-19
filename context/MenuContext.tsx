// Context for relaying information about the Dropdown open/close state

"use client";
import {createContext, useContext, useState} from "react";

interface MenuContextType {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({children}: {children: React.ReactNode}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <MenuContext.Provider value={{menuOpen, setMenuOpen}}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useMenu must be within a MenuProvider");
  return context;
};