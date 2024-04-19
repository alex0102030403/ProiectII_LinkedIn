import { Job } from "./job";
import { User } from "./user";

export interface Company{
    id: string;
    name: string;
    description: string;
    city : string;
    country: string;
    image: string;
    employees: User[];
    jobs: Job[];
}