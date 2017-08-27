import categories from './categories.json'

module.exports = {
  all: categories,
  top
}

function top(){
  return categories.map((item) => {
    return {
      text: item.text,
      value: item.value
    }
  })
}