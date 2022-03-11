import { IconButton, Link } from "@chakra-ui/react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export function ButtonToTop() {
  return (
    <Link href="#header" position="fixed" bottom="2" right="2">
      <IconButton
        opacity="0.8"
        borderRadius="xl"
        size="lg"
        transition="0.3s"
        _hover={{
          transform: "scale(1.1) rotate(360deg)",
        }}
        aria-label="Back to top"
        icon={<BsFillArrowUpCircleFill />}
      />
    </Link>
  );
}
