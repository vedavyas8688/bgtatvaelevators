import { readdir, readFile, writeFile } from 'node:fs/promises'
import { extname, join } from 'node:path'

const palette = [
  '#F8F7F1',
  '#F5F3EC',
  '#D5B17A',
  '#F7E1A2',
  '#2D4F6E',
]

const allowedExtensions = new Set(['.css', '.js', '.jsx'])

const rgb = (hex) => {
  const value = hex.slice(1)
  return [0, 2, 4].map((index) => Number.parseInt(value.slice(index, index + 2), 16))
}

const paletteRgb = palette.map((hex) => ({ hex, rgb: rgb(hex) }))

const closestColor = (input) => {
  const [red, green, blue] = input
  return paletteRgb.reduce((closest, candidate) => {
    const distance = ((red - candidate.rgb[0]) ** 2) + ((green - candidate.rgb[1]) ** 2) + ((blue - candidate.rgb[2]) ** 2)
    return distance < closest.distance ? { hex: candidate.hex, distance } : closest
  }, { hex: palette[0], distance: Number.POSITIVE_INFINITY }).hex
}

const normalizeHex = (token) => {
  let value = token.slice(1)
  if (value.length === 3 || value.length === 4) value = [...value].map((character) => character + character).join('')
  const alpha = value.length === 8 ? value.slice(6) : ''
  const color = [0, 2, 4].map((index) => Number.parseInt(value.slice(index, index + 2), 16))
  return `${closestColor(color)}${alpha.toUpperCase()}`
}

const normalizeContent = (content, extension) => {
  let result = content.replace(/#[0-9a-fA-F]{3,8}(?![0-9a-fA-F])/g, normalizeHex)

  result = result.replace(/rgba?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)(?:\s*,\s*([\d.]+))?\s*\)/g, (_, red, green, blue, alpha) => {
    const color = closestColor([Number(red), Number(green), Number(blue)])
    if (alpha === undefined) return color
    const [nextRed, nextGreen, nextBlue] = rgb(color)
    return `rgba(${nextRed},${nextGreen},${nextBlue},${alpha})`
  })

  if (extension === '.css') {
    result = result
      .replace(/(?<![-\w])white(?![-\w])/gi, '#F8F7F1')
      .replace(/(?<![-\w])black(?![-\w])/gi, '#2D4F6E')
  }

  return result
}

const collectFiles = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) return collectFiles(path)
    return allowedExtensions.has(extname(entry.name)) ? [path] : []
  }))
  return files.flat()
}

const files = [...await collectFiles('src'), 'tailwind.config.js']

for (const file of files) {
  const extension = extname(file)
  const content = await readFile(file, 'utf8')
  const normalized = normalizeContent(content, extension)
  if (normalized !== content) await writeFile(file, normalized)
}

console.log(`Normalized ${files.length} source files to the approved blue, gold and ivory palette.`)
