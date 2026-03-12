import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://flowhr-pts0.onrender.com" // live Render backend
})
