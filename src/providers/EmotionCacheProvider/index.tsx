import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "./createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export const EmotionCacheProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value?: EmotionCache;
}) => {
  value ??= clientSideEmotionCache;
  return <CacheProvider value={value}>{children}</CacheProvider>;
};
