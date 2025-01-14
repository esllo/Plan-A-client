import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import { RecoilRoot } from "recoil";

import { theme } from "../styles/theme";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ChakraProvider>
  );
}
