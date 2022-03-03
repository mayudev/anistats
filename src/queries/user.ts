// Returns more user data based on its name.
// It's necessary, since while you may request user's list using the username, you can't do the same with activities (used in mediaQuery.)
// Along with it, it fetches user's profile picture to display it and make the site prettier, because why not.
export const userQuery: string = `query ($username: String) {
    User (name: $username) {
      id
      name
      avatar {
        medium
      }
    }
  }`;
