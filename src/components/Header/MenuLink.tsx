import { Link, LinkProps } from "@chakra-ui/react";
import { useMenuHeader } from "../../contexts/MenuHeaderContext";

interface MenuLinkProps extends LinkProps {
  href: string;
  title: string;
}

export function MenuLink({ href, title, ...rest }: MenuLinkProps) {
  const { onClose } = useMenuHeader();

  return (
    <Link
      onClick={onClose}
      mr="7"
      href={href}
      fontWeight="bold"
      _hover={{
        color: "blue.400",
        textDecoration: "none",
      }}
      {...rest}
    >
      {title}
    </Link>
  );
}
