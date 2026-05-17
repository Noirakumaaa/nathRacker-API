module.exports = {
  apps: [
    {
      name: 'nathracker-api-staging',
      script: './dist/src/main.js',
      env: {
        NODE_ENV: 'staging',
        PORT: 3001,
      },
    },
    {
      name: 'nathracker-api',
      script: './dist/src/main.js',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
      },
    },
    {
      name: 'cloudflared',
      script: 'cloudflared',
      args: 'tunnel run nathracker',
      interpreter: 'none',
      autorestart: true,
    },
  ],
};
