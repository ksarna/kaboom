const config = {
  tabs: [
    {
      // `title` is ignored by ttab when using with iterm2
      // Good to have for description
      title: "api",

      // The path that will be opened in this window
      path: "~/workspace/api",

      // This commands will be exectued rigth after entering the path above
      commands: [". env/bin/activate", "echo 'AMAZING!'"],

      // This splits the window
      splits: [
        {
          // Again, title is ignored
          title: "Logs",

          // Optional path for this split.
          // Leave blank if you want same directory as declared for the window
          path: "./logs",
          commands: ["tail -f development.log"]
        }
      ]
    },
    {
      title: "RN-breakthrough-app",
      path: "~/workspace/breakthrough",
      splits: [
        {
          title: "logger"
        },
        {
          title: "metro"
        }
      ]
    }
  ]
};

module.exports = {
  ...config
};
