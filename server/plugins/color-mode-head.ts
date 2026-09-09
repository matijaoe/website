import { getCookie } from 'h3'

const COLOR_MODE_SCRIPT_RE = /<script>"use strict";\(\(\)=>\{const o=window[\s\S]*?__NUXT_COLOR_MODE__[\s\S]*?<\/script>/

const DARK_BG = '#0b0a09'
const LIGHT_BG = '#faf8f4'

const PAINT_STYLE = `<style>html.dark{color-scheme:dark;background-color:${DARK_BG}}html.light{color-scheme:light;background-color:${LIGHT_BG}}</style>`

const PAINT_SCRIPT = `;(() => {
  const el = document.documentElement
  const apply = (theme) => {
    if (theme !== 'dark' && theme !== 'light') {
      return
    }
    el.style.backgroundColor = theme === 'dark' ? '${DARK_BG}' : '${LIGHT_BG}'
    el.style.colorScheme = theme
    document.cookie = 'nuxt-color-mode=' + theme + ';path=/;max-age=31536000;samesite=lax'
  }
  apply(el.classList.contains('dark') ? 'dark' : 'light')
  const helper = window.__NUXT_COLOR_MODE__
  if (!helper) {
    return
  }
  const add = helper.addColorScheme.bind(helper)
  helper.addColorScheme = (theme) => {
    add(theme)
    apply(theme)
  }
})()`

function withPaint(script: string) {
  return script.replace('</script>', `${PAINT_SCRIPT}</script>`)
}

function stampHtml(html: string, theme: 'dark' | 'light') {
  const bg = theme === 'dark' ? DARK_BG : LIGHT_BG
  return html.replace(/<html([^>]*)>/, (_full, attrs: string) => {
    const cleaned = attrs
      .replace(/\sclass="[^"]*"/, '')
      .replace(/\sstyle="[^"]*"/, '')
    return `<html${cleaned} class="${theme}" style="background-color:${bg};color-scheme:${theme}">`
  })
}

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:response', (response, context) => {
    if (typeof response.body !== 'string') {
      return
    }

    let html = response.body

    const match = html.match(COLOR_MODE_SCRIPT_RE)
    if (match) {
      const [script] = match
      html = html.replace(script, '')
      const charset = '<meta charset="utf-8">'
      const at = html.indexOf(charset)
      if (at !== -1) {
        const painted = withPaint(script)
        html = html.slice(0, at + charset.length) + painted + PAINT_STYLE + html.slice(at + charset.length)
      }
    }

    const pref = getCookie(context.event, 'nuxt-color-mode')
    if (pref === 'dark' || pref === 'light') {
      html = stampHtml(html, pref)
    }

    response.body = html
  })
})
