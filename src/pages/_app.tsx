import type { EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppPropsWithLayout } from "next/app";
import type { DefaultSeoProps } from "next-seo";
import { DefaultSeo } from "next-seo";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";

import { ApolloContextProvider } from "@/utils/apollo/apolloClient";
import { theme } from "@/utils/mui";

interface AppProps extends AppPropsWithLayout {
  emotionCache?: EmotionCache;
}

const App = ({ Component, pageProps }: AppProps) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <ApolloContextProvider pageProps={pageProps}>
          <>
            <CssBaseline />
            <DefaultSeo {...defaultSeo} />
            {getLayout(<Component {...pageProps} />)}
            <Toaster />
          </>
        </ApolloContextProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;

const defaultSeo: DefaultSeoProps = {
  titleTemplate: "",
  defaultTitle: "",
  description: "",
  openGraph: {
    type: "website",
    site_name: "",
    description: "",
    url: "",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}${"staticPath.logo_square_png"}`,
        width: 1200,
        height: 1200,
        alt: "",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
  },
};
