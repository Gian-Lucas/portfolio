import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";

interface MenuHeaderProviderProps {
  children: ReactNode;
}

type MenuHeaderContextData = UseDisclosureReturn;

const MenuHeaderContext = createContext({} as MenuHeaderContextData);

export function MenuHeaderProvider({ children }: MenuHeaderProviderProps) {
  const disclosure = useDisclosure();

  return (
    <MenuHeaderContext.Provider value={disclosure}>
      {children}
    </MenuHeaderContext.Provider>
  );
}

export const useMenuHeader = () => useContext(MenuHeaderContext);
