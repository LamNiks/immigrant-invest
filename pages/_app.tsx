import { AppProps } from "next/app";

import { Container } from "@/components/Container/Container";

import "styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;