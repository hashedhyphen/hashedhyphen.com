#!/bin/bash -ex
# SSH_PORT, SSH_USER, SSH_HOST are defined by CircleCI configuration.

BUNDLE_FILE_NAME="bundle.tar.gz"

yarn export
tar czf "${BUNDLE_FILE_NAME}" out

scp \
  -o StrictHostKeyChecking=no \
  -P "${SSH_PORT}" \
  "${BUNDLE_FILE_NAME}" "${SSH_USER}@${SSH_HOST}:/tmp"

ssh \
  -o StrictHostKeyChecking=no \
  -p "${SSH_PORT}" \
  "${SSH_USER}@${SSH_HOST}" \
  /apps/scripts/deploy.sh
