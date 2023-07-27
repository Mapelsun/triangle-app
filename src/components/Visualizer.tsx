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
          ([item, row]) => item === cell && row === rowIndex
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
      const addedNumbers = []
      let totalSum = 0

      for (let i = 0; i < triangleData.length; i++) {
        if (i === 0) {
          totalSum += triangleData[i][0]
          addedNumbers.push([triangleData[i][0], i])
        } else if (i === 1) {
          totalSum += triangleData[i][0]
          addedNumbers.push([triangleData[i][0], i])
        } else if (i > 1 && triangleData[i].length > 1) {
          totalSum += triangleData[i][1]
          addedNumbers.push([triangleData[i][1], i])
        }
      }

      setMaxTotal(totalSum)
      setHighlightedPath(addedNumbers)
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

