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
	},
	// Build optimization configuration
	build: {
		// Optimize for production bundle
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true, // Remove console.log in production
				drop_debugger: true // Remove debugger statements
			}
		},
		// Configure rollup for code splitting and chunking
		rollupOptions: {
			output: {
				manualChunks: {
					// Split vendor libraries into separate chunks for better caching
					'vendor': [
						'react',
						'react-dom',
						'react-router-dom'
					]
				}
			}
		},
		// Reporting compression stats
		reportCompressedSize: true,
		// Chunk size warnings
		chunkSizeWarningLimit: 500
	},
	// Optimize CSS
	css: {
		postcss: {
			plugins: [
				{
					postcssPlugin: 'internal:charset-removal',
					Once(root) {
						root.walkAtRules('charset', (rule) => {
							if (rule.parent.type === 'root' && rule !== root.first) {
								rule.remove();
							}
						});
					}
				}
			]
		}
	}
})
