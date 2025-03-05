import Message from "./methods";
import { withInstallFunction } from "@play-elements/utils";

export const ErMessage = withInstallFunction(Message, "$message");

export * from "./types";
