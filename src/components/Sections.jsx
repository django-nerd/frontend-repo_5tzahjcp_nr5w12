import EditableField from './EditableField'

function Card({ children }) {
  return (
    <div className="p-6 rounded-2xl bg-white/70 backdrop-blur border border-white/40 shadow-sm">{children}</div>
  )
}

export default function Sections({ editMode, data, onChange }) {
  return (
    <div className="relative">
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card>
              <h2 className="text-2xl font-bold">About</h2>
              <EditableField
                as="p"
                className="mt-3 text-slate-700"
                value={data.about}
                onChange={(v) => onChange('about', v)}
                editMode={editMode}
                placeholder="Write a short intro about yourself, skills, and passions."
              />
            </Card>
            <Card>
              <h2 className="text-2xl font-bold">Skills</h2>
              <EditableField
                as="p"
                className="mt-3 text-slate-700 whitespace-pre-line"
                value={data.skills}
                onChange={(v) => onChange('skills', v)}
                editMode={editMode}
                placeholder={"e.g.\n- React, Next.js, Tailwind\n- FastAPI, Node.js\n- MongoDB, Postgres\n- AWS, Docker"}
              />
            </Card>
          </div>
        </div>
      </section>

      <section id="work" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[0,1,2].map((i) => (
              <Card key={i}>
                <EditableField as="h3" className="font-semibold" value={data[`exp_${i}_role`]} onChange={(v)=>onChange(`exp_${i}_role`, v)} editMode={editMode} placeholder={`Role ${i+1}`} />
                <EditableField as="p" className="text-sm text-slate-600" value={data[`exp_${i}_company`]} onChange={(v)=>onChange(`exp_${i}_company`, v)} editMode={editMode} placeholder="Company • Dates" />
                <EditableField as="p" className="mt-2 text-slate-700" value={data[`exp_${i}_desc`]} onChange={(v)=>onChange(`exp_${i}_desc`, v)} editMode={editMode} placeholder="Impact-focused bullet points or summary." />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[0,1,2].map((i) => (
              <Card key={i}>
                <EditableField as="h3" className="font-semibold" value={data[`proj_${i}_title`]} onChange={(v)=>onChange(`proj_${i}_title`, v)} editMode={editMode} placeholder={`Project ${i+1}`} />
                <EditableField as="p" className="text-sm text-slate-600" value={data[`proj_${i}_stack`]} onChange={(v)=>onChange(`proj_${i}_stack`, v)} editMode={editMode} placeholder="Tech stack • Year" />
                <EditableField as="p" className="mt-2 text-slate-700" value={data[`proj_${i}_desc`]} onChange={(v)=>onChange(`proj_${i}_desc`, v)} editMode={editMode} placeholder="What it does and why it matters." />
                <EditableField as="p" className="mt-2 text-blue-600" value={data[`proj_${i}_link`]} onChange={(v)=>onChange(`proj_${i}_link`, v)} editMode={editMode} placeholder="https://link-to-project" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-t from-white to-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold">Get in touch</h2>
          <p className="mt-3 text-slate-700">I'm open to opportunities, collaborations, and coffee chats.</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <Card>
              <EditableField as="p" className="font-medium" value={data.email} onChange={(v)=>onChange('email', v)} editMode={editMode} placeholder="email@example.com" />
            </Card>
            <Card>
              <EditableField as="p" className="font-medium" value={data.phone} onChange={(v)=>onChange('phone', v)} editMode={editMode} placeholder="+91 0000000000" />
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
