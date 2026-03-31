#!/bin/bash

set -eu

artifact_path="$1"

current_timestamp="$(date +%s)"
basedir="/tmp/fractal-analytics-platform-$current_timestamp"
echo "Path: $artifact_path"
echo "Base directory: $basedir"

mkdir "$basedir"
cd "$basedir"
cp -v "$artifact_path" "./github-pages.zip"
unzip "github-pages.zip"
tar -xf artifact.tar
python3 -m http.server