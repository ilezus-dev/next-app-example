export function getStaticProps() {
  return {
    props: {
      projectName: process.env.NEXT_PUBLIC_PROJECT_NAME,
      sentryUrl: process.env.SENTRY_URL,
      databaseUrl: process.env.DATABASE_URI
    }
  }
}

export default function Home({ projectName, sentryUrl, databaseUrl }) {
  return (
    <div>
      <h3>projectName: {projectName}</h3>
      <h3>sentryUrl: {sentryUrl}</h3>
      <h3>databaseUrl: {databaseUrl}</h3>
    </div>
  )
}