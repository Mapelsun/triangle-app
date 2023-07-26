import { useState, useEffect } from 'react'

type VisualizerProps = {
  triangleData: number[][]
}

export default function Visualizer({ triangleData }: VisualizerProps) {
  const [maxTotal, setMaxTotal] = useState<number>(0)
  const [highlightedPath, setHighlightedPath] = useState<number[][]>([])

  const cellGrid = triangleData.map((row, rowIndex) => (
    <div key={rowIndex} className='flex'>
      {row.map((cell, colIndex) => {
        const isHighlighted = highlightedPath.some(
          ([highlightedRow, highlightedCol]) =>
            highlightedRow === rowIndex && highlightedCol === colIndex
        )
        return (
          <div
            key={colIndex}
            className={`w-12 h-12 flex justify-center items-center p-2 m-1 border border-gray-300 rounded ${
              isHighlighted ? 'bg-violet-300 animate-fade-in' : ''
            }`}>
            {cell}
          </div>
        )
      })}
    </div>
  ))

  useEffect(() => {
    const calculateMaxTotal = () => {
      const dp: number[][] = triangleData.map((row) => [...row])

      for (let i = dp.length - 2; i >= 0; i--) {
        for (let j = 0; j < dp[i].length; j++) {
          dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1])
        }
      }

      const maxTotal = dp[0][0]

      const highlightedPath: number[][] = []
      let currentCol = 0

      for (let i = 0; i < dp.length - 1; i++) {
        const nextCol =
          currentCol +
          (dp[i + 1][currentCol + 1] > dp[i + 1][currentCol] ? 1 : 0)
        highlightedPath.push([i, currentCol])
        currentCol = nextCol
      }
      highlightedPath.push([dp.length - 1, currentCol])

      setMaxTotal(maxTotal)
      setHighlightedPath(highlightedPath)
    }

    triangleData.length > 0 && calculateMaxTotal()
  }, [triangleData])

  return (
    <div>
      <div className='py-4'>
        {triangleData.length > 0 && (
          <>
            <div className='mt-4 flex flex-col items-center'>
              <p>Maximum Total: {maxTotal}</p>
              <div className='mt-8'>
                <div className='flex flex-col items-center'>{cellGrid}</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

