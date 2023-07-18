#!/bin/bash

# Setup git credentials
git config --global credential.helper 'store --file ~/.git-credentials'
echo "https://github.com:LukaGrdinic2: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" >> ~/.git-credentials
chmod 600 ~/.git-credentials

# Build library with npm script
npm run build:ngx-dynamic-headings

