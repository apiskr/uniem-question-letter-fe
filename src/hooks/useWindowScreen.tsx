import React from "react";

/**
 * @description - This hook is used to get the screen size in Next.js
 */
export const useWindowScreen = () => {
  const [screen, setScreen] = React.useState<Screen | null>(null);

  React.useEffect(() => {
    setScreen(window.screen);
  }, []);

  return { screen };
};
