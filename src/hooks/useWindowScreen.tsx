import React from "react";

/**
 * @description - This hook is used to get the screen size in Next.js
 */
export const useWindowScreen = () => {
  const [windowScreen, setWindowScreen] = React.useState<Screen | null>(null);

  React.useEffect(() => {
    setWindowScreen(window.screen);
  }, []);

  return { windowScreen };
};
