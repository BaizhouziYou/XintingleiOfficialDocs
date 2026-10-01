#!/usr/bin/env bash
set -euo pipefail

base=$(realpath -e -- "${1:?Deployment directory required}")
id=${2:?Release ID required}
[[ "$base" != / && -f "$base/.docs-deploy-root" ]]
[[ "$id" =~ ^([1-9][0-9]*)-([1-9][0-9]*)-[a-f0-9]{40}$ ]]
number=${BASH_REMATCH[1]}
attempt=${BASH_REMATCH[2]}
release="$base/releases/$id"
[[ -f "$release/index.html" && -d "$release/assets" && ! -L "$release" ]]

exec 9>"$base/.deploy.lock"
flock -x 9
if [[ -e "$base/current" && ! -L "$base/current" ]]; then
  echo 'Refusing to replace current: it is not a symlink.' >&2
  exit 1
fi
if [[ -L "$base/current" ]]; then
  previous=$(readlink -- "$base/current")
  [[ "$previous" =~ ^releases/([1-9][0-9]*)-([1-9][0-9]*)-[a-f0-9]{40}$ ]]
  if (( number < BASH_REMATCH[1] || (number == BASH_REMATCH[1] && attempt < BASH_REMATCH[2]) )); then
    echo 'Refusing to deploy an older build over a newer build.' >&2
    exit 1
  fi
  # Keep hashed chunks available to tabs opened before the deployment.
  # ponytail: assets accumulate; prune during a planned cache reset if disk usage becomes significant.
  if [[ -d "$base/current/assets" && "$previous" != "releases/$id" ]]; then
    rsync -a --ignore-existing "$base/current/assets/" "$release/assets/"
  fi
fi
ln -s -- "releases/$id" "$base/.current-$id"
mv -Tf -- "$base/.current-$id" "$base/current"
echo "Activated build $number.$attempt"
