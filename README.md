# ClayUi/nav TypeScript Build Bug

## Overview

This repo demonstrates that `clayui/nav` appears to be triggering the TypeScript bug
described [here](https://github.com/microsoft/TypeScript/issues/41883);

Basically, the bug is that under some build conditions, a TypeScript package can cause the
project using it to apply it's own `tsconfig.json` to the package, which will often cause
build errors if there are differences between the project's `tsconfig` and the package's
`tsconfig`.

In this example, we provide two `tsconfig.json` files -- one with a very strict set of rules
and one with the most lax set of rules. We can run each project by running the following
commands:

- strict: `npm run start:strict`
- lax: `npm run start:lax`

When we run either one, we can see that building the `clayui/nav` package triggers build errors.
Both versions trigger build errors from within the `clayu/nav` package, but the lax version
triggers far fewer errors, which establishes that this problem is responsive to changes in
the project's `tsconfig`.

The expected behavior of using dependencies built with TypeScript is that the main project's
`tsconfig` should not impact the build of a dependency and a dependency should not be able
to break the parent's build. Nonetheless, we see this problem with `clayui/nav` but not with
other `clayui` packages that we have tested.
