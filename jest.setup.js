import { loadEnvConfig } from '@next/env'

export default async () => {
  const projectDir = process.cwd()
  const g = loadEnvConfig(projectDir)
  console.log("GGG", g)
}