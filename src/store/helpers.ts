import { ActivityDate } from "@/interfaces/activity";

const formatObj = new Intl.DateTimeFormat().formatToParts(new Date());
    
const dateFormat = formatObj.map(obj => {
    switch (obj.type) {
        case "day":
            return "DD";
        case "month":
            return "MM";
        case "year":
            return "YYYY";
        default:
            return obj.value;
    }
}).join("");

export function prettyDate(date: ActivityDate): string {
    return dateFormat.replace("DD", String(date.d)).replace("MM", (date.m >= 10 ? String(date.m) : '0'+String(date.m) )).replace("YYYY", String(date.y));
}