import { defineConfig } from 'vite'
import { resolve } from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'

// Use CommonJS require to load glob
const glob = require('glob')

// Function to find all HTML files in the 'src' directory
function getHtmlInputs() {
  const htmlFiles = glob.sync('src/**/index.html')
  const inputs = {}
  htmlFiles.forEach(file => {
    const name = file.replace(/^src\//, '').replace(/\/index\.html$/, '')
    inputs[name] = resolve(__dirname, file)
  })
  return inputs
}

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: getHtmlInputs(),
    },
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
  ],
  server: {
    open: true, // Automatically open the browser
  },
})
