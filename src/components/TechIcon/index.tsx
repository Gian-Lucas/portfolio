import { Box, Icon, Tooltip, useDisclosure } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface TechIconProps {
  label: string;
  icon: IconType;
}

export function TechIcon({ icon, label }: TechIconProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Tooltip label={label} fontSize="lg" isOpen={isOpen}>
      <Box>
        <Icon
          onClick={() => {
            onOpen();
            setTimeout(onClose, 2500);
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
