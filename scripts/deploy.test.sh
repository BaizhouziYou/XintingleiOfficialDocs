#!/usr/bin/env bash
set -euo pipefail

# Isolated Linux filesystem check; does not connect to the deployment server.
temp=$(mktemp -d)
trap 'rm -rf -- "$temp"' EXIT
base="$temp/site"
mkdir -p "$base/releases"
touch "$base/.docs-deploy-root"
sha=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
activate="$(dirname "$0")/activate-release.sh"
for number in 1 2; do
  mkdir -p "$base/releases/$number-1-$sha/assets"
  printf '%s' "$number" > "$base/releases/$number-1-$sha/index.html"
  printf '%s' "$number" > "$base/releases/$number-1-$sha/assets/$number.js"
  bash "$activate" "$base" "$number-1-$sha"
done
[[ "$(cat "$base/current/index.html")" == 2 ]]
[[ -f "$base/current/assets/1.js" && -f "$base/current/assets/2.js" ]]
if bash "$activate" "$base" "1-1-$sha"; then exit 1; fi
if bash "$activate" "$base" "3-1-$sha"; then exit 1; fi
[[ "$(cat "$base/current/index.html")" == 2 ]]
unlink "$base/current"
mkdir "$base/current"
if bash "$activate" "$base" "2-1-$sha"; then exit 1; fi
[[ -d "$base/current" && ! -L "$base/current" ]]
if bash "$activate" "$base" '../escape'; then exit 1; fi
echo 'Deployment safety checks passed.'
