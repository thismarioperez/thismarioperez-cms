#!/bin/bash

echo "Kill all running PM2 actions"
pm2 kill

echo "Jump to app folder"
cd /home/ubuntu/Repositories/thismarioperez-cms

echo "Update app from Github repo"
git pull

echo "Install app dependencies"
yarn install

echo "Build app"
NODE_ENV=production yarn build

echo "Restart pm2"
pm2 start ~/ecosystem.config.js

echo "Save pm2 process list"
pm2 save