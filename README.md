# 🚧 Storyblok Sveltekit example 🚧

An example of using Sveltekit with Storyblok as a headless cms.
Queries are made using GraphQL and the kitQL library from jycouet (https://github.com/jycouet/kitql)

Components definitions are fetched from Storyblok and converted to Typescript interfaces using storyblok-generate-ts (https://github.com/dohomi/storyblok-generate-ts).

If a Svelte components does not exist for a definition from Storyblok in components/bloks, it is created using a template with template-file (https://github.com/gsandf/template-file)

## START

Make sure to :

- Copy the .env.example to `.env` and fill it with you `space id`, API `token` and `version`.

  Note: using vite .env.development or .env.production won't work for now.

- Add components definitions to your Storyblok space using :

  ```
    yarn storyblok:push
  ```

- Install dependencies and generate components, schema and graphql documents

  ```
    yarn
  ```

## IMPORTANT

- Feel free to remove `bloks` from .gitignore, otherwise your changes you won't be published (I did it here because components definitions may be different).
