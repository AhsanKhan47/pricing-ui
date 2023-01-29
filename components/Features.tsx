import React from "react";

import {
  Flex,
  Box,
  Heading,
  Text,
  Center,
  Button,
  HStack,
  VStack,
  StackProps,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { HassleFreeIcon, PayOnceIcon, MoneyBackIcon } from "../icons/icons";

interface FeatureProps extends StackProps {
  icon: React.ElementType;
  // The definition for React.ElementType is basically “any valid HTML element or another React component.” (Thanks to shakeel for proving solution to this)
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="6" align="start" direction="column">
      <Icon as={icon} boxSize="12" />
      <Text fontSize="lg" textAlign="left" fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );
}

export default function Features() {
  return (
    <Box m="auto" maxW="1024px" pt={["10", "15", "15"]} pb="8">
      <Stack
        direction={["column", "column", "row"]}
        px="12"
        py="12"
        spacing={["6", "6", "5"]}
      >
        <Feature icon={MoneyBackIcon}>
          No monthly subscription Pay once and for all
        </Feature>
        <Feature icon={HassleFreeIcon}>30 days money back Guarantee</Feature>
        <Feature icon={PayOnceIcon}> No setup fees 100% hassle-free</Feature>
      </Stack>
    </Box>
  );
}
