import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

export type RootProps = ComponentProps<'div'>

type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
  onDeleteFileSelected: (file: File) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    } else {
      setFiles(files)
    }
  }

  function onDeleteFileSelected(file: File) {
    if (files.length === 0) {
      setFiles([])
    } else {
      setFiles((state) =>
        state.filter((fileSelected) => fileSelected.name !== file.name),
      )
    }
  }

  return (
    <FileInputContext.Provider
      value={{ id, files, onFilesSelected, onDeleteFileSelected }}
    >
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
