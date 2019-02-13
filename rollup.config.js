import buble from "rollup-plugin-buble";
import { terser } from "rollup-plugin-terser";

export default [
	{
		input: 'src/index.js',
		plugins: [
			buble()
		],
		output: {
			file: './dist/index.js',
			format: 'cjs'
		}
	},
	{
		input: 'src/index.js',
		plugins: [
			buble(),
			terser(),
		],
		output: {
			file: './dist/joinjs.min.js',
			name: 'joinjs',
			format: 'umd',
			esModule: false,
		}
	},
];