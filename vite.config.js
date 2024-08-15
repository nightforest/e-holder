import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"
import path, { resolve } from "path"
import fs from 'fs'

const options = { pretty: true } // FIXME: pug pretty is deprecated!
const locals = { name: "My Pug" }

let input = {}
const camelize = (str) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}
fs.readdirSync(__dirname).map((file) => {
    const filename = path.join(__dirname, file);
    const stat = fs.lstatSync(filename);
    if (stat.isDirectory() || !filename.match(/\.html$/)) {
        return
    }
    const name = camelize(file.replace(/\.html$/, ''))
    input[name] = filename
})

export default defineConfig({
    plugins: [pugPlugin(options, locals)],
    build: {
        rollupOptions: {input},
    },
})
