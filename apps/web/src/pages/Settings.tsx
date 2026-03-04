import { useState } from 'react'
const tabs = ['General Profile', 'Work Hours & Shifts', 'Leave Policies', 'Payroll & Taxes', 'Integrations']

export default function Settings() {
    const [active, setActive] = useState(0)
    return (
        <>
            <h3 className="text-xl font-bold text-slate-800 mb-6">Company Settings</h3>
            <div className="flex gap-8">
                <div className="w-56 space-y-1">
                    {tabs.map((t, i) => (
                        <button key={t} onClick={() => setActive(i)} className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${i === active ? 'bg-gradient-to-r from-primary/20 to-accent/10 text-primary font-semibold shadow-sm' : 'text-slate-600 hover:bg-white/30'}`}>{t}</button>
                    ))}
                </div>
                <div className="flex-1 glass-card rounded-2xl p-8">
                    <div className="flex items-center justify-between mb-8">
                        <h4 className="font-bold text-slate-800 text-lg">{tabs[active]}</h4>
                        <div className="flex gap-3">
                            <button className="glass-input text-slate-500 px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/50 transition-all">Cancel</button>
                            <button className="btn-gradient px-5 py-2.5 rounded-xl text-sm font-bold">Save Changes</button>
                        </div>
                    </div>
                    <div className="space-y-6 max-w-xl">
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Company Name</label><input className="w-full glass-input rounded-xl py-2.5 px-3 text-sm focus:outline-none" defaultValue="FlowStack Inc." /></div>
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Industry</label><select className="w-full glass-input rounded-xl py-2.5 px-3 text-sm"><option>Technology</option></select></div>
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Registration Number</label><input className="w-full glass-input rounded-xl py-2.5 px-3 text-sm focus:outline-none" defaultValue="REG-2024-9981" /></div>
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Company Address</label><textarea className="w-full glass-input rounded-xl py-2.5 px-3 text-sm focus:outline-none" rows={3} defaultValue="123 Tech Street, San Francisco, CA 94105" /></div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Corporate Logo</label>
                            <div className="border-2 border-dashed border-primary/30 rounded-2xl p-8 text-center bg-gradient-to-br from-primary/5 to-accent/5 cursor-pointer">
                                <span className="material-symbols-outlined text-primary/40 text-4xl">cloud_upload</span>
                                <p className="text-sm text-slate-400 mt-2">Drag & drop image here</p>
                            </div>
                        </div>
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Admin Email</label><input className="w-full glass-input rounded-xl py-2.5 px-3 text-sm focus:outline-none" defaultValue="admin@flowstack.com" /></div>
                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
                            <div><p className="text-sm font-bold text-slate-800">Two-Factor Authentication</p><p className="text-xs text-slate-400">Enable for all admin accounts</p></div>
                            <div className="w-12 h-7 bg-gradient-to-r from-primary to-accent rounded-full relative cursor-pointer"><div className="w-5 h-5 bg-white rounded-full absolute top-1 right-1 shadow-sm"></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
