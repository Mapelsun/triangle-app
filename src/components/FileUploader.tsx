import { useState, ChangeEvent, MouseEvent } from 'react'

type FileUploaderProps = {
  onFileUpload: (fileContent: string) => void
}

export default function FileUploader({ onFileUpload }: FileUploaderProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null
    setSelectedFile(file)
  }

  const handleFileUpload = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (selectedFile) {
      const reader = new FileReader()
      reader.onload = () => {
        const fileContent = reader.result as string
        onFileUpload(fileContent)
      }
      reader.readAsText(selectedFile)
    }
  }

  return (
    <form className='flex flex-col items-start'>
      <label className='block mb-2'>
        <span className='sr-only'>Choose doc with data (.txt)</span>
        <input
          type='file'
          accept='.txt'
          className='block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    '
          onChange={handleFileChange}
        />
      </label>
      <button
        className='round-full bg-violet-50 text-md text-violet-700 py-2 px-4 hover:bg-violet-100 w-full'
        onClick={handleFileUpload}>
        Upload File
      </button>
    </form>
  )
}

