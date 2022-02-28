import { enter } from "./functions";
import { InvokeProps } from "~/types/api";

export const invoke = ({ pathname }: InvokeProps) => {
    if (!unsafeWindow.LAOPLUS.config.config.features.autorunDetection.enabled) {
        return;
    }

    if (pathname === "/battleserver_enter") {
        enter();
        return;
    }
};