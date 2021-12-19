#! /usr/bin/bash
###
 # @Description: 
 # @Author: 华松林
 # @Date: 2021-12-18 21:43:13
 # @LastEditors: 华松林
 # @LastEditTime: 2021-12-18 21:43:32
 # @FilePath: /hsl-ui/scripts/publish.sh
### 

# Do not run this file without setting the environment variables, you will end up fatal error
# If you wish to run this locally, please change the env variable before running this.
# echo "//${REGISTRY}/:_authToken=${TOKEN}" > .npmrc

cat package.json \
| grep -v '"private":' \
| grep -v '"version":' \
| sed "s/\(\"name\": \"hsl-ui\"\)/\1,\n  \"version\": \"${TAG_VERSION}\"/g" > package.json.bak

cat package.json.bak > package.json
npm publish --registry ${REGISTRY}
