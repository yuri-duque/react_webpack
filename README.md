# Minimal react typescript webpack

Hi! In this project I created a minimal setup for a react project with typescript.

## Features
- React 18
- Typescript 4
- Webpack 5
- Hot module replacement
- Clean webpack plugin 4

## Installation
- clone the project: ```git clone git@github.com:yuri-duque/react_ts_webpack.git```
- go to project root: ```cd react_ts_webpack```
- install dependencies: ```npm install```
- run project: ```npm run start```


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



## Initializing webpack

### Add dependencies
To start to configure webpack we need install many dependencies, so execute this command to install it:

```
npm i -D webpack webpack-cli webpack-dev-server @types/node @types/webpack @types/webpack-dev-server
```

### Creating a webpack config
To configure a webpack we need to have a file with all configurations, to inform to browser where is the packs with the js and html, and another things.

So create a `webpack.config.ts` file.

file name: `webpack.config.ts`
```
import webpack, {Configuration} from "webpack";

const webpackConfig = (env): Configuration => ({
});

export default webpackConfig;
```

###  Configuring the entry file

The first step for webpack config, we need to set the entry point, what file the webpack will analyse to compile. In our case we will set the `src/index.tsx`.

file name: `webpack.config.ts`
```
...
const webpackConfig = (env): Configuration => ({
  entry:  path.resolve(__dirname, './src/index.tsx'),
});
...
```

### Configuring the module
On the webpack we need configure the a module section, that the webpack use loaders to build files by modules. 


**babel**

On module that we will use is the babel, to configure, first we need install some dependencies:

```
npm i -D babel-loader @babel/plugin-proposal-class-properties @babel/preset-env @babel/preset-react @babel/preset-typescript
```

After install the dependencies we need to crete a `.babelrc` file, and set some configs

file name: `.babelrc` 
```
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-typescript",
        "@babel/preset-react"
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties"
    ]
}
```

And now we need configure the webpack to use the babel.

file name: `webpack.config.ts`
```
const  webpackConfig  = (env):  Configuration  => ({
...
	module: {
	   rules: [
	     {
	       test: /\.(js|jsx|tsx|ts)$/,
	       exclude: /node_modules/,
	       use: ['babel-loader'],
	     },
	   ],
	 },
...
});
```

### Configure plugins

On the webpack we have a plugin section, in this example we will use some plugins:

**html-webpack-plugin**
This plugins is responsable to simplify the criation for html files.

`npm i -d html-webpack-plugin`

file name: `webpack.config.ts`
```
const  webpackConfig  = (env):  Configuration  => ({
...
	plugins: [
	   new HtmlWebpackPlugin({
	     template: path.resolve(__dirname, './public/index.html'), 
	   }),
	 ],
...
});
```


**clean-webpack-plugin**

**HotModuleReplacementPlugin**

**tsconfig-paths-webpack-plugin**


asdasd


asd


asd
