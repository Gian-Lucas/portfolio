import {
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useColorMode,
} from "@chakra-ui/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

export function ModalImage({ isOpen, onClose, title, url }: ModalProps) {
  const { colorMode } = useColorMode();
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        autoFocus={false}
        size="5xl"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton
            bg={colorMode === "light" ? "gray.300" : "gray.800"}
            _hover={{
              bg: `${colorMode === "light" ? "gray.200" : "gray.900"}`,
            }}
          />
          <Image src={url} alt={title} />
        </ModalContent>
      </Modal>
    </>
  );
}
