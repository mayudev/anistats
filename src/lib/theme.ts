export type AppTheme = 'dark' | 'light'

function isTheme(value: string | null): value is AppTheme {
  if (!value) return false

  const themes = ['dark', 'light']

  return themes.indexOf(value) > -1
}

const attributeName = 'data-theme'

export function getTheme(): AppTheme {
  const current = window.localStorage.getItem('theme')

  return isTheme(current) ? current : 'dark'
}

export function saveTheme(theme: AppTheme) {
  window.localStorage.setItem('theme', theme)
}

export function applyTheme(theme: AppTheme) {
  document.body.setAttribute(attributeName, theme)
  saveTheme(theme)
}
