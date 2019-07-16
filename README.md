# m-js

An ad-hoc backend for javascript to the [M](https://github.com/m-language/m-compiler) programming language.

Note: *under development, breaking changes daily*

## Project Layout

The core compiler is written in `src`, and the runtime files reside in `runtime/`.

## Installation

```bash
git clone https://github.com/[mjs-repo] mjs
cd mjs
npm build
npm link
```

## Usage

`m-js` can compile a subset of M known as "minified M". This subset of M has the following restrictions:

 * No macros
 * No dependency resolution
 * No multi-argument functions
 * No out-of-order functions

While this seems restrictive, the [m compiler](https://github.com/m-language/m-compiler) can take any input M program
and produce a file that follows the restrictions outlined above. If you are compiling the compiler itself with this
backend, you can simply run

```bash
mjs bootstrap [COMMIT-OR-BRANCH]
```

which will download the minified M file associated with either the branch or the commit SHA of the m compiler repo and compile it to javascript.

Otherwise, you can run

```bash
mjs build <file>
```

which will compile `<file>` to `<file>.js`.

## Restrictions

Currently the target is supporting the node runtime, but support for browser-based environments is planned. This project may be merged into
the [m-language](https://github.com/m-language) organization sometime in the near future and completely rewritten, so breaking updates are more
than likely.