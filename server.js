import { createServer } from "miragejs"

/**
 * Mock Server for Luxury Auto Care Website
 *
 * Currently only provides passthrough for external services.
 * Future integrations:
 * - Squarespace Scheduling API
 */
createServer({
    routes() {
        this.namespace = "api"
        this.logging = false

        // Passthrough for external services
        this.passthrough("https://acuityscheduling.com/**")  // Squarespace Scheduling
    }
})