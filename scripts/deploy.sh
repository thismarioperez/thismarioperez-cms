echo "Kill all running PM2 actions"
pm2 kill

echo "Jump to app folder"
cd /home/ubuntu/thismarioperez-cms

echo "Update app from Github repo"
git pull

echo "Source correct npm version"
nvm use

echo "Install app dependencies"
yarn install

echo "Build app"
NODE_ENV=production yarn build

echo "Restart pm2"
pm2 start ~/ecosystem.json