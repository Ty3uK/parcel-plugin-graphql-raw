const path = require('path');
const fs = require('fs').promises;
const Bundler = require('parcel');
const wrapWithPlugin = require('../index');

const assetsFolder = path.join(__dirname, '../__tests_assets__');
const distFolder = path.join(assetsFolder, '__dist__');

const getBundler = (entryFiles) => {
  const bundlerInstance = new Bundler(entryFiles, {
    outDir: path.join(assetsFolder, '__dist__'),
    target: 'node',
    sourceMaps: false,
    cache: false,
    hmr: false,
    watch: false,
    logLevel: 0
  });

  // wrapWithPlugin(bundlerInstance);

  return bundlerInstance;
};

test('Basic graphql import', async () => {
  await getBundler([path.join(assetsFolder, 'simple.js')]).bundle();

  const targetResult = await fs.readFile(path.join(assetsFolder, 'simple.gql'));
  const result = require(path.join(distFolder, 'simple.js')).default;

  expect(result).toBe(targetResult.toString());
}, 15000);
