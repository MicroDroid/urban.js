npm run status:pending -- "Lint/Eslint"
npm run status:pending -- "Test/Jest"
npm run lint
[ $? -eq 0 ] && { npm run status:success -- "Lint/Eslint" } || { npm run status:error -- "Lint/Eslint" }
npm run test
[ $? -eq 0 ] && { npm run status:success -- "Test/Jest" } || { npm run status:error -- "Test/Jest" }
