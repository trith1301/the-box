import { ALLOW_LOGGER_ENVS } from "../core/constants"
const env = import.meta.env.VITE_ENV

const useDevLogger = () => {
  return (title: string, toLog: any) => {
    const isAllowToLog = ALLOW_LOGGER_ENVS.includes(env)
    if (isAllowToLog) {
      console.log(`${title}: ${JSON.stringify(toLog)}`)
    }
  }
}

export default useDevLogger
