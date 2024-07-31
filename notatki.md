# VsCode
View -> Terminal
Help -> About

node -v 
v18.20.3

npm -v
10.7.0

git -v 
git version 2.43.0.windows.1

code -v 
1.91.0

# Vite
npm create vite@latest
npm install
npm run dev

# GIT
git clone https://bitbucket.org/ev45ive/sages-reac-open-lipiec.git

F1 -> Git Clone -> Paste:
https://bitbucket.org/ev45ive/sages-reac-open-lipiec.git
Clone from URL -> Select location


# React Canvas/SVG
https://konvajs.org/docs/react/

# Componentns
https://mui.com/system/getting-started/installation/
https://v2.chakra-ui.com/docs/components/tabs/usage
https://primereact.org/calendar/#format

# Headless
https://headlessui.com/react/menu
https://tailwindcss.com/

# Tailwind
https://tailwindcss.com/docs/guides/vite

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Tailwind forms
https://github.com/tailwindlabs/tailwindcss-forms

# Extensions
Ctrl+Shift+X

ES7+ React/Redux/React-Native snippets ~ dsznajder
https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

Prettier - Code formatter 
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

Tailwind CSS IntelliSense ~ Tailwind Labs
https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

{
    "tailwindCSS.emmetCompletions": true,
}

Paste JSON as Code - quicktype
https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype

# React dev tools
https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

# Playlists 

mkdir -p src/core/
mkdir -p src/components
mkdir -p src/containers

-- 

mkdir -p src/common/components

mkdir -p src/playlists/components
mkdir -p src/playlists/containers

touch src/playlists/containers/PlaylistsView.tsx

touch src/playlists/components/PlaylistList.tsx
touch src/playlists/components/PlaylistDetails.tsx
touch src/playlists/components/PlaylistEditor.tsx


# Redux toolkit
https://redux-toolkit.js.org/tutorials/typescript

https://immerjs.github.io/immer/


# Album Search

mkdir -p src/albums/components
mkdir -p src/albums/containers

touch src/albums/containers/AlbumSearchView.tsx
touch src/albums/containers/AlbumDetailView.tsx

touch src/albums/components/SearchForm.tsx
touch src/albums/components/ResultsGrid.tsx
touch src/albums/components/AlbumCard.tsx

## The Loop - Jake Archibald
https://www.youtube.com/watch?v=cCOL7MC4Pl0&ab_channel=JSConf
https://www.youtube.com/watch?v=8aGhZQkoFbQ&ab_channel=JSConf


# Functional concepts

- Immutability
- Pure Functions
- Referential transparency 
- Memoization ( cache )


# Functional structures

- Magma
- Semigroup
- Monoid
- Group
- Functor
- Apply / Applicative
- Monad

- Lattice
- Ord
- Poset
- Lenses


https://learnyouahaskell.com/ 


# Ky / Axios / etc..

https://medium.com/@muzammilsyed270300/why-you-should-use-ky-instead-of-axios-for-http-requests-in-your-frontend-2c7878be3b30

https://github.com/sindresorhus/ky

https://axios-http.com/docs/intro


# Eslint - Warnings in Yellow
```json
    "eslint.rules.customizations": [
        {
            "rule": "*",
            "severity": "warn"
        }
    ],
```

# Hooks
https://usehooks.com/usedebounce
https://use-http.com/#/
https://swr.vercel.app/

https://tanstack.com/query/latest

https://tkdodo.eu/blog/practical-react-query

# Build

npm run build

> vite-project@0.0.0 build
> tsc -b && vite build

vite v5.3.5 building for production...
✓ 122 modules transformed.
dist/index.html                                0.46 kB │ gzip:   0.30 kB
dist/assets/Inter-roman.var-e-DsT6iu.woff2   410.67 kB
dist/assets/Inter-italic.var-C0P-kdXT.woff2  443.55 kB
dist/assets/PlaylistsView-PMi95QX9.css         0.06 kB │ gzip:   0.07 kB
dist/assets/index-eA82Jc1s.css               195.29 kB │ gzip:  22.61 kB
dist/assets/PlaylistsView-C3FcaiuJ.js         27.45 kB │ gzip:  10.25 kB
dist/assets/index-BvOaEU2Z.js                356.72 kB │ gzip: 109.53 kB
✓ built in 4.33s

