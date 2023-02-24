import { atom } from 'recoil'

export const enum NOTIFICATION_TYPE {
  DANGEROUS = 'dangerous',
  WARNING = 'warning',
  INFORMING = 'informing',
}

interface INotification {
  type: NOTIFICATION_TYPE
  title?: string
  message?: string
  isShow?: boolean
  autoClose?: boolean
  enableCloseButton?: boolean
}

export const notificationState = atom({
  key: 'notificationState',
  default: {
    isShow: true,
    type: NOTIFICATION_TYPE.INFORMING,
    title: 'Your account is created!',
    message: 'Please log in to your account now.',
  } as INotification,
})
