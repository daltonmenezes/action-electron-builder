export const pmCommands = {
	npm: {
		install: 'npm install',
		build: (buildScriptName: string) => `npm run ${buildScriptName}`,
		prefix: 'npx --no-install',
	},
	yarn: {
		install: 'yarn',
		build: (buildScriptName: string) => `yarn ${buildScriptName}`,
		prefix: 'yarn run',
	},
	pnpm: {
		install: 'pnpm install',
		build: (buildScriptName: string) => `pnpm run ${buildScriptName}`,
		prefix: 'pnpm exec',
	},
}
