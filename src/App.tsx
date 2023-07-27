import { useState } from 'react'
import FileUploader from './components/FileUploader'
import Visualizer from './components/Visualizer'

function App() {
  const [triangleData, setTriangleData] = useState<number[][]>([])

  const handleFileUpload = (fileContent: number[][]) => {
    setTriangleData(fileContent)
  }

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <h1 className='mb-6 font-mono font-bold'>
        The Maximum Total (DFS) Triangle Calculator
      </h1>
      <FileUploader onFileUpload={handleFileUpload} />
      {triangleData && <Visualizer triangleData={triangleData} />}
    </div>
  )
}

export default App

