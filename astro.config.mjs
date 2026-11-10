import { defineConfig } from 'astro/config';
export default defineConfig({ site: 'https://jichangxuncha.blog', redirects: { '/vps/': '/catagory/vps/', '/category/vps/': '/catagory/vps/', '/subscriptions/': '/tools/', '/vps/vps-vs-vpn/': '/vps/vps-vs-web-hosting/', '/vps/vps-proxy-server/': '/vps/reverse-proxy/' }, devToolbar: { enabled: false } });
