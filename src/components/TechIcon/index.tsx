import {
  Box,
  Icon,
  Tooltip,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

interface TechIconProps {
  label: string;
  icon: IconType;
}

export function TechIcon({ icon, label }: TechIconProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  if (!isMobile) {
    return (
      <Tooltip label={label} fontSize="lg">
        <Box>
          <Icon
            as={icon}
            boxSize={["20", "24"]}
            transition="0.3s"
            _hover={{
              transform: "scale(1.1)",
            }}
          />
        </Box>
      </Tooltip>
    );
  }

  return (
    <Tooltip label={label} fontSize="lg" isOpen={isOpen}>
      <Box>
        <Icon
          onClick={() => {
            onOpen();
            setTimeout(onClose, 2000);
          }}
          as={icon}
          boxSize={["20", "24"]}
          transition="0.3s"
          _hover={{
            transform: "scale(1.2)",
          }}
        />
      </Box>
    </Tooltip>
  );
}
