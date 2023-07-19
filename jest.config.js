
/**
 * @type {import("jest").Config}
 */

module.exports = {
  rootDir: ".",
  preset: "jest-expo",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
  ],
  moduleNameMapper: {
    "@test/(.*)": "<rootDir>/test/$1",
    "@(home|core)/(.*)": "<rootDir>/app/$1/$2"
  }
}