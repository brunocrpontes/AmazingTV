import { Label } from "@core/components";
import { getShowEndYear, getShowRating, getShowReleaseYear, type Show } from "@core/domains/show";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, View, ViewProps } from "react-native";

export type HomeCardFooterProps = ViewProps & {
  show: Show
}

export function HomeCardFooter({ show, ...props }: HomeCardFooterProps) {
  const { colors } = useTheme();

  const rating = getShowRating(show);
  const releaseYear = getShowReleaseYear(show);
  const endYear = getShowEndYear(show);

  return (
    <View style={styles.container} {...props}>
      {rating && (
        <Label icon="star" containerStyle={styles.labelContainer}>
          {rating.toFixed(1)}
        </Label>
      )}
      <Label icon="calendar-today" containerStyle={styles.labelContainer}>
        {releaseYear} - {endYear}
      </Label>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    flexDirection: "row",
  },
  labelContainer: {
    marginRight: 8
  }
})

