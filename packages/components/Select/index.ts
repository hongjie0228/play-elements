import Select from "./Select.vue";
import Option from "./Option.vue";

import { withInstall } from "@play-elements/utils";

export const ErSelect = withInstall(Select);
export const ErOption = withInstall(Option);

console.log("Select", Select, "Option", Option);

export * from "./types";
