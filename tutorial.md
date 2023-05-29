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





## Initilizing react

To configure the react, first we need to install the react and some dependencies that we need.

```
npm i react react-dom --save  
npm i -D @types/react @types/react-dom
```

So now we can start to configure the react, lets create a project structure. So create a "src" and "public" folders.

![image](https://github.com/yuri-duque/react_ts_webpack/assets/26638073/aabc6d74-a600-4a90-9ffa-752b3ec6875a)

Now we will create some files that is responsible to do the react work.

### index.html
On the `public` folder, we need to create a "index.html" file with this content:

file name: `index.html`

```
<!DOCTYPE  html>
<html  lang="en">
	<head>
		<title><%= htmlWebpackPlugin.options.title %></title>
	</head>
	<body>
		<div  id="root"></div>
	</body>
</html>
```

### index.tsx
On the `src` folder, we need create a main file from our project:

file name: `index.tsx`

```
import React from "react";  
import ReactDOM from "react-dom";  
  
import App from "./App";  
  
ReactDOM.render(<App />, document.getElementById("root"));
```

### App.tsx
On the `src` folder, we need to create a simple react component:

file name: `App.tsx`

```
import React from "react";

const App = () => {
	return (
		<div>
			Test App
		</div>
	);
};

export default App;
```

In the end we will have this files:

![image](https://github.com/yuri-duque/react_ts_webpack/assets/26638073/14e513b7-73a1-459f-9171-e40eb671be13)




















