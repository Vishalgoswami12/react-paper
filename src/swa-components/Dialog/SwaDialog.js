import React from "react";
import { Dialog, Paragraph } from "react-native-paper";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { View } from "react-native"; // Correct import statement

const SwaDialog = ({
  visible,
  onDismiss,
  title,
  titleStyle,
  titleTheme,
  content,
  contentStyle,
  iconColor,
  iconName,
  backgroundColor,
  iconSize,
  actions,
  actionStyle,
  tickIndex, // New prop to specify the index of content line with tick icon
  showHorizontalLines, // New prop to specify whether to display horizontal lines
  borderRadius = 0 
}) => {
  return (
    <Dialog visible={visible} onDismiss={onDismiss} style={{ backgroundColor:"white",borderRadius }}>
      <Dialog.Title style={titleStyle} theme={titleTheme}>
        {title}
      </Dialog.Title>
      <Dialog.Content style={contentStyle}>
        {content.map((line, index) => (
          <React.Fragment key={index}>
            <Paragraph style={{ marginLeft: index === tickIndex ? 0 : 11.5 }}>
              {index === tickIndex && iconName && ( 
                <AntDesign name={iconName} size={iconSize} color={iconColor} style={{ marginRight: 8 }} />
              )}
              {line}
            </Paragraph>
            {showHorizontalLines && index !== content.length - 1 && <View style={{ borderBottomWidth: 0.2, borderBottomColor: 'black', marginHorizontal: -9, marginTop:10 }} />}
          </React.Fragment>
        ))}
      </Dialog.Content>
      <Dialog.Actions style={actionStyle}>{actions}</Dialog.Actions>
    </Dialog>
  );
};

export default SwaDialog;
