const logs = [
    { name: 'Sarah Jenkins', dept: 'Engineering', shift: 'Morning (09:00-17:00)', clockIn: '08:45 AM', clockOut: '--:--', status: 'On Time', color: 'emerald' },
    { name: 'Michael Chen', dept: 'Marketing', shift: 'Morning (09:00-17:00)', clockIn: '09:15 AM', clockOut: '--:--', status: 'Late', color: 'amber' },
    { name: 'Amanda Smith', dept: 'HR', shift: 'Morning (09:00-17:00)', clockIn: '--:--', clockOut: '--:--', status: 'Absent', color: 'rose' },
    { name: 'James Wilson', dept: 'Sales', shift: 'Morning (09:00-17:00)', clockIn: '08:55 AM', clockOut: '--:--', status: 'On Time', color: 'emerald' },
    { name: 'Emily Davis', dept: 'Support', shift: 'Afternoon (13:00-21:00)', clockIn: '--:--', clockOut: '--:--', status: 'Pending', color: 'slate' },
    { name: 'Robert Brown', dept: 'Operations', shift: 'Morning (09:00-17:00)', clockIn: '09:05 AM', clockOut: '--:--', status: 'Late', color: 'amber' },
]
const sc: Record<string, string> = { emerald: 'bg-emerald-100/60 text-emerald-600', amber: 'bg-amber-100/60 text-amber-600', rose: 'bg-rose-100/60 text-rose-600', slate: 'bg-slate-100/60 text-slate-500' }

export default function Attendance() {
    return (
        <>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800">Attendance Monitor</h3>
                <div className="flex gap-3">
                    <button className="glass-input text-slate-600 px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-white/50 transition-all">Export Raw Data</button>
                    <button className="btn-gradient px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">upload</span>Upload Fingerprint
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
                {[
                    { label: 'Present', value: '245', icon: 'check_circle', grad: 'from-emerald-400 to-teal-500' },
                    { label: 'Late', value: '12', icon: 'schedule', grad: 'from-amber-400 to-orange-500' },
                    { label: 'Absent', value: '5', icon: 'cancel', grad: 'from-rose-400 to-red-500' },
                    { label: 'On Leave', value: '8', icon: 'event_busy', grad: 'from-violet-400 to-purple-500' },
                ].map(s => (
                    <div key={s.label} className="glass-card p-5 rounded-2xl flex items-center gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                        <span className={`material-symbols-outlined text-white p-2.5 bg-gradient-to-br ${s.grad} rounded-xl shadow-lg text-[20px]`}>{s.icon}</span>
                        <div><p className="text-2xl font-extrabold text-slate-800">{s.value}</p><p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.1em]">{s.label}</p></div>
                    </div>
                ))}
            </div>
            <div className="glass-card rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-white/30 flex items-center gap-4">
                    <input type="date" className="text-sm glass-input rounded-xl focus:ring-primary py-2 px-3 font-medium" defaultValue="2024-10-15" />
                    <select className="text-sm glass-input rounded-xl focus:ring-primary py-2 px-3 font-medium"><option>All Departments</option></select>
                    <select className="text-sm glass-input rounded-xl focus:ring-primary py-2 px-3 font-medium"><option>All Shifts</option></select>
                </div>
                <table className="w-full">
                    <thead><tr className="border-b border-white/20">
                        {['Employee', 'Department', 'Shift', 'Clock In', 'Clock Out', 'Status'].map(h => (
                            <th key={h} className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">{h}</th>
                        ))}
                    </tr></thead>
                    <tbody>
                        {logs.map((r, i) => (
                            <tr key={i} className="border-b border-white/10 hover:bg-white/20 transition-colors">
                                <td className="px-6 py-4"><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary flex items-center justify-center font-bold text-sm">{r.name.charAt(0)}</div><span className="font-semibold text-sm">{r.name}</span></div></td>
                                <td className="px-6 py-4 text-sm text-slate-500">{r.dept}</td>
                                <td className="px-6 py-4 text-sm text-slate-500">{r.shift}</td>
                                <td className="px-6 py-4 text-sm text-slate-600 font-semibold">{r.clockIn}</td>
                                <td className="px-6 py-4 text-sm text-slate-500">{r.clockOut}</td>
                                <td className="px-6 py-4"><span className={`text-xs font-bold px-2.5 py-1 rounded-full ${sc[r.color]}`}>{r.status}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
