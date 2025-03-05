import Notification from "./methods";
import {withInstallFunction} from '@play-elements/utils'

export const ErNotification = withInstallFunction(Notification, '$notify')

export * from './types'
