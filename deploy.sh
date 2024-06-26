#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist
cp -p index.html 404.html # add 404.html 
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git branch -m main
# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:boboyuki/vue3-todo-lab.git main:gh-pages

cd ..