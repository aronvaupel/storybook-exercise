import * as React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import Contact from "./components/ContactForm/ContactForm";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <Contact />
      </Grid>
    </Box>
  </ChakraProvider>
);
