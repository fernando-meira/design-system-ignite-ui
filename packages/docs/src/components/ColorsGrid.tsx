import { colors } from '@ignite-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([name, color]) => {
    return (
      <div key={name} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff',
            display: 'flex',
            fontFamily: 'monospace',
            justifyContent: 'space-between',
          }}
        >
          <strong>${name}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
