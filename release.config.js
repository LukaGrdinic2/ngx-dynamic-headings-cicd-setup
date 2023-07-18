module.exports = {
    branches: 'main',
    repositoryUrl: 'https://github.com/LukaGrdinic2/ngx-dynamic-headings-cicd-setup',
    plugins: [
      '@semantic-release/commit-analyzer',
      // release-notes-generator and @semantic-release/github should execute after @semantic-release/exec (after the build)
      '@semantic-release/release-notes-generator',
      '@semantic-release/github',
      ["@semantic-release/npm", {
        "npmPublish": false,
        "pkgRoot": "libs/ngx-dynamic-headings"
      }],
      ["@semantic-release/git", {
        "assets": ["libs/ngx-dynamic-headings/package.json"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }],
      [
        "@semantic-release/exec",
        {
          "prepareCmd": "./build.sh"
        }
      ]
    ],
  };
