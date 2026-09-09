const COLOR_MODE_SCRIPT_RE = /<script>"use strict";\(\(\)=>\{const o=window[\s\S]*?__NUXT_COLOR_MODE__[\s\S]*?<\/script>/

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:response', (response) => {
    if (typeof response.body !== 'string') {
      return
    }

    const match = response.body.match(COLOR_MODE_SCRIPT_RE)
    if (!match) {
      return
    }

    const [script] = match
    const withoutScript = response.body.replace(script, '')
    const charset = '<meta charset="utf-8">'
    const at = withoutScript.indexOf(charset)
    if (at === -1) {
      return
    }

    response.body = withoutScript.slice(0, at + charset.length) + script + withoutScript.slice(at + charset.length)
  })
})
