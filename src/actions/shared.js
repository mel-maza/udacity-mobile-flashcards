import { getDecks } from "../../utils/api";
import { receiveDecks } from "./decks";

export function handleInitialData() {
    return(dispatch) => {
        return getDecks()
            .then((decks) => {
                dispatch(receiveDecks(decks))
            })
    }
}