import { renderWithNavigator } from '@test/navigation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import type { HomeTabs } from '@home/types';
import { TVSeriesScreen } from './TVSeriesScreen';
import { TVSeriesService } from '@core/services/tvmaze'
import { cleanup } from '@testing-library/react-native';

const BottomTab = createBottomTabNavigator<HomeTabs>();

const ShowMock = jest.spyOn(TVSeriesService, "list")

describe("Home Screen", () => {

  beforeEach(() => {
    ShowMock.mockResolvedValueOnce([]);
  });

  afterEach(cleanup)

  it("should match snapshot", () => {
    const { toJSON } = renderWithNavigator(
      <BottomTab.Navigator>
        <BottomTab.Screen name="TVSeries" component={TVSeriesScreen} options={TVSeriesScreen.options} />
      </BottomTab.Navigator>
    )

    expect(toJSON()).toMatchSnapshot();
  });

  it("should render Home Screen", () => {
    const { getByText } = renderWithNavigator(
      <BottomTab.Navigator>
        <BottomTab.Screen name="TVSeries" component={TVSeriesScreen} options={TVSeriesScreen.options} />
      </BottomTab.Navigator>
    )

    const headerTitle = getByText("AmazingTV");

    expect(headerTitle).toBeTruthy();
  })
})