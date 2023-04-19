import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export const EmotionCacheProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const emotionCache = clientSideEmotionCache;
  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
};
