import { Notes } from '@/config'

export const isNoteNameValid = (noteName) => {
  return Notes.some(n => {
    return n.name == noteName
  })
}