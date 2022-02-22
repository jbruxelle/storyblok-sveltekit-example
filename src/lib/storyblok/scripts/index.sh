#!/usr/bin/env node

sh src/lib/storyblok/scripts/pull.sh
sh src/lib/storyblok/scripts/convert.sh

node --loader ts-node/esm src/lib/storyblok/gen/index.ts
