import {range} from '@core/utils'

export const shouldResize = (event) => event.target.dataset.resize
export const isCell = (event) => event.target.dataset.type === 'cell'
export const onShift = (event) => event.shiftKey

export function matrix($target, $current) {
  const target = $target.id(true)
  const current = $current.id(true)
  const cols = range(current.col, target.col)
  const rows = range(current.row, target.row)
  return cols.reduce((acc, col) => {
    rows.forEach((row) => acc.push(`${row}:${col}`))
    return acc
  }, [])
}

export function nextSelector(key, {col, row}) {
  const MIN_VALUE = 0

  switch (key) {
    case 'Enter':
    case 'ArrowDown':
      row += 1
      break
    case 'Tab':
    case 'ArrowRight':
      col += 1
      break
    case 'ArrowLeft':
      col = col - 1 < MIN_VALUE ? MIN_VALUE : col - 1
      break
    case 'ArrowUp':
      row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1
      break
  }

  return `[data-id="${row}:${col}"]`
}
