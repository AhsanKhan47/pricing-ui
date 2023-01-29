import React from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Center,
  Button,
  HStack,
  StackProps,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { CheckIcons } from "../icons/icons";

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="5" {...rest} alignItems="start">
      <Icon as={CheckIcons} w="22px" h="22px" />

      <Text textAlign={["left", "left", "center"]}>{children}</Text>
    </HStack>
  );
};

export default function Pricing() {
  return (
    <Box margin={["6", "8", "auto"]}>
      <Box
        maxW="994px"
        margin="auto"
        mt="-256px"
        borderRadius="12px"
        overflow="hidden"
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      >
        <Flex direction={["column", "column", "row"]}>
          <Box textAlign="center" bg="#F0EAFB" p="60px">
            <Text fontSize="2xl" fontWeight="800" color="#171923">
              Premium PRO
            </Text>
            <Text fontSize={["5xl", "5xl", "6xl"]} pt="4" fontWeight="800">
              $329
            </Text>
            <Text fontSize="18px" pt="2" fontWeight="medium">
              billed just once
            </Text>
            <Button
              fontSize="16px"
              bg="#805AD5"
              color="#F7FAFC"
              width={["200px", "282"]}
              mt="16px"
            >
              Get Started
            </Button>
          </Box>

          <Box
            p="60px"
            bg="#FFFFFF"
            borderRadius="0 12px 12px 0 "
            overflow="hidden"
          >
            <Text pt="4" textAlign="start" fontSize={"xl"}>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" spacing="20px" pt="20px">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
