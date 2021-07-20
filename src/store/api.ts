import { ActivityDate } from "@/interfaces/activity";
import { activityQuery } from "@/queries/activity";
import { userQuery } from "@/queries/user";

export async function anilistRequest(query: string, variables: any): Promise<any> {
    const response = await fetch("https://graphql.anilist.co", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ query, variables })
    });

    const result = await response.json();
    return result;
}

export async function fetchUserData(username: string): Promise<any> {
    return anilistRequest(userQuery, { username });
}

export async function fetchActivity(id: number, page: number, mediaType: string, from?: number, to?: number): Promise<any> {
    let type = undefined;
    
    if (mediaType == 'anime') {
        type = 'ANIME_LIST';
    } else if (mediaType == 'manga') {
        type = 'MANGA_LIST';
    }

    const variables = {
        page,
        perPage: 50, // max
        userId: id,
        type,
        from,
        to
    }

    return anilistRequest(activityQuery, variables);
}

export function compareDates(a: ActivityDate, b: ActivityDate): boolean {
    return (a.d == b.d && a.m == b.m && a.y == b.y);
}