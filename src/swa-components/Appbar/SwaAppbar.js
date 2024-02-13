import React from "react";
import { Appbar, useTheme } from "react-native-paper";

const SwaAppBar = ({
  dark = false,
  statusBarHeight = 0,
  children,
  mode,
  elevated = true,
  theme,
  style,
  testID,
  backAction,
  backActionColor,
  backActionSize,
  backActionAccessibilityLabel,
  onPress
}) => {
  const paperTheme = useTheme();
  <Appbar.Header
    statusBarHeight={statusBarHeight}
    dark={dark}
    theme={theme || paperTheme}
    style={style}
    mode={mode}
    testID={testID}
    elevated={elevated} // for shadow
  >
    {backAction && (
      <Appbar.BackAction
        color={backActionColor}
        size={backActionSize}
        accessibilityLabel={backActionAccessibilityLabel}
        onPress={onPress}
        style={style}
        testID={testID}
      />
    )}

    {children}
  </Appbar.Header>;
};

export default SwaAppBar;
