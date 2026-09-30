import ServicePanel from "../../components/servicepanel.jsx";

export default function AppDevelopment() {
  return (
    <ServicePanel
      title="App Development"
      intro="Mobile apps for iOS and Android from a single codebase, tested on real devices."
      points={[
        "Cross-platform apps with native feel",
        "Offline support and push notifications",
        "App Store and Play Store submission",
        "Crash reporting and release updates",
      ]}
      tools={["React Native", "Expo", "Firebase", "TypeScript"]}
      timeline="8 to 16 weeks"
    />
  );
}
