import typescript from "rollup-plugin-typescript2";
const ts = {declarationDir:'dec',useTsconfigDeclarationDir :false,declaration:true}
export default [
	{
		output: {
			file: "./build/index.js",
			format: "umd",
			name: "ReactAwesomeDate"
		},
		input: "./src/index.ts",
		plugins: [typescript(ts)],
		external: ["react"],
		globals: {
			react: "React"
		}
	}
];
