Symlinks with vite.js
=====================

In my build environment, I have two repositories, a core repository, used across 
all customers and a custom repository built for each customer.

I symbolically link a workspace from the custom repository to the core
repository. This comes from outside of the core folder.

In vue-cli this works OK. In vite, the external, symbolically linked folder
cannot find it's dependencies.

::

        $ npm run build

        > workspace-a@0.0.0 build
        > vite build

        vite v2.0.5 building for production...
        5 modules transformed.
        [vite]: Rollup failed to resolve import "vue" from "../../custom/workspace-c/index.js".
        This is most likely unintended because it can break your application at runtime.
        If you do want to externalize this module explicitly add it to
        `build.rollupOptions.external`
        error during build:
        Error: [vite]: Rollup failed to resolve import "vue" from "../../custom/workspace-c/index.js".
        This is most likely unintended because it can break your application at runtime.
        If you do want to externalize this module explicitly add it to
        `build.rollupOptions.external`
            at onRollupWarning (/srv/symlink-test/core/node_modules/vite/dist/node/chunks/dep-e0f09032.js:46671:19)
            at Object.onwarn (/srv/symlink-test/core/node_modules/vite/dist/node/chunks/dep-e0f09032.js:46521:17)
            at Object.onwarn (/srv/symlink-test/core/node_modules/rollup/dist/shared/rollup.js:19687:20)
            at ModuleLoader.handleResolveId (/srv/symlink-test/core/node_modules/rollup/dist/shared/rollup.js:18436:26)
            at /srv/symlink-test/core/node_modules/rollup/dist/shared/rollup.js:18403:22
            at async Promise.all (index 0)
            at async ModuleLoader.fetchStaticDependencies (/srv/symlink-test/core/node_modules/rollup/dist/shared/rollup.js:18401:34)
            at async Promise.all (index 0)
            at async ModuleLoader.fetchModule (/srv/symlink-test/core/node_modules/rollup/dist/shared/rollup.js:18378:9)
            at async Promise.all (index 3)
            at async ModuleLoader.fetchStaticDependencies (/srv/symlink-test/core/node_modules/rollup/dist/shared/rollup.js:18401:34)
            at async Promise.all (index 0)
            at async ModuleLoader.fetchModule (/srv/symlink-test/core/node_modules/rollup/dist/shared/rollup.js:18378:9)
            at async Promise.all (index 1)
            at async ModuleLoader.fetchStaticDependencies (/srv/symlink-test/core/node_modules/rollup/dist/shared/rollup.js:18401:34)
            at async Promise.all (index 0)

How to reproduce this.

::

        git clone XXXXX

        cd XXXX/core

        npm install

        cd workspace-a

        npm run build
