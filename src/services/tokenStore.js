const ACCESS_KEY = "accessToken";
const REFRESH_KEY = "refreshToken";
const USER_KEY = "user";

export const tokenStore = {

    // GET ACCESS TOKEN
    getAccess: () => {
        return localStorage.getItem(ACCESS_KEY);
    },

    // GET REFRESH TOKEN
    getRefresh: () => {
        return localStorage.getItem(REFRESH_KEY);
    },

    // GET USER
    getUser: () => {
        const raw = localStorage.getItem(USER_KEY);
        return raw ? JSON.parse(raw) : null;
    },

    // SAVE DATA
    set: ({ accessToken, refreshToken, user }) => {
        if (accessToken) {
        localStorage.setItem(ACCESS_KEY,accessToken)
        }
        if (refreshToken) {
            localStorage.setItem(REFRESH_KEY,refreshToken)
        }

        if (user) {
            localStorage.setItem(USER_KEY,JSON.stringify(user))
        }
    },

    // CLEAR DATA
    clear: () => {
        localStorage.removeItem(ACCESS_KEY);
        localStorage.removeItem(REFRESH_KEY);
        localStorage.removeItem(USER_KEY);
    },
};