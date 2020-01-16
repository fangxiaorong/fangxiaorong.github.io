export default class Markdown {
  decodeCode (code, lineStart) {
    if (lineStart && code[0] === '#') {
      let len = 0
      for (var i = 0; i < code.length; i++) {
        if (code[i] === '#') {
          len ++
        } else {
          break
        }
      }
      return [{
        type: 'h' + len,
        data: code
      }]
    }
    return [{type: '', data: code}]
  }
}
