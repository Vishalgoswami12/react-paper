import React from "react";
import { Button } from "react-native-paper";

const SwaButton = ({ onPress, label, color, disabled, size, testID, mode }) => {
  const sizes = {
    small: { width: 100, height: 40 },
    medium: { width: 150, height: 50 },
    large: { width: 200, height: 60 }
  };

  const { width, height } = sizes[size] || sizes.medium;

  return (
    <Button
      onPress={onPress}
      mode={mode}
      color={color}
      disabled={disabled}
      style={{ width: width, height: height }}
      icon={icon}
      testID={testID}>
      {label}
    </Button>
  );
};

export default SwaButton;
