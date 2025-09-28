import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import webpack from "webpack";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

// Resolve React paths dynamically so it works with or without hoisting
const reactPath = path.dirname(require.resolve("react/package.json"));
const reactDomPath = path.dirname(require.resolve("react-dom/package.json"));

// Check for the --fake-stream flag
const fakeStream = process.env.FAKE_STREAM === "true";
console.log(fakeStream);
// Base copy patterns
const baseCopyPatterns = [
  {
    from: "./static/tailwind.js",
    to: "tailwind.js",
  },
  {
    from: "./static/background.js",
    to: "background.js",
  },
  {
    from: "./static/manifest.json",
    to: "manifest.json",
  },
];

// Conditionally add fake_data.json
const copyPatterns = fakeStream
  ? [
      ...baseCopyPatterns,
      {
        from: "./static/fake_data.json",
        to: "fake_data.json",
      },
    ]
  : baseCopyPatterns;

export default {
  mode: "development",
  entry: "./src/App.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].bundle.js",
    clean: true,
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css"],
    alias: {
      react: reactPath,
      "react-dom": reactDomPath,
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/, // Combine TypeScript and JavaScript files in one rule
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      inject: "body",
    }),
    new CopyWebpackPlugin({
      patterns: copyPatterns,
    }),
    new webpack.DefinePlugin({
      FAKE_STREAM: JSON.stringify(fakeStream),
    }),
  ],
  devtool: "source-map",
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3002,
    allowedHosts: "all",
    open: true,
    hot: true,
  },
};
