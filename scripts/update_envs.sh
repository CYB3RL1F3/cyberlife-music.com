#!/bin/bash
set -e

# Load environment variables from .env if it exists.
if [ -f ".env" ]; then
  export $(grep -v '^#' .env | xargs)
fi

# Check required environment variables.
if [ -z "$SSH_FOLDER" ]; then
  echo "Error: SSH_FOLDER is not defined in the environment variables."
  exit 1
fi

if [ -z "$SSH_HOST" ] || [ -z "$SSH_USER" ] || [ -z "$SSH_PRIVATE_KEY" ]; then
  echo "Error: SSH_HOST, SSH_USER, and SSH_PRIVATE_KEY must be defined in the environment variables."
  exit 1
fi

SSH_PORT=${SSH_PORT:-22}

# Define applications array
src="$(pwd)"
echo "Current directory: $src"

for env in "staging" "prod"; do
  folder="$SSH_FOLDER/$env/cyberlife-front"
  dest_path="$SSH_USER@$SSH_HOST:$folder"
  scp -i "$SSH_PRIVATE_KEY" -P "$SSH_PORT" "./.env.$env" "$dest_path/.env"
done

echo "All files copied successfully."
