import { toast } from "sonner"

export type NotificationOption = {
  type: "success" | "error"
}

export const useNotification = <T extends NotificationOption>(option: T) => {
  return (message: string) => {
    toast[option.type](message)
  }
}
