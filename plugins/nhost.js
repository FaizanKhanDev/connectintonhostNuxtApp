import { NhostClient } from '@nhost/vue';

export default function ({ app }) {
    const nhost = new NhostClient({
        subdomain: process.env.VITE_NHOST_SUBDOMAIN,
        region: process.env.VITE_NHOST_REGION,
    });

    app.nhost = nhost;
}
