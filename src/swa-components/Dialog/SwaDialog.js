import React from "react";
import { Dialog, IconButton, Paragraph } from "react-native-paper";

const SwaDialog = ({
  visible,
  onDismiss,
  title,
  titleStyle,
  titleTheme,
  content,
  contentStyle,
  iconColor,
  icon,
  iconSize,
  iconTheme,
  actions,
  actionStyle
}) => {
  return (
    <Dialog visible={visible} onDismiss={onDismiss}>
      <Dialog.Title style={titleStyle} theme={titleTheme}>
        {title}
      </Dialog.Title>
      <Dialog.Content style={contentStyle}>
        {icon && <IconButton icon={icon} color={iconColor} size={iconSize} theme={iconTheme} />}
        <Paragraph>{content}</Paragraph>
      </Dialog.Content>
      <Dialog.Actions style={actionStyle}>{actions}</Dialog.Actions>
    </Dialog>
  );
};

export default SwaDialog;
