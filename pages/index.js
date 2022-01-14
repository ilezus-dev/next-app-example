export function getStaticProps() {
  return {
    props: {
      projectName: JSON.stringify(process.env.NEXT_PUBLIC_PROJECT_NAME),
      sentryUrl: JSON.stringify(process.env.SENTRY_URL),
      databaseUrl: JSON.stringify(process.env.DATABASE_URI)
    }
  }
}

export default function Home({ projectName, sentryUrl, databaseUrl }) {
  return (
    <div>
      <h3>projectName: {projectName}</h3>
      <h3>sentryUrl: {sentryUrl}</h3>
      <h3>databaseUrl: {databaseUrl}</h3>
      <h3>From process.env: {process.env.SENTRY_URL}</h3>
    </div>
  )
}