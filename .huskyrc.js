function cp(target, dest) {
  return [`cp ${target} ${dest}`, `git add ${dest}`];
}

function precommit(...workspaces) {
  return workspaces.map(
    (workspace) => `yarn workspace ${workspace} run precommit`,
  );
}

module.exports = {
  hooks: {
    'pre-commit': [
      // auto source import every markdown documents
      // @see https://www.npmjs.com/package/@handbook/markdown-source-import
      `markdown-source-import README.md --git-add`,
      ...cp('README.md', 'packages/src/@rocket-scripts/openapi/README.md'),
      // see "lint-staged" on "package.json"
      `lint-staged`,
      // run workspaces precommit hook
      //...precommit(`source`),
    ].join(' && '),
  },
};
