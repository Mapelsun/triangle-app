export default function FileUploader() {
  return (
    <form className='flex flex-col items-start'>
      <label className='block mb-2'>
        <span className='sr-only'>Choose doc with data</span>
        <input
          type='file'
          className='block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    '
        />
      </label>
      <button className='round-full bg-violet-50 text-md text-violet-700 py-2 px-4 hover:bg-violet-100 w-full'>
        Upload File
      </button>
    </form>
  )
}

