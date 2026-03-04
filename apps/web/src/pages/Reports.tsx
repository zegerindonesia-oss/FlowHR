export default function Reports() {
    return (
        <>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800">Reports & Analytics</h3>
                <div className="flex gap-3">
                    <select className="text-sm glass-input rounded-xl focus:ring-primary py-2 px-3 font-medium"><option>Headcount & Turnover</option><option>Payroll Summary</option></select>
                    <select className="text-sm glass-input rounded-xl focus:ring-primary py-2 px-3 font-medium"><option>Year to Date</option><option>This Quarter</option></select>
                    <button className="glass-input text-slate-600 px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-white/50 transition-all flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">download</span>Export Report
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="glass-card rounded-2xl p-6">
                    <h4 className="font-bold text-slate-800 mb-1">Turnover Rate (YTD)</h4>
                    <p className="text-xs text-slate-400 mb-6">Monthly voluntary turnover percentage</p>
                    <div className="h-48">
                        <svg className="w-full h-full" viewBox="0 0 400 100">
                            <line stroke="rgba(148,163,184,0.15)" strokeWidth="0.5" x1="0" x2="400" y1="25" y2="25" /><line stroke="rgba(148,163,184,0.15)" strokeWidth="0.5" x1="0" x2="400" y1="50" y2="50" /><line stroke="rgba(148,163,184,0.15)" strokeWidth="0.5" x1="0" x2="400" y1="75" y2="75" />
                            <path d="M0,80 Q50,70 100,65 T200,55 T300,60 T400,45" fill="none" stroke="url(#grad-rpt)" strokeWidth="2.5" />
                            <path d="M0,80 Q50,70 100,65 T200,55 T300,60 T400,45 L400,100 L0,100 Z" fill="url(#grad-rpt-fill)" opacity="0.1" />
                            <defs><linearGradient id="grad-rpt" x1="0%" x2="100%"><stop offset="0%" stopColor="#7c3aed" /><stop offset="100%" stopColor="#f472b6" /></linearGradient><linearGradient id="grad-rpt-fill" x1="0%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stopColor="#7c3aed" stopOpacity="1" /><stop offset="100%" stopColor="#7c3aed" stopOpacity="0" /></linearGradient></defs>
                        </svg>
                    </div>
                </div>
                <div className="glass-card rounded-2xl p-6">
                    <h4 className="font-bold text-slate-800 mb-1">Headcount by Department</h4>
                    <p className="text-xs text-slate-400 mb-6">Employee distribution across departments</p>
                    <div className="flex items-center justify-center gap-8">
                        <div className="relative w-40 h-40">
                            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#7c3aed" strokeWidth="3.8" strokeDasharray="35 65" strokeDashoffset="0" />
                                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#60a5fa" strokeWidth="3.8" strokeDasharray="25 75" strokeDashoffset="-35" />
                                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#f472b6" strokeWidth="3.8" strokeDasharray="20 80" strokeDashoffset="-60" />
                                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#34d399" strokeWidth="3.8" strokeDasharray="12 88" strokeDashoffset="-80" />
                                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#fb923c" strokeWidth="3.8" strokeDasharray="8 92" strokeDashoffset="-92" />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center"><p className="text-lg font-extrabold gradient-text">348</p></div>
                        </div>
                        <div className="space-y-2.5">
                            {[{ label: 'Engineering', c: 'bg-primary', v: '122' }, { label: 'Sales', c: 'bg-blue-400', v: '87' }, { label: 'Marketing', c: 'bg-accent', v: '70' }, { label: 'HR', c: 'bg-emerald-400', v: '42' }, { label: 'Operations', c: 'bg-accent-warm', v: '27' }].map(d => (
                                <div key={d.label} className="flex items-center gap-2"><div className={`w-2.5 h-2.5 rounded-full ${d.c}`} /><span className="text-xs text-slate-600">{d.label}</span><span className="text-xs font-extrabold text-slate-800 ml-auto">{d.v}</span></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="glass-card rounded-2xl p-6">
                <h4 className="font-bold text-slate-800 mb-4">Detailed Metric Data</h4>
                <table className="w-full">
                    <thead><tr className="border-b border-white/20">
                        {['Metric Name', 'Current Period', 'Previous Period', 'Variance (%)', 'Trend'].map(h => (
                            <th key={h} className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">{h}</th>
                        ))}
                    </tr></thead>
                    <tbody>
                        {[{ m: 'Total Headcount', c: '348', p: '310', v: '+12.2%', vc: 'text-emerald-500' }, { m: 'Voluntary Turnover', c: '12', p: '15', v: '-20.0%', vc: 'text-rose-500' }, { m: 'New Hires', c: '45', p: '28', v: '+60.7%', vc: 'text-emerald-500' }].map(r => (
                            <tr key={r.m} className="border-b border-white/10 hover:bg-white/20 transition-colors">
                                <td className="px-4 py-4 text-sm font-semibold text-slate-800">{r.m}</td>
                                <td className="px-4 py-4 text-sm text-slate-600">{r.c}</td>
                                <td className="px-4 py-4 text-sm text-slate-500">{r.p}</td>
                                <td className="px-4 py-4"><span className={`text-sm font-bold ${r.vc}`}>{r.v}</span></td>
                                <td className="px-4 py-4"><span className={`material-symbols-outlined text-lg ${r.vc}`}>{r.v.startsWith('+') ? 'trending_up' : 'trending_down'}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
