export interface ActivityDay {
    day: ActivityDate,
    episodes: number,
    chapters: number,
    media: ActivityMedia[]
}

export interface ActivityDate {
    d: number,
    m: number,
    y: number,
    weekday: string,
    time: number
}

export interface ActivityMedia {
    id: number,
    type: string,
    title: string,
    cover: string,
    episodes: number,
    added?: ActivityDate
}