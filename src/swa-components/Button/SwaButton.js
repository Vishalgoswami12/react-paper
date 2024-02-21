import React from "react";
import { Button } from "react-native-paper";

const SwaButton = ({ onPress,labelFontSize ,labelTopMargin, labelStyle, labelColor,margin, label, color, disabled, size, testID, mode,icon,backgroundColor }) => {
  const sizes = {
    small: { width: 90, height: 40 },
    medium: { width: 150, height: 50 },
    large: { width: 363, height: 60 }
  };

  const { width, height } = sizes[size] || sizes.medium;
  const buttonMargin = typeof margin === "object"
  ? `${margin.top || 0}px ${margin.right || 0}px ${margin.bottom || 0}px ${margin.left || 0}px`
  : margin;
  return (
    <Button
      onPress={onPress}
      mode={mode}
      color={color}
      disabled={disabled}
      style={{ width: width, height: height, backgroundColor: backgroundColor || "#329FFF",margin:buttonMargin,marginTop: labelTopMargin }}
      icon={icon}
      testID={testID}
      labelStyle={{ color: labelColor,fontSize: labelFontSize  }}
      >
      
      {label}
    </Button>
  );
};

export default SwaButton;
