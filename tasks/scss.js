const sass = require('sass')
const path = require('path')
const fs = require('fs')
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const postcssCustomProperties = require('postcss-custom-properties')
const cssbyebye = require('css-byebye')

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
      let location = path.resolve(`./static/css/${year}.css`)
      postcss([autoprefixer])
        .process(result.css.toString(), { from: undefined })
        .then((x) => {
          fs.writeFileSync(location, x.css)
        })
    }
  )
  
  if (year === '2021') {
    sass.render(
      {
        file: path.resolve(`src/scss/${year}/ie.scss`),
        includePaths: [sparkle]
      },
      (err, result) => {
        let location = path.resolve(`./static/css/${year}-ie.css`)
        postcss([
          autoprefixer,
          postcssCustomProperties({
            preserve: false
          })
        ])
          .process(result.css.toString(), { from: undefined })
          .then((x) => {
            fs.writeFileSync(location, x.css)
          })
      }
    )
  }
})
