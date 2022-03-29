import { Icon, Link as ChakraLink } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface LinkProps {
  href: string;
  icon: IconType;
}

export function Link({ href, icon }: LinkProps) {
  return (
    <ChakraLink href={href} isExternal>
      <Icon
        boxSize="10"
        transition="0.5s"
        _hover={{
          transform: "scale(1.3) rotate(360deg)",
        }}
        as={icon}
      />
    </ChakraLink>
  );
}
