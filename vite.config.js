import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
	plugins: [
		react()
	],
	server: {
		middlewareMode: false,
		headers: {
			// Content Security Policy
			'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none'; base-uri 'self'; form-action 'self'",
			// Additional security headers
			'X-Content-Type-Options': 'nosniff',
			'X-Frame-Options': 'DENY',
			'X-XSS-Protection': '1; mode=block',
			'Referrer-Policy': 'strict-origin-when-cross-origin',
			'Permissions-Policy': 'geolocation=(), microphone=(), camera=()'
		}
	}
})
