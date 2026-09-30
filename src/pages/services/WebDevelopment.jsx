import ServicePanel from "../../components/servicepanel.jsx";

export default function WebDevelopment() {
  return (
    <ServicePanel
      title="Web Development"
      intro="Marketing sites, dashboards and web apps that load quickly and work on every screen size."
      points={[
        "Responsive, accessible front ends",
        "REST and GraphQL API integration",
        "Performance budgets and Lighthouse checks",
        "Deployment and monitoring set up for you",
      ]}
      tools={["React", "Node.js", "PostgreSQL", "Vite", "Vercel"]}
      timeline="4 to 10 weeks"
    />
  );
}
