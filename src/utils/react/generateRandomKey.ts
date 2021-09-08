import {assoc} from "../js/assoc";

export const generateRandomKey = () => Math.random().toString(32).substring(2, 15);

export const generateId = <O extends object>(obj: O) => assoc('id', generateRandomKey())(obj);