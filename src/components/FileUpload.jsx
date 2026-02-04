export default function FileUpload({ onFilesChange }) {
  return (
    <input
      type="file"
      multiple
      className="border p-3 rounded w-full"
      onChange={(e) => onFilesChange([...e.target.files])}
    />
  )
}
