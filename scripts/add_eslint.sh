#!/bin/zsh
# add_eslint.sh
# Install ESLint + Prettier + globals

npm install --save-dev eslint eslint-config-prettier prettier globals @eslint/js jest eslint-plugin-jest eslint-plugin-prettier

# Copy template config into current project
# (make sure ~/eslint-templates/eslint.config.mjs exists first)
cp ~/eslint-templates/eslint.config.mjs ./eslint.config.mjs

echo "✅ ESLint + Prettier installed"
echo "✅ eslint.config.mjs copied into project"
