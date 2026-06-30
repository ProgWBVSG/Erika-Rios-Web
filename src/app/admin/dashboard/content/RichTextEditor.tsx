'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { TextStyle } from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import Underline from '@tiptap/extension-underline'
import Highlight from '@tiptap/extension-highlight'
import { useRef, useEffect } from 'react'

interface Props {
  name: string
  defaultValue?: string
  placeholder?: string
  minHeight?: string
}

const BRAND_COLORS = [
  { hex: '#1a2e1a', label: 'Verde oscuro' },
  { hex: '#7d6550', label: 'Marrón marca' },
  { hex: '#a0856a', label: 'Marrón claro' },
  { hex: '#111111', label: 'Negro' },
  { hex: '#dc2626', label: 'Rojo' },
  { hex: '#ea580c', label: 'Naranja' },
  { hex: '#ca8a04', label: 'Amarillo' },
  { hex: '#16a34a', label: 'Verde' },
  { hex: '#2563eb', label: 'Azul' },
  { hex: '#7c3aed', label: 'Violeta' },
  { hex: '#6b7280', label: 'Gris' },
]

export default function RichTextEditor({ name, defaultValue = '', placeholder, minHeight = '80px' }: Props) {
  const hiddenRef = useRef<HTMLInputElement>(null)

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      Underline,
      Highlight.configure({ multicolor: true }),
    ],
    content: defaultValue || '',
    editorProps: {
      attributes: {
        class: `focus:outline-none text-gray-800 leading-relaxed`,
        style: `min-height: ${minHeight}; padding: 12px;`,
      },
    },
    onUpdate({ editor }) {
      if (hiddenRef.current) {
        hiddenRef.current.value = editor.getHTML()
      }
    },
    immediatelyRender: false,
  })

  useEffect(() => {
    if (hiddenRef.current) {
      hiddenRef.current.value = defaultValue || ''
    }
  }, [defaultValue])

  if (!editor) return null

  const ToolBtn = ({
    active,
    onClick,
    children,
    title,
  }: {
    active?: boolean
    onClick: () => void
    children: React.ReactNode
    title?: string
  }) => (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`px-2 py-1 rounded text-sm transition-colors ${
        active
          ? 'bg-indigo-100 text-indigo-700 font-semibold'
          : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
      }`}
    >
      {children}
    </button>
  )

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-0.5 px-2 py-1.5 bg-gray-50 border-b border-gray-200">
        <ToolBtn active={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()} title="Negrita">
          <strong>B</strong>
        </ToolBtn>
        <ToolBtn active={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()} title="Cursiva">
          <em>I</em>
        </ToolBtn>
        <ToolBtn active={editor.isActive('underline')} onClick={() => editor.chain().focus().toggleUnderline().run()} title="Subrayado">
          <span className="underline">U</span>
        </ToolBtn>

        <div className="w-px h-5 bg-gray-300 mx-1" />

        {/* Color palette */}
        <div className="flex items-center gap-0.5 flex-wrap">
          {BRAND_COLORS.map(({ hex, label }) => (
            <button
              key={hex}
              type="button"
              title={`Color: ${label}`}
              onClick={() => editor.chain().focus().setColor(hex).run()}
              className={`w-5 h-5 rounded-full border-2 transition-transform hover:scale-110 ${
                editor.isActive('textStyle', { color: hex }) ? 'border-indigo-500 scale-110' : 'border-white shadow-sm'
              }`}
              style={{ backgroundColor: hex }}
            />
          ))}
        </div>

        <div className="w-px h-5 bg-gray-300 mx-1" />

        <ToolBtn onClick={() => editor.chain().focus().unsetColor().run()} title="Quitar color">
          <span className="text-xs text-gray-500">A↺</span>
        </ToolBtn>

        <div className="w-px h-5 bg-gray-300 mx-1" />

        <ToolBtn
          active={editor.isActive('highlight', { color: '#fde68a' })}
          onClick={() => editor.chain().focus().toggleHighlight({ color: '#fde68a' }).run()}
          title="Resaltar"
        >
          <span style={{ background: '#fde68a', padding: '0 3px', borderRadius: 2 }}>M</span>
        </ToolBtn>

        <div className="w-px h-5 bg-gray-300 mx-1" />

        <ToolBtn onClick={() => editor.chain().focus().unsetAllMarks().run()} title="Quitar formato">
          <span className="text-xs">✕fmt</span>
        </ToolBtn>
      </div>

      {/* Editor content */}
      <div
        className="bg-white [&_.ProseMirror]:focus:outline-none [&_.ProseMirror_p]:mb-2 [&_.ProseMirror_p:last-child]:mb-0"
      >
        {!editor.getText() && placeholder && !editor.isFocused && (
          <div className="absolute pointer-events-none text-gray-400 text-sm" style={{ padding: '12px' }}>
            {placeholder}
          </div>
        )}
        <EditorContent editor={editor} />
      </div>

      <input type="hidden" name={name} ref={hiddenRef} defaultValue={defaultValue} />
    </div>
  )
}
