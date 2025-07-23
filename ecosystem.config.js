module.exports = {
  apps: [
    {
      name: 'cyberlife-front',
      script: 'pnpm',
      args: 'start',
      output: '/dev/stdout',
      error: '/dev/stderr',
      merge_logs: true,
      autorestart: true,
    },
  ],
};
