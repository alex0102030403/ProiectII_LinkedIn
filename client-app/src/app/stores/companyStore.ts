import { get, makeAutoObservable, runInAction } from "mobx";
import { User, UserFormValues } from "../models/user";
import agent from "../api/agent";
import { store } from "./store";
import { router } from "../router/Routes";
import { Company } from "../models/company";

export default class CompanyStore{

    CompanyList: Company[] = [];
    
    constructor(){
        makeAutoObservable(this);
        this.getCompanies();
        
        
    }

    getCompanies = async () => {
        try{
            const companies = await agent.Companys.list();
            runInAction(() => {
                this.CompanyList = companies;
            })
        } catch (error){
            console.log(error);
        }
    }

    
}