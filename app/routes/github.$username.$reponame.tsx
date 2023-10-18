import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ListCommits } from "~/components/ListCommits";
import { Commits } from "~/models/Commits";
import { GitHubService } from "~/services/github.service";

export const loader: LoaderFunction = async ({
  params,
}): Promise<Commits.LoaderData> => {
  
  return {
    user: await GitHubService.getUser(params.username),
    commits: await GitHubService.getCommits(params.reponame, params.username),
    reponame: params.reponame,
  };
};

export function ErrorBoundary() {
  return <h3>Whoops. Something went wrong [Commits]</h3>;
}

export default function () {
  const { user, commits,reponame } = useLoaderData<Commits.LoaderData>();
  return <ListCommits commits={commits} user={user} reponame={reponame} />;
}
