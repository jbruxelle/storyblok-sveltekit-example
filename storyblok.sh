YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo "${YELLOW}Storyblok loging in...${RED}"
storyblok login

echo "${YELLOW}Pulling components from Storyblok...${RED}"

env-cmd cross-var storyblok pull-components --space=%STORYBLOK_SPACE_ID%

echo "${YELLOW}Copying components...${RED}"
env-cmd cross-var cp components.%STORYBLOK_SPACE_ID%.json ./src/lib/storyblok/imports/components.json
env-cmd cross-var cp presets.%STORYBLOK_SPACE_ID%.json ./src/lib/storyblok/imports/presets.json

echo "${YELLOW}Removing old fileds...${RED}"
env-cmd cross-var rm components.%STORYBLOK_SPACE_ID%.json
env-cmd cross-var rm presets.%STORYBLOK_SPACE_ID%.json

echo "${NC}Components data pulled."

echo "${YELLOW}Generating Typescript types for components...${RED}"
env-cmd cross-var storyblok-generate-ts source=src/lib/storyblok/imports/components.json target=src/lib/storyblok/component-types.d.ts titlePrefix="" titleSuffix="."

echo "${NC}Generation done."

node --loader ts-node/esm src/lib/storyblok/gen/index.ts
