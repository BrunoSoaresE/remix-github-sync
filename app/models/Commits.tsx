import { User } from "./User";


export namespace Commits {
  
  export interface ApiResponse {
    sha: string;
    commit: {
      message: string;
    };
    html_url: string;
  }

  export interface Commit {
    sha: string;
    message: string;
    html_url: string;
  }

  export interface LoaderData {
    user: User;
    reponame: string | undefined;
    commits: Commit[];

  }
}
