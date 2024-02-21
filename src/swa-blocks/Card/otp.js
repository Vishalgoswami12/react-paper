import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, ToastAndroid } from "react-native";
import { Appbar, Text } from "react-native-paper";
// import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { OtpEnterScreenBlock } from "@swaadhyayan-app/swa-blocks";
import { API_ENDPOINT } from "@env";
import { NavigateToCreateNewPin, NavigateBack } from "../../navigation/NavigationRoutes";
import { useTheme } from "../../theme/ThemeContext";
import { FrappeApp } from "frappe-js-sdk";
import useCustomTimer from "../../helpers/useCustomTimer";
import { handleNavigation } from "../../api/InitialOtpApi";

const OtpEnterScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { theme } = useTheme();
  const [otp, setOtp] = useState(Array(4).fill(""));
  const inputRefs = [];
  const [allPinFilled, setAllPinFilled] = useState(false);
  const [timer, buttonActive, startTimer] = useCustomTimer();

  useEffect(() => {
    const isAllFilled = otp.every((element) => element !== "");
    setAllPinFilled(isAllFilled);
  }, [otp]);

  const frappe = new FrappeApp(API_ENDPOINT);
  const call = frappe.call();
  console.log("ENTERED OTP", otp);
  for (let i = 0; i < 4; i++) {
    inputRefs.push(useRef(null));
  }
  const phoneNumber = route.params.mobile_number;

  const handleOtpChange = (text, index) => {
    if (/^\d*$/.test(text) && text.length <= 1) {
      let newOtp = [...otp];
      newOtp[index] = text;

      setOtp(newOtp);

      if (text !== "") {
        if (index < inputRefs.length - 1) {
          inputRefs[index + 1].current.focus();
        }
      } else if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: "#F3F3F3" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <OtpEnterScreenBlock
        theme={theme}
        title={"Verify"}
        onhandleNavigation={() => handleNavigation(otp, phoneNumber, startTimer, navigation)}
        onhandleOtpChange={handleOtpChange}
        inputRefs={inputRefs}
        onPressNavigateVerifyOtp={() => resendOtp(phoneNumber, startTimer)} // You need to define resendOtp or adjust accordingly
        allPinFilled={allPinFilled}
        buttonActive={buttonActive}
      />
      {timer !== 3 && (
        <Text variant="labelLarge" style={{ textAlign: "center", color: "gray", marginTop: 20 }}>
          Wait till {timer} sec.
        </Text>
      )}
    </View>
  );
};

export default OtpEnterScreen;
