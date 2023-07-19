import { NavigationContainer } from "@react-navigation/native";
import { render } from '@testing-library/react-native'
import { renderWithProviders } from "./providers";

type NavigationContainerOptions = React.ComponentProps<typeof NavigationContainer>

export function renderWithNavigator(component: React.ReactElement, options?: NavigationContainerOptions) {
  return renderWithProviders(
    component,
    {
      wrapper: ({ children }) => (
        <NavigationContainer {...options}>
          {children}
        </NavigationContainer>
      )
    })
}