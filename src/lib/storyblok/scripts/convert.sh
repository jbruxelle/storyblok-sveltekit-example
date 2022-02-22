YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo "${YELLOW}Generating Typescript types for components...${RED}"
env-cmd cross-var storyblok-generate-ts source=src/lib/storyblok/imports/components.json target=component-types.d.ts titlePrefix="" titleSuffix="."

echo "${NC}Generation done."