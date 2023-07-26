import { useState } from 'react'
import FileUploader from './components/FileUploader'

function App() {
  const [triangles, setTriangles] = useState<string>('')
  const handleFileUpload = (fileContent: string) => {
    setTriangles(fileContent)
  }

  console.log('Triangles-->', triangles)

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <h1 className='mb-6 font-mono font-serif'>
        The Maximum Total (DFS) Triangle Calculator
      </h1>
      <FileUploader onFileUpload={handleFileUpload} />
    </div>
  )
}

export default App

