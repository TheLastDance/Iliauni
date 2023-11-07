# Iliauni Acceleration Program Test Task

This project is as part of the Iliauni Acceleration Program. My main focus wasn't just to follow the project instructions to the letter, but also to learn and experiment with different methods and approaches. That's why I tried out various solutions and added extra elements for practice purposes.

## Tech Stack

- Javascript
- React
- CSS
- Vite
- React Router DOM

 ### Other Libraries:
- [react-outside-click-handler](https://www.npmjs.com/package/rc-pagination) - For easily handling clicks outside the component or block
- [rc-pagination](https://www.npmjs.com/package/react-outside-click-handler) - Builds visual side of pagination

## Main functionality

- Sign in / Log out implementation abstraction with localStorage
- `HOC's` for private routing handling
- `UsePaginate` custom hook for avoiding repeatable logic and make pagination usage easier
- `UseToggle` custom hook for easier toggling throughout the app
- `React Portal` for log out popup overlay
- `FileReader` usage for reading uploaded files
- NotFoundPage for pages that don't exist
- `UseSearchParams` usage for `form` path and component which saves filtering parametres inside url so we can save path and use already filtered data in future
- `useParams` usage for `api` path and component which gaves us opportunity to use any page of pagination as different url
- If urls with parametres inside `form` or `api` don't exist user will see default pages of these urls
- Fully responsive web design
- Added fonts
- `HashRouter` usage only for deployment purposes to be able to use SPA routing. Also added few fixes inside `usePaginate hook` to make behave HashRouter similarly to BrowserRouter
- Sorting functionality inside `Table component`
- `DropDown HOC` for reusability
- Better optimisation with `React.memo HOC` and `useCallback hook` where needed
- added `title` and `meta description` for seo optimisation

## Run project
1. Install dependencies - `npm install`
2. Start the project - `npm run dev`
