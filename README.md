# Storyblok Sveltekit example

## START

Make sure to :

- Copy the .env.example to `.env` and fill it with you `space id`, API `token` and `version`.

  Note: using vite .env.development or .env.production won't work for now.

- Run `yarn` (will also run the yarn gen command).

## IMPORTANT

- Please have a look a graphql fragments: your Storyblok space is expected to have a `Layout` content type with `header` and `footer` fields.

- Feel free to remove `bloks` from .gitignore, otherwise your changes you won't be published (I did it here because components definitions may be different).
