Thank you for reading this, as I try to document everything about my website.

## 🛠️ Tech Stack

- [React.js](https://www.reactjs.org/)
- [Next.js](https://nextjs.org/)
- [next-themes](https://www.npmjs.com/package/next-themes) for dark mode

## 👀 Features
- Dark mode
- live github stats by [githubreadme stats](https://github.com/anuraghazra/github-readme-stats)

## To Do's
- add pages for all the links
- fix bottom social link alignment
- design a new dark mode button
- make dark mode less dark
- refactor everything
- add custom domain name

## Things I Learned
- Utilized a personal access token for GitHub stats on Vercel using environment variables.

- Enhanced code maintainability by using locally scoped CSS classes, managed through module.css files to prevent naming conflicts.

- Using the _app.js file, crucial for features like dark mode.

- Utilized the external library "next-themes" for dark mode functionality, requiring wrapping the entire application with appropriate tags in the _app.js file.

- Improved code organization by breaking down React components into separate modules, such as GitHub stats blocks and the navigation menu. These modules are then called into the index file using component tags, making the code easier to maintain and read as they reside in separate .js files.

## Updates
### September 14 23
- installed vercel/analytics 'npm i @vercel/analytics'
- wrapped _app.js with <Analytics /> tag
