#!/bin/bash

set -eu

date

FRACTAL_WEB_REFERENCE=$(cat fractal-web-reference.txt)

CURRENT_DIR=$(pwd)
WEBDIR="/tmp/WEB"
rm -rf "$WEBDIR"
rm -rf site


uv sync
uv run zensical build --strict

# Parse packages
uv run python3 -u tasks_data_retrieval/create_tasks_data.py
ls -lh tasks_data_retrieval/tasks.json

uv run python3 -u templates_data_retrieval/create_templates_data.py


# Build
git clone git@github.com:fractal-analytics-platform/fractal-web "$WEBDIR"
cd "$WEBDIR"
git checkout "$FRACTAL_WEB_REFERENCE"
cd "$WEBDIR"
npm install
cd "$WEBDIR/components/"
npm install
cd "$WEBDIR/tasks-list"
npm install
cp "$CURRENT_DIR/tasks_data_retrieval/tasks.json" ./src/
npm run build
cp -r build "$CURRENT_DIR/site/task-table"
cd "$WEBDIR/templates-list"
npm install
cp "$CURRENT_DIR/templates_data_retrieval/"*.json ./static/
cp "$CURRENT_DIR/templates_data_retrieval/raw/"*.json ./static/
npm run build
cp -r build "$CURRENT_DIR/site/templates-table"

CURRENT_DATE=$(date +"%Y-%m-%d %H:%M %Z")
sed -i'.bak1' "s/LASTUPDATEDPLACEHOLDER/$CURRENT_DATE/" "$CURRENT_DIR/site/fractal_tasks/index.html"
sed -i'.bak2' "s/FRACTALWEBREFERENCEPLACEHOLDER/$FRACTAL_WEB_REFERENCE/" "$CURRENT_DIR/site/fractal_tasks/index.html"
rm "$CURRENT_DIR/site/fractal_tasks/index.html.bak1"
rm "$CURRENT_DIR/site/fractal_tasks/index.html.bak2"
sed -i'.bak1' "s/LASTUPDATEDPLACEHOLDER/$CURRENT_DATE/" "$CURRENT_DIR/site/fractal_templates/index.html"
sed -i'.bak2' "s/FRACTALWEBREFERENCEPLACEHOLDER/${FRACTAL_WEB_REFERENCE}/" "$CURRENT_DIR/site/fractal_templates/index.html"
rm "$CURRENT_DIR/site/fractal_templates/index.html.bak1" "$CURRENT_DIR/site/fractal_templates/index.html.bak2"

rm -r -f "$WEBDIR"

cd "$CURRENT_DIR/site"
date
python3 -m http.server
