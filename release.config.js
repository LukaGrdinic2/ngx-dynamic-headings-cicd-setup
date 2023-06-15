module.exports = {
    branches: 'main',
    repositoryUrl: 'https://github.com/LukaGrdinic/ngx-dynamic-headings',
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      [
        '@semantic-release/github',
        {
          assets: [
            { path: 'build.zip', label: 'Build' },
            { path: 'coverage.zip', label: 'Coverage' },
          ],
        },
      ],
      ["@semantic-release/npm", {
        "npmPublish": false,
        "pkgRoot": "libs/ngx-dynamic-headings"
      }]
    ],
  };
