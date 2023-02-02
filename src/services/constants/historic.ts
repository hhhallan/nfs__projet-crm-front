interface Historic {
    id: number,
    source: string,
    target: string,
    type: string,
    date: string,
    message: string
}

export const logs: Historic[] = [
        {
            id: 1,
            source: "Source 1",
            target: "Target 1",
            type: "Type 1",
            date: "2022-01-01",
            message: "Message 1"
        },
        {
            id: 2,
            source: "Source 2",
            target: "Target 2",
            type: "Type 2",
            date: "2022-01-02",
            message: "Message 2"
        },
        {
            id: 3,
            source: "Source 3",
            target: "Target 3",
            type: "Type 3",
            date: "2022-01-03",
            message: "Message 3"
        },
        {
            id: 4,
            source: "Source 4",
            target: "Target 4",
            type: "Type 4",
            date: "2022-01-04",
            message: "Message 4"
        }
    ]
;