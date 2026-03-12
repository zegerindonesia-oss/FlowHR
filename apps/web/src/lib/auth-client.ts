import { createAuthClient } from "better-auth/react"
const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

export const authClient = createAuthClient({
    baseURL: isLocalhost ? "http://localhost:3001" : "https://flowhr-pts0.onrender.com"
})
