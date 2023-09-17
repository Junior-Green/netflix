import { Timestamp } from "firebase/firestore"
import Review from "./review.model";

export default interface Show {
    title: string,
    audio: string[],
    description: string,
    dub: boolean,
    sub: boolean,
    subtitles: string[],
    genres: ("Action" | "Adventure" | "Comedy" | "Drama" | "Fantasy" | "Music" | "Romance" | "Sci-Fi" | "Seinen" | "Shojo" | "Shonen" | "Slice of life" | "Sports" | "Supernatural" | "Thriller")[],
    publisher: string,
    reviews?: Review[],
}