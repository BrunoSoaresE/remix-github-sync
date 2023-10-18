import { Menu } from "@headlessui/react";
import { classNames } from "~/util";
import { Layout } from "../Layouts/Layout";
import { Repositories } from "~/models/Repositories";
import { User } from "~/models/User";
import { CardRepository } from "./CardRepository";

export interface ListRepositoriesProps {
  user: User;
  repos: Repositories.Repo[];
}

export function ListRepositories({  user, repos }: ListRepositoriesProps) {
  return (
    <Layout user={user} repos={repos}>
      <div className="bg-white lg:min-w-0 lg:flex-1">
        <div className="pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
          <div className="flex items-center">
            <h1 className="flex-1 text-lg font-medium">Projetos públicos</h1>
            <Menu as="div" className="relative">
          
              <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Name
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Date modified
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Date created
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </div>
        </div>
        <ul
          role="list"
          className="relative z-0 divide-y divide-gray-200 border-b border-gray-200"
        >
          {repos.map((repo) => (
            <CardRepository repo={repo} key={repo.id} />
          ))}
        </ul>
      </div>
    </Layout>
  );
}
