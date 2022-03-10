import { Link, LinkProps } from "@chakra-ui/react";

interface MenuLinkProps extends LinkProps {
  href: string;
  title: string;
}

export function MenuLink({ href, title, ...rest }: MenuLinkProps) {
  return (
    <Link
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
