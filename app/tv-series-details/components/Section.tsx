import { Divider, Title } from "@core/components";
import { StyleSheet, View, ViewProps } from "react-native";

export type SectionProps = ViewProps & {
  label: string;
}

export function Section({ label, children, style, ...props }: SectionProps) {
  return (
    <View style={[styles.container, style]}>
      <Title style={styles.title}>
        {label}
      </Title>
      <Divider style={styles.divider} />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
  },
  title: {
    marginLeft: 8
  },
  divider: {
    marginBottom: 8
  }
})