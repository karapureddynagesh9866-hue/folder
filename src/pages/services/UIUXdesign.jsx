import ServicePanel from "../../components/servicepanel.jsx";

export default function UIUXDesign() {
  return (
    <ServicePanel
      title="UI/UX Design"
      intro="We test ideas with real users before anyone writes code, so you build the right thing."
      points={[
        "User research and journey mapping",
        "Wireframes and clickable prototypes",
        "A design system your developers can reuse",
        "Usability testing with your audience",
      ]}
      tools={["Figma", "FigJam", "Maze", "Storybook"]}
      timeline="2 to 6 weeks"
    />
  );
}
