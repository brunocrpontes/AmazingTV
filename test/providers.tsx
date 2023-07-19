import { NavigationContainer } from "@react-navigation/native";
import { RenderOptions, render } from '@testing-library/react-native'
import { QueryClient, QueryClientProvider } from "react-query";

export function renderWithProviders(component: React.ReactElement, options: RenderOptions = {}) {
  const client = new QueryClient()
  const {
    wrapper: Wrapper = ({ children }) => children,
    ...rest
  } = options

  return render(
    component,
    {
      wrapper: (props) => (
        <QueryClientProvider client={client}>
          <Wrapper {...props} />
        </QueryClientProvider>
      ),
      ...rest
    })
}