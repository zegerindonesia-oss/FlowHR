import { useState } from 'react'
const faqs = [
    { q: 'How do I configure custom payroll rules?', a: 'Navigate to Settings > Payroll & Taxes. There you can define custom tax brackets, overtime rates, and deduction components tailored to your company policy.' },
    { q: 'Can I export attendance data to my accounting software?', a: 'Yes! Go to the Attendance Monitor page and click "Export Raw Data". You can download CSV or Excel files for import into QuickBooks, Xero, or any accounting software.' },
    { q: "How do I reset an employee's 2FA?", a: 'Go to Settings > Security, find the employee in the 2FA management section, and click "Reset". The employee will be prompted to set up 2FA again on their next login.' },
]

export default function Support() {
    const [open, setOpen] = useState(0)
    return (
        <>
            <h3 className="text-xl font-bold text-slate-800 mb-6">Help & Support</h3>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 text-center mb-8">
                <h4 className="text-2xl font-bold text-slate-800 mb-2">How can we help you today?</h4>
                <p className="text-sm text-slate-500 mb-6">Search our knowledge base for answers and guides</p>
                <div className="relative max-w-lg mx-auto">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input className="w-full pl-12 pr-4 py-3 bg-white border-none rounded-xl text-sm shadow-lg focus:ring-primary" placeholder="Search for help articles..." />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                    { icon: 'menu_book', title: 'Documentation', desc: 'Browse our detailed guides and API documentation.', link: 'Read Docs →' },
                    { icon: 'forum', title: 'Community Forum', desc: 'Connect with other HR professionals using FlowHR.', link: 'Visit Forum →' },
                    { icon: 'headset_mic', title: 'Contact Us', desc: "Need technical assistance? We're here 24/7.", link: 'Open a Ticket →' },
                ].map(c => (
                    <div key={c.title} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow cursor-pointer">
                        <span className="material-symbols-outlined text-primary text-3xl mb-4">{c.icon}</span>
                        <h5 className="font-bold text-slate-800 mb-1">{c.title}</h5>
                        <p className="text-xs text-slate-400 mb-4">{c.desc}</p>
                        <span className="text-sm text-primary font-bold">{c.link}</span>
                    </div>
                ))}
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <h4 className="font-bold text-slate-800 mb-4">Frequently Asked Questions</h4>
                <div className="space-y-2">
                    {faqs.map((f, i) => (
                        <div key={i} className="border border-slate-100 rounded-lg overflow-hidden">
                            <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between px-5 py-4 text-sm font-medium text-slate-800 hover:bg-slate-50 transition-colors">
                                <span>{f.q}</span>
                                <span className="material-symbols-outlined text-slate-400">{open === i ? 'expand_less' : 'expand_more'}</span>
                            </button>
                            {open === i && <div className="px-5 pb-4 text-sm text-slate-500">{f.a}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
