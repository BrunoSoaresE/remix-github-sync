# remix-github-sync
GitHub Sync é um projeto em Remix que realiza a sincronização com o GitHub, permitindo aos usuários visualizar repositórios e commits de outros usuários de forma rápida e eficiente.


Passo a passo de comandos
# 1 criação do projeto
npx create-remix@latest

# 2 add biblioteca tiny-invariant //validacao de dados
npm add tiny-invariant

# 3 add biblioteca pick  //
npm i lodash
npm i --save-dev @types/lodash

# 4 add tailwindcss  //
npm install -D tailwindcss
npx tailwindcss init --ts
npm @tailwindcss/forms

# 5 add heroicons  //
npm i @heroicons/react 1.0.6

# 5 add headlessui  //
npm i @headlessui/react
or npm i heroicons

# 5 add headlessui  //
npm i concurrently




# Link acesso
https://remix-github-sync.vercel.app/

# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
