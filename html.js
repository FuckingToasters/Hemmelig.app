// This is where the modification of the html has to be done
export default `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Paste & File Upload Website.</title>

        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <link rel="manifest" href="/manifest.json" />
        <!-- Primary Meta Tags -->
        <meta name="title" content="Paste a password, confidential message, or private data." />
        <meta
            name="description"
            content="Ensure your sensitive data remains encrypted, secure, and confidential."
        />

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://share.vbucksgenerator.zip/" />
        <meta
            property="og:title"
            content="Paste a password, confidential message, or private data."
        />
        <meta
            property="og:description"
            content="Ensure your sensitive data remains encrypted, secure, and confidential."
        />
        <meta property="og:image" content="/icons/icon-512x512.png" />

        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://share.vbucksgenerator.zip/" />
        <meta
            property="twitter:title"
            content="Paste a password, confidential message, or private data."
        />
        <meta
            property="twitter:description"
            content="Ensure your sensitive data remains encrypted, secure, and confidential."
        />
        <meta property="twitter:image" content="/icons/icon-512x512.png" />

        <meta name="theme-color" content="#231e23" />

        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/icons/maskable-icon-192x192.png" />
        <script>
            try {
                window.__SECRET_CONFIG = {{config}}
            } catch (e) {
                window.__SECRET_CONFIG = '';
            }
            
        </script>
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>

        <script type="module" src="/src/index.jsx"></script>
    </body>
</html>
`;
