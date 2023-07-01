import AppLayout from "@/components/layout/AppLayout";
import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
      }}
    >
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </MantineProvider>
  );
}
