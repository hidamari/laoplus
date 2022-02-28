import {
    enter,
    leave,
    updateTimeStatus,
    incrementDrops,
    calcSquadCosts,
} from "./functions";
import { InvokeProps } from "~/types/api";

export const invoke = (props: InvokeProps) => {
    if (props.pathname === "/battleserver_enter") {
        enter(props.req);
        calcSquadCosts(props.res);
        return;
    }
    if (props.pathname === "/battleserver_leave") {
        leave();
        return;
    }
    if (props.pathname === "/wave_clear") {
        incrementDrops(props.res);
        updateTimeStatus();
        return;
    }
};