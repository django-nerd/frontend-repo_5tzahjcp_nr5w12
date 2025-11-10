import { useState, useEffect, useRef } from 'react'

/**
 * EditableField
 * - Renders text that can be edited when editMode is true
 * - Supports h1/h2/p/span variants
 * - Calls onChange(value) when edited
 */
export default function EditableField({
  value,
  onChange,
  editMode = false,
  placeholder = '',
  as = 'p',
  className = ''
}) {
  const [local, setLocal] = useState(value || '')
  const ref = useRef(null)

  useEffect(() => {
    setLocal(value || '')
  }, [value])

  const handleBlur = (e) => {
    const v = e.target.innerText.trim()
    setLocal(v)
    onChange && onChange(v)
  }

  const Tag = as
  return (
    <Tag
      ref={ref}
      className={className + (editMode ? ' outline-dashed outline-1 outline-blue-300/60 rounded-sm' : '')}
      contentEditable={editMode}
      suppressContentEditableWarning
      onBlur={handleBlur}
      placeholder={placeholder}
      aria-label={placeholder}
    >
      {local || placeholder}
    </Tag>
  )
}
