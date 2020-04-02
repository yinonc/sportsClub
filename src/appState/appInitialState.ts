import {UserData} from "../../schemas";

export interface AppState {
    userData: UserData | null;
    isFetchingUserData: boolean;
    counter: number;
}

export const appInitialState: AppState = {
    userData: null,
    isFetchingUserData: false,
    counter: 0
}
