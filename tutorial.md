# Creating a minimal react typescript with webpack

Hi! In this document, I created a tutorial to show how to create a project with a minimal setup for a typescript react project with webpack.

## Initializing a npm

Basically, here we will create a minimal react project with typescript, to start we need to initialize a npm in the directory.

```npm init -y```

after this we will create a gitignore, you can copy the following content:

file name: `.gitignore`
```
./node_modules
/.pnp
.pnp.js
/coverage
/build
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
/dist
```

In the end we will have these files: 

![image](https://github.com/yuri-duque/react_ts_webpack/assets/26638073/bafefb21-dedf-4623-8c4d-7fb01f3daf73)


## Initializing typescript

Before we configure a react project we will initialize a typescript in our project, só to start we need to install the typescript with this command:

```
npm i -D typescript
```

After installation we need to create a `tsconfig.json` file that will have the compiler options from typescript.

file name: `tsconfig.json`
```
{  
	"compilerOptions": {  
		"sourceMap": _true_,  
		"noImplicitAny": _false_,  
		"module": "commonjs",  
		"target": "es5",  
		"lib": [  
			"esnext",  
			"dom",  
			"dom.iterable"  
		],  
		"removeComments": _true_,  
		"allowSyntheticDefaultImports": _true_,  
		"jsx": "react",  
		"allowJs": _true_,  
		"baseUrl": "./",  
		"esModuleInterop": _true_,  
		"resolveJsonModule": _true_,  
		"moduleResolution": "node",  
		"downlevelIteration": _true_,  
		"paths": {  
			"components/*": [  
				"src/components/*"  
			]  
		}  
	},  
	"include": [  
		"./src",  
		"./webpack.config.ts"  
	]  
}
```

We will have some errors in this file, but it will be fixed in the next steps.





















