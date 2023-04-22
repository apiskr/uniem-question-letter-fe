import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
} from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import { AppType, AppProps } from "next/app";
import { texts } from "@/constants/text";
import createEmotionCache from "@/providers/EmotionCacheProvider/createEmotionCache";
import { EmotionCache } from "@emotion/cache";
import { theme } from "@/providers/MuiThemeProvider";
import { ServerStyleSheets } from "@mui/styles";

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[];
}

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyDocument({ emotionStyleTags }: MyDocumentProps) {
  return (
    <Html lang="en">
      <Head>
        <meta title="uniem" name="description" content={texts.headTitle} />
        {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta name="emotion-insertion-point" content="" />
        {emotionStyleTags}
      </Head>
      <body>
        <div id="root-alert" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// [Temp] 동작 원리 이해 후 수정
// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  // 서버사이드 랜더링 시 할당된 스타일 객체를 스타일 오브젝트 객체에 입힘
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: React.ComponentType<React.ComponentProps<AppType> & MyAppProps>) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  // 스타일을 파싱해서 매핑
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};

// [Error] 이거 되는 건지 모르겠으
// MyDocument.getInitialProps = async (ctx: any) => {
//   const materialSheets = new ServerStyleSheets();
//   const originalRenderPage = ctx.renderPage;

//   ctx.renderPage = () =>
//     originalRenderPage({
//       enhanceApp:
//         (App: React.ComponentType<React.ComponentProps<AppType> & MyAppProps>) => (props: any) =>
//           materialSheets.collect(<App {...props} />),
//     });

//   const initialProps = await Document.getInitialProps(ctx);
//   return {
//     ...initialProps,
//     styles: <>{initialProps.styles}</>,
//   };
// };
