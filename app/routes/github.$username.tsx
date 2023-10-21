import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ListRepositories } from "~/components/ListRepositories";
import { Repositories } from "~/models/Repositories";
import { GitHubService } from "~/services/github.service";

export const loader: LoaderFunction = async ({ params }) => {
    return {
      user: await GitHubService.getUser(params.username),
      repos: await GitHubService.getUserRepos(params.username),
    };
  };

export function ErrorBoundary() {
    return <h3>Whoops. Something went wrong [Repositories]</h3>;
  }
  
export default function () {
    const { user, repos } = useLoaderData<Repositories.LoaderData>(); 

     return <ListRepositories user={user} repos={repos} />;
  }
  