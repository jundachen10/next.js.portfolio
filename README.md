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

## Things I Learned
- Using a personal access token for github sats on Vercel by environment variables.
- Locally scoped CSS classes to improve maintainabilty and avoid naming conflicts using module.css files.
- Globally passing stuff through _app.js file. This was especially important with implementing dark mode.
- Dark mode was interesting in that I used an external libary called next-themes. This required me wrapping the entire application with the proper tags through the _app.js file.
- React components by factoring out functioning pieces like the github stats blocks. This in addition to the navigation menu are separate modules called into the index file by their component tags. This helps ease maintaining the code and for other to read as they are in a different .js file.
