module.exports = {
    branches: 'main',
    repositoryUrl: 'https://github.com/Organization-Luka-Grdinic-2/ngx-dynamic-headings-cicd-setup.git',
    plugins: [
      '@semantic-release/commit-analyzer',
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
