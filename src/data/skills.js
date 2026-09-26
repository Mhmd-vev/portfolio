import { SiGit, SiDocker, SiLinux } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

// Ajoute un langage ici une fois qu'un projet l'utilise. Exemple :
// { name: 'Python', icon: SiPython, color: '#3776AB' }
// (icône depuis react-icons, ex: 'si' pour simple-icons, 'di' pour devicons)
export const languages = []

export const tools = [
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
  { name: 'Linux', icon: SiLinux, color: '#000000' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
]
