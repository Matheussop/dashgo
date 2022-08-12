import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";


import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

import { RiMenuLine } from "react-icons/ri";
import { Logo } from "./Logo";

export function Header() {

  const isWideVersion = useBreakpointValue<boolean>({
    base: false,
    lg: true
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      {!isWideVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          variant="unstyled"
          onClick={() => {}}
          fontSize={24}
          mr={2}
          aria-label="Open navigation"
        />
      )}
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}