const sass = require('sass')
const path = require('path')
const fs = require('fs')
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')

const years = ['2019', '2020', '2021']
const sparkle = path.resolve('node_modules/@sparkbox')

years.forEach((year) => {
  const base = path.resolve(`src/scss/${year}/base.scss`)

  sass.render(
    {
      file: base,
      includePaths: [sparkle]
    },
    (err, result) => {
      const location = path.resolve(`./static/css/${year}.css`)
      postcss([autoprefixer])
        .process(result.css.toString())
        .then((x) => {
          fs.writeFileSync(location, x.css)
        })
    }
  )
})
