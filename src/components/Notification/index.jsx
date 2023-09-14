import { notification } from "antd";

export function Notification(type, message, description) {
  notification.config({
    duration: 2
  })
  return notification[type]({ message, description });
}