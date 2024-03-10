import { toast } from "sonner"

export type NotificationOption = {
  type: "success" | "error"
}

const useNotification = <T extends NotificationOption>(option: T) => {
  return (message: string) => {
    toast[option.type](message)
  }
}

export default useNotification
