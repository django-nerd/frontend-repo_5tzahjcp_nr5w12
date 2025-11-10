import { Menu, Mail, Phone, Github, Linkedin, Download } from 'lucide-react'

export default function Navbar({ onToggleEdit, editMode }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/40 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 shadow-sm" />
            <span className="font-semibold tracking-tight">Ritik Vats</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#work" className="hover:text-blue-600 transition">Work</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="mailto:ritikvatsh@gmail.com" className="hidden sm:flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-white/70 hover:bg-white shadow-sm transition">
              <Mail size={16} />
              <span>ritikvatsh@gmail.com</span>
            </a>
            <a href="tel:+917061680030" className="hidden lg:flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-white/70 hover:bg-white shadow-sm transition">
              <Phone size={16} />
              <span>+91 7061680030</span>
            </a>
            <button onClick={onToggleEdit} className="ml-2 inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white shadow">
              <Menu size={16} />
              {editMode ? 'Done' : 'Edit'}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
