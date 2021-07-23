interface FilterValue {
    name?: string;
    animeName?: string;
    mangaName?: string;
    key: string;
}

export interface Filter {
    name: string;
    key: string;
    type: string;
    values: FilterValue[];
    checked: string[];
}