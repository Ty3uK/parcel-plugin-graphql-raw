const Bundler = require('parcel');

class GraphqlRawAsset extends Bundler.Asset {
  constructor(name, options) {
    super(name, options);
    this.type = 'js';
  }

  generate() {
    return [{
      type: 'js',
      value: `module.exports=${JSON.stringify(this.contents)}`
    }];
  }
}

module.exports = GraphqlRawAsset;
