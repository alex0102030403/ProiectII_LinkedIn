import { createContext, useContext } from "react";
import JobStore from "./jobStore"
import UserStore from "./userStore";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";

interface Store{
    commonStore: CommonStore;
    jobStore: JobStore;
    userStore: UserStore;
    modalStore: ModalStore;
}

export const store: Store = {
    jobStore: new JobStore(),
    userStore: new UserStore(),
    commonStore: new CommonStore(),
    modalStore: new ModalStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}