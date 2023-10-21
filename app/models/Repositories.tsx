import { User } from "./User";


export namespace Repositories {
  export interface Repo {
    id: string;
    name: string;
    full_name: string;
    stargazers_count: string;
    html_url: string;
    language: string;
    description: string;
  }

  export interface LoaderData {
    user: User;
    repos: Repositories.Repo[];
  }
}


