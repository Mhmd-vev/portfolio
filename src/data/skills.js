import { SiPython, SiC, SiJavascript, SiGit, SiDocker, SiLinux } from 'react-icons/si'
import { DiJava, DiMysql } from 'react-icons/di'
import { VscVscode } from 'react-icons/vsc'

export const languages = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Java', icon: DiJava, color: '#ED8B00' },
  { name: 'C', icon: SiC, color: '#A8B9CC' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F0DB4F' },
  { name: 'SQL', icon: DiMysql, color: '#00758F' },
]

export const tools = [
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
  { name: 'Linux', icon: SiLinux, color: '#000000' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
]
