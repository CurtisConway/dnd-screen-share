module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dnd-screen-share/'
    : '/',
  lintOnSave: false,
};
