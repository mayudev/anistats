export interface ActivityDay {
    day: ActivityDate, // HUMAN-READABLE FORMAT (Jan = 1)
    episodes: number,
    chapters: number,
    media: ActivityMedia[]
}

export interface ActivityDate {
    d: number,
    m: number,
    y: number,
    weekday?: string,
    time: number
}

export interface ActivityMedia {
    id: number,
    type: string,
    title: string,
    cover: string,
    episodes: number,

    // OPTIONAL FIELDS (used only on lists)
    chapters?: number,
    format?: string,
    banner?: string,
    added?: ActivityDate,
    completed?: ActivityDate,
    started?: ActivityDate,
    seasonYear?: number,
    averageScore?: number,
    status?: string,
    progress?: number,
    length?: number
}