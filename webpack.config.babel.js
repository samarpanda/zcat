import {join} from 'path'

const context = join(__dirname, 'src')

export default {
  context,
  entry: './index.js',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'z-categories'
  },
  devtool: 'source-map',
  externals: [],
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel-loader'], include: context},
      {test: /\.json$/, loaders: ['json-loader'], include: context}
    ]
  }
}