import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'

export default function App() {
  const [editMode, setEditMode] = useState(false)
  const [data, setData] = useState({
    name: 'Ritik Vats',
    tagline: 'Engineer • Builder • Lifelong Learner',
    title: 'Full-Stack Developer',
    location: 'Bengaluru, India',
    email: 'ritikvatsh@gmail.com',
    phone: '+91 7061680030',
    about: 'I design and build delightful, performant web experiences. I love blending interactive 3D, clean design systems, and end-to-end product thinking.',
    skills: '- React, Next.js, Tailwind\n- FastAPI, Node.js\n- MongoDB\n- AWS, Docker',
    exp_0_role: 'Software Engineer', exp_0_company: 'Awesome Co • 2023 — Present', exp_0_desc: 'Shipped end-to-end product features across frontend and backend with a focus on performance and DX.',
    exp_1_role: 'Frontend Developer', exp_1_company: 'Creative Studio • 2021 — 2023', exp_1_desc: 'Built accessible, responsive UIs and design systems with React and Tailwind.',
    exp_2_role: 'Intern', exp_2_company: 'Startup • 2020 — 2021', exp_2_desc: 'Automated workflows and improved internal tooling to speed up releases.',
    proj_0_title: '3D Portfolio', proj_0_stack: 'React, Spline • 2024', proj_0_desc: 'An immersive, playful portfolio powered by WebGL.', proj_0_link: 'https://example.com',
    proj_1_title: 'API Starter', proj_1_stack: 'FastAPI, MongoDB • 2024', proj_1_desc: 'Batteries-included backend template with auth and CRUD.', proj_1_link: 'https://example.com',
    proj_2_title: 'Design System', proj_2_stack: 'React, Tailwind • 2023', proj_2_desc: 'Composable components and tokens for rapid shipping.', proj_2_link: 'https://example.com'
  })

  const handleChange = (key, value) => setData((d) => ({ ...d, [key]: value }))

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <Navbar onToggleEdit={() => setEditMode((e) => !e)} editMode={editMode} />
      <Hero editMode={editMode} data={data} onChange={handleChange} />
      <Sections editMode={editMode} data={data} onChange={handleChange} />
      <footer className="py-10 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Ritik Vats — Made with love and a bit of caffeine.
      </footer>
    </div>
  )
}
