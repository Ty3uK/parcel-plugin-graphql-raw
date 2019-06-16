module.exports = function(bundler) {
  bundler.addAssetType('graphql', require.resolve('./GraphqlRawAsset'));
  bundler.addAssetType('gql', require.resolve('./GraphqlRawAsset'));
}
