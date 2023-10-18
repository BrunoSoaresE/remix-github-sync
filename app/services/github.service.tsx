import invariant from "tiny-invariant";
import { Commits } from "~/models/Commits";
import { Repositories } from "~/models/Repositories";
import  first, { Collection }  from 'lodash';
import  head  from 'lodash';
import  pick  from 'lodash';
import { User } from "~/models/User";

export namespace GitHubService {

    const config = {
        headers: {
        accept: "application/vnd.github.v3+json",
        Authorization: `token ${process.env.GITHUB_API_TOKEN}`,
        },
    };


    
    export const getUser = async (username?: string) => {
        invariant(username, "Please provide an username as a string");
    
        const res = await fetch(
        `https://api.github.com/users/${username.toLocaleLowerCase()}`,
        config
        );
    
        return pick.pick(await res.json(), ["login", "avatar_url", "html_url", "bio"]);
    };
    
    export const getUserRepos = async (username?: string) => {
        invariant(username, "Please provide an username as a string");
    
        const res = await fetch(
        `https://api.github.com/users/${username}/repos`,
        config
        );


        return pick<Repositories.Repo>(await res.json());


    };
    
    export const getCommits = async (
        reponame?: string,
        username?: string
    ): Promise<Commits.Commit[]> => {
       invariant(reponame, "Please provide an repository name as a string");
       invariant(username, "Please provide an user name as a string");
    
        const res = await fetch(
        `https://api.github.com/repos/${username}/${reponame}/commits`,
        config
        );
       

        return (await res.json()).map((commit: Commits.ApiResponse) => ({
            sha: commit.sha,
            message: commit.commit.message,
            html_url: commit.html_url,
            }));
     };
  
}