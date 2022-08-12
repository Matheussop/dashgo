import {
  Avatar,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  useToast
} from "@chakra-ui/react";


interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {

  const toast = useToast();

  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Matheus</Text>
          <Text color="gray.300" fontSize="small">
            matheus@gmail.com
          </Text>
        </Box>
      )}

      <Menu>
        <MenuButton>
          <Avatar size="md" name='mathues' />
        </MenuButton>
        <MenuList bg="gray.800" borderColor="transparent" boxShadow="lg">
          <MenuGroup>
            <Text
              color="gray.400"
              textTransform="uppercase"
              fontSize="13px"
              fontWeight="bold"
              paddingLeft="12px"
            >
              Perfil
            </Text>
            <MenuItem
              fontSize="15px"
              _hover={{
                bg: "pink.500"
              }}
              _focus={{
                bg: "pink.300"
              }}
            >
              Meu perfil
            </MenuItem>
            <MenuItem
              fontSize="15px"
              _hover={{
                bg: "pink.500"
              }}
              onClick={() => {}}
            >
              Sair
            </MenuItem>
          </MenuGroup>
          <MenuGroup>
            <Text
              mt="4px"
              color="gray.400"
              textTransform="uppercase"
              fontSize="13px"
              fontWeight="bold"
              paddingLeft="12px"
            >
              Saiba mais
            </Text>
            <MenuItem
              fontSize="15px"
              _hover={{
                bg: "pink.500"
              }}
              onClick={() =>
                toast({
                  title: "Feito por Matheus Spindula",
                  status: "success"
                })
              }
            >
              Créditos
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Flex>
  );
}