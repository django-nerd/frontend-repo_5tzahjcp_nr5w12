import Spline from '@splinetool/react-spline'
import EditableField from './EditableField'

export default function Hero({ editMode, data, onChange }) {
  return (
    <section className="relative min-h-[92vh] pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[70vh] grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <EditableField
              as="h1"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
              value={data.name}
              onChange={(v) => onChange('name', v)}
              editMode={editMode}
              placeholder="Your Name"
            />
            <EditableField
              as="p"
              className="text-lg sm:text-xl text-slate-700 max-w-xl"
              value={data.tagline}
              onChange={(v) => onChange('tagline', v)}
              editMode={editMode}
              placeholder="One-liner about what you do"
            />
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white shadow">View Projects</a>
              <a href="#contact" className="px-5 py-2.5 rounded-md bg-white/80 hover:bg-white border border-slate-200 shadow">Contact</a>
            </div>
          </div>
          <div className="hidden md:flex justify-end">
            <div className="w-full max-w-md p-6 rounded-2xl bg-white/70 backdrop-blur border border-white/40 shadow-xl">
              <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Quick Info</h3>
              <div className="mt-4 space-y-3 text-slate-800">
                <EditableField as="p" value={data.title} onChange={(v) => onChange('title', v)} editMode={editMode} className="font-medium" placeholder="Role / Title" />
                <EditableField as="p" value={data.location} onChange={(v) => onChange('location', v)} editMode={editMode} className="text-sm text-slate-600" placeholder="Location" />
                <EditableField as="p" value={data.email} onChange={(v) => onChange('email', v)} editMode={editMode} className="text-sm" placeholder="email@example.com" />
                <EditableField as="p" value={data.phone} onChange={(v) => onChange('phone', v)} editMode={editMode} className="text-sm" placeholder="+91 0000000000" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
