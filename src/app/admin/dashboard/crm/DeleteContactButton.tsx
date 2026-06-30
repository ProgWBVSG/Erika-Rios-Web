'use client'

import { deleteContact } from './actions'

export function DeleteContactButton({ id }: { id: string }) {
  return (
    <form
      action={deleteContact}
      onSubmit={e => {
        if (!confirm('¿Eliminar este contacto?')) e.preventDefault()
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="text-red-600 hover:text-red-900 border border-red-200 rounded px-3 py-1 text-sm bg-red-50"
      >
        Borrar
      </button>
    </form>
  )
}
