import React from "react";
import SwaCard from "../../swa-components/Card/SwaCard";
import { Card, Text, View } from "react-native-paper";
import SwaBadge from "../../swa-components/Badge/SwaBadge";
import SwaIcon from "../../swa-components/Icon/SwaIcon";
function CardCourseAnalytic() {
  return (
    <Card>
      <SwaCard
        subtitle="Quis autem vel eum iure rephrehendrit qui in ea voluplate velit esse qunam nihil molestiae consequatu"
        titleVariant="titleMedium"
      />
      <View>
        <SwaCard title="Slving Jee Past Year Question" titleVariant="titleSmall" />
        <SwaBadge />
        <SwaCard title="Video Lecture" titleVariant="titleSmall" />
      </View>
      <SwaCard>
        content=
        {
          <View>
            <View>
              <SwaIcon source="duration" />
              <Card.Content>
                <Text variant="labelSmall">9:23 PM</Text>
                <Text>Started</Text>
              </Card.Content>
            </View>
            <View>
              <SwaIcon source="duration" />
              <Card.Content>
                <Text variant="labelSmall">10:54 PM</Text>
                <Text variant="titleSmall">Completed</Text>
              </Card.Content>
            </View>
          </View>
        }
      </SwaCard>
      <SwaCard
        content={
          <View>
            <View>
              <SwaIcon source="support" />
              <Text variant="titleMedium">0</Text>
              <Text variant="titleSmall">Breaks</Text>
            </View>
            <View>
              <SwaIcon source="analytic" />
              <Text variant="titleMedium">Preak Productivity</Text>
            </View>
          </View>
        }
      />
    </Card>
  );
}

export default CardCourseAnalytic;
