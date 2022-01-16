module.exports = {
  apps: [
    {
      name: "Perfec-Car-DEV",
      script: "./src/index.ts",
      watch: true,
      ignore_watch: ["node_modules", "logs", ".git"],
      out_file: "./logs/output.dev.log",
      merge_lost: true,
      env: { NODE_ENV: "development" },
    },
  ],
};
