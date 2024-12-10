#!/bin/bash

set -e

date

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
git switch tasks-list-module
cd "$WEBDIR/components/"
npm install
cd "$WEBDIR/tasks-list"
npm install
cp "$CURRENT_DIR/tasks_data_retrieval/tasks.json" ./src/
npm run build
cp -r build "$CURRENT_DIR/site/fractal-tasks"

deactivate
rm -r "$VENVDIR"
rm -rf "$WEBDIR"

cd "$CURRENT_DIR/site"
date
python3 -m http.server