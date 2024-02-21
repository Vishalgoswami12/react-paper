import React from "react";
import { Appbar, useTheme } from "react-native-paper";

const SwaAppBar = ({
  dark = false,
  statusBarHeight = 0,
  children,
  mode,
  title,
  titleStyle,
  subtitle,
  subtitleStyle,
  elevated = true,
  theme,
  style,
  testID,
  backAction,
  backActionColor,
  backgroundColor,
  backActionSize,
  backActionAccessibilityLabel,
  onPress
}) => {
  const paperTheme = useTheme();
  
  return (
    <Appbar.Header
      statusBarHeight={statusBarHeight}
      dark={dark}
      theme={theme || paperTheme}
      style={[{ backgroundColor }, style]}
      mode={mode}
      testID={testID}
      elevated={elevated} // for shadow
    >
      {backAction ? ( 
        <Appbar.BackAction
          color={backActionColor}
          size={backActionSize}
          accessibilityLabel={backActionAccessibilityLabel}
          onPress={onPress}
          testID={testID}
          style={style}
        />
      ) : (
        <Appbar.Content
          title={title}
          titleStyle={titleStyle}
          subtitle={subtitle}
          subtitleStyle={subtitleStyle}
          onPress={onPress}
          theme={theme}
          testID={testID}
        />
      )}

      {children}
    </Appbar.Header>
  );
};

export default SwaAppBar;
