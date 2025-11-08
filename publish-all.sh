#!/usr/bin/env bash
set -e

# === CONFIGURATION ===
# Path to your react-color monorepo root
REPO_PATH="C:/Users/danyo/react-color"
# Path to your consumer project (timer)
CONSUMER_PATH="C:/Users/danyo/timer"

# === BUILD PHASE ===
echo "📦 Building all packages in react-color..."
cd "$REPO_PATH"
pnpm -r build

# === YALC PUBLISH PHASE ===
echo "🚀 Publishing all workspace packages to yalc..."
pnpm -r exec yalc publish

# === CONSUMER UPDATE PHASE ===
echo "🔗 Linking published packages in consumer project..."
cd "$CONSUMER_PATH"

# Check if yalc is installed
if ! command -v yalc &> /dev/null; then
  echo "⚠️  yalc not found. Install with: npm install -g yalc"
  exit 1
fi

# Add or update packages from react-color
# This command will add/update *all* yalc packages you've published.
yalc update || true

echo "✅ Done! All react-color packages are now linked in $CONSUMER_PATH"
echo "💡 Tip: Run this script again after making any changes in react-color."
