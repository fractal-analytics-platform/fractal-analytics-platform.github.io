#!/bin/bash

set -e

date

FRACTAL_WEB_REFERENCE=$(cat fractal-web-reference.txt)

CURRENT_DIR=$(pwd)
WEBDIR="/tmp/WEB"
VENVDIR="/tmp/venv-for-landing-page"

python3 -m venv "$VENVDIR"
source "$VENVDIR/bin/activate"

# MKDocs
python3 -m pip install -r requirements.txt
mkdocs build --config-file mkdocs.yml --strict --site-dir ./site

# Parse packages
python3 -m pip install -r tasks_data_retrieval/requirements.txt
python3 -u tasks_data_retrieval/create_tasks_data.py
ls -lh tasks_data_retrieval/tasks.json

# Build
git clone git@github.com:fractal-analytics-platform/fractal-web "$WEBDIR"
cd "$WEBDIR"
git checkout "$FRACTAL_WEB_REFERENCE"
cd "$WEBDIR/components/"
npm install
cd "$WEBDIR/tasks-list"
npm install
cp "$CURRENT_DIR/tasks_data_retrieval/tasks.json" ./src/
npm run build
cp -r build "$CURRENT_DIR/site/tasks-table"

CURRENT_DATE=$(date +"%Y-%m-%d %H:%M %Z")
sed -i'.bak1' "s/LASTUPDATEDPLACEHOLDER/$CURRENT_DATE/" "$CURRENT_DIR/site/available_tasks/index.html"
sed -i'.bak2' "s/FRACTALWEBREFERENCEPLACEHOLDER/$FRACTAL_WEB_REFERENCE/" "$CURRENT_DIR/site/available_tasks/index.html"
rm "$CURRENT_DIR/site/available_tasks/index.html.bak1"
rm "$CURRENT_DIR/site/available_tasks/index.html.bak2"


deactivate
rm -r "$VENVDIR"
rm -rf "$WEBDIR"

cd "$CURRENT_DIR/site"
date
python3 -m http.server
