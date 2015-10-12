# project stub for PostHTML

## Install 
```
git clone git@github.com:posthtml/project-stub.git my-project
cd my-project
git checkout posthtml-static-react && npm i
```

Since the example code uses [JSX](https://facebook.github.io/jsx/) it needs to be transpiled.

Either by runtime:

```
babel-node .
```

... or by precompilation:

```
babel index.js -o index-compiled.js && node index-compiled.js
```

It can be orchestrated through various build tools (gulp/grunt/webpack) - but they probably all use babel under the hood.