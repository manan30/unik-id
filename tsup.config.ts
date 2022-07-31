import { defineConfig } from 'tsup';

export default defineConfig({
	clean: true,
	dts: true,
	entry: ['index.ts'],
	legacyOutput: true,
	minify: true,
	outDir: 'dist',
	format: ['cjs', 'esm']
});
