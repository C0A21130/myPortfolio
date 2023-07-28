/// <reference types="vite/client" />

interface Page {
    "id": number,
    "tag": "service" | "robot" | "other",
    "img": string,
    "url": string
    "title": string,
    "text": string
}

type Tag = "all" | "service" | "robot" | "other";