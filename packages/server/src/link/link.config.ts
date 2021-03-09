import { ACTIONS } from "../@config/actions.config";
import { ONE_HOUR, TEN_MINUTES } from "@base-project/common";

export const UNIQUE_LINK_ACTIONS = [
  ACTIONS.EMAIL_VERIFY_EMAIL,
  ACTIONS.RESET_PASSWORD_EMAIL
];

export const EXPIRATION_TIMES = {
  [ACTIONS.EMAIL_VERIFY_EMAIL]: ONE_HOUR,
  [ACTIONS.RESET_PASSWORD_EMAIL]: TEN_MINUTES
};