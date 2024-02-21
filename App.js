import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, View } from 'react-native';
import CardDialog from './src/swa-blocks/Card/CardDialog';
import {  PaperProvider,Button } from 'react-native-paper';
import CardClass from './src/swa-blocks/Card/CardClass';
import BottomNavigationBar from './src/swa-blocks/BoottomNavigation/BottomNavigationBar';
import AppbarBackAction from './src/swa-blocks/Appbar/AppbarBackAction';
import AppbarHeaderContent from './src/swa-blocks/Appbar/AppbarHeaderContent';
import DialogBox from './src/swa-blocks/Dialog/DialogBox';
import CardCourseAnalytic from './src/swa-blocks/Card/CardCourseAnalytic';
import CardTicket from './src/swa-blocks/Card/CardTicket';
import SurfaceTime from './src/swa-blocks/Surface/SurfaceTime';
import Searchbar from './src/swa-blocks/Searchbar/Searchbar';
import ListAccordianFaq from './src/swa-blocks/ListAccordian/ListAccordianFaq';
import StreamVideo from './src/swa-blocks/Card/StreamVideo';
import HeadLine from './src/swa-blocks/Appbar/HeadLine';
import ViewExamCard from './src/swa-blocks/Card/ViewExamCard';
import TicketVideoCard from './src/swa-blocks/Card/TicketVideoCard';
import LeaderBoardCard from './src/swa-blocks/Card/LeaderBoardCard';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
      {/* <CardActionLiveStream/> */}
      <PaperProvider>
      {/* <CardDialog/> */}
      {/* <CardActionLiveStream/> */}
      {/* <CardClass/> */}
      {/* <BottomNavigationBar/> */}
      {/* <AppbarBackAction/> */}
      {/* <AppbarHeaderContent/> */}
      {/* <DialogBox/> */}
      {/* <CardCourseAnalytic/> */}
      {/* <CardTicket/> */}
      <SurfaceTime
      time="5hrs"
      />
      {/* <Searchbar/> */}
      <ListAccordianFaq
      title="I am not able to sign in my account"
      />
      {/* <StreamVideo/> */}
      <HeadLine/>
    <ViewExamCard/>
    {/* <TicketVideoCard/> */}
    <LeaderBoardCard/>
      </PaperProvider>
      {/* <Image
          source={{ uri: "https://placehold.co/600x400.png" }}
          style={{ width: "20%", height: "10%" }}
          // resizeMode="cover"
        /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    flexDirection: 'column', // Set the direction to column // Distribute items evenly along the main axis
    alignItems: 'center', // Center items horizontally
    height: '100%',
    justifyContent:"center",
  },
});
