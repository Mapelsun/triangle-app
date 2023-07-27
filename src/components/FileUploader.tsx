import { ChangeEvent } from 'react'

type FileUploaderProps = {
  onFileUpload: (fileContent: number[][]) => void
}

export default function FileUploader({ onFileUpload }: FileUploaderProps) {
  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const contents = e.target?.result as string
      parseTriangleData(contents)
    }
    reader.readAsText(file)
  }

  const parseTriangleData = (content: string) => {
    const rows = content.trim().split('\n')
    const triangle: number[][] = rows.map((row) =>
      row.trim().split(' ').map(Number)
    )
    onFileUpload(triangle)
  }

  return (
    <form className='flex flex-col items-start mb-6'>
      <label className='block mb-3'>
        <span className='sr-only'>Choose doc with data (.txt)</span>
        <input
          type='file'
          accept='.txt'
          onChange={handleFileInputChange}
          aria-label="upload-input"
          className='block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    '
        />
      </label>
    </form>
  )
}

