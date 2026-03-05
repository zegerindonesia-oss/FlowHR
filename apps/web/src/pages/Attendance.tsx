const logs = [
    { name: 'Sarah Jenkins', dept: 'Engineering', shift: 'Morning (09:00-17:00)', clockIn: '08:45 AM', clockOut: '--:--', status: 'On Time', color: 'emerald' },
    { name: 'Michael Chen', dept: 'Marketing', shift: 'Morning (09:00-17:00)', clockIn: '09:15 AM', clockOut: '--:--', status: 'Late', color: 'amber' },
    { name: 'Amanda Smith', dept: 'HR', shift: 'Morning (09:00-17:00)', clockIn: '--:--', clockOut: '--:--', status: 'Absent', color: 'rose' },
    { name: 'James Wilson', dept: 'Sales', shift: 'Morning (09:00-17:00)', clockIn: '08:55 AM', clockOut: '--:--', status: 'On Time', color: 'emerald' },
    { name: 'Emily Davis', dept: 'Support', shift: 'Afternoon (13:00-21:00)', clockIn: '--:--', clockOut: '--:--', status: 'Pending', color: 'slate' },
    { name: 'Robert Brown', dept: 'Operations', shift: 'Morning (09:00-17:00)', clockIn: '09:05 AM', clockOut: '--:--', status: 'Late', color: 'amber' },
]

const employeeLogs = [
    { date: 'Oct 15, 2024', shift: 'Morning', clockIn: '08:45 AM', clockOut: '05:05 PM', status: 'On Time', color: 'emerald' },
    { date: 'Oct 14, 2024', shift: 'Morning', clockIn: '09:15 AM', clockOut: '05:10 PM', status: 'Late', color: 'amber' },
    { date: 'Oct 13, 2024', shift: 'Morning', clockIn: '--:--', clockOut: '--:--', status: 'Absent', color: 'rose' },
    { date: 'Oct 12, 2024', shift: 'Morning', clockIn: '08:50 AM', clockOut: '05:00 PM', status: 'On Time', color: 'emerald' },
    { date: 'Oct 11, 2024', shift: 'Morning', clockIn: '08:55 AM', clockOut: '05:02 PM', status: 'On Time', color: 'emerald' },
]

const sc: Record<string, string> = { emerald: 'bg-emerald-100/60 text-emerald-600', amber: 'bg-amber-100/60 text-amber-600', rose: 'bg-rose-100/60 text-rose-600', slate: 'bg-slate-100/60 text-slate-500' }

export default function Attendance() {
    const userRole = localStorage.getItem('userRole');
    const isAdmin = userRole === 'admin';

    if (!isAdmin) {
        return (
            <div className="flex flex-col gap-6 animate-in fade-in duration-500 pb-8">
                <div className="mb-2">
                    <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">My Attendance</h1>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1">October 2024</p>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center text-center">
                        <span className="material-symbols-outlined text-emerald-500 mb-2 bg-emerald-50 w-10 h-10 flex items-center justify-center rounded-xl">check_circle</span>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Present</p>
                        <p className="text-2xl font-extrabold text-slate-800">18</p>
                    </div>
                    <div className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center text-center">
                        <span className="material-symbols-outlined text-amber-500 mb-2 bg-amber-50 w-10 h-10 flex items-center justify-center rounded-xl">schedule</span>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Late</p>
                        <p className="text-2xl font-extrabold text-slate-800">2</p>
                    </div>
                </div>

                {/* Attendance History */}
                <div>
                    <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest px-2 mb-4">Recent History</h3>
                    <div className="glass-card rounded-3xl overflow-hidden p-2 space-y-2">
                        {employeeLogs.map((log, i) => (
                            <div key={i} className="flex flex-col p-4 bg-white/40 rounded-2xl border border-white/60">
                                <div className="flex items-center justify-between mb-3 border-b border-slate-200/50 pb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-[18px]">calendar_today</span>
                                        <span className="text-sm font-bold text-slate-700">{log.date}</span>
                                    </div>
                                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${sc[log.color]}`}>{log.status}</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-slate-400 font-bold uppercase">Clock In</span>
                                        <span className="text-sm font-extrabold text-slate-800">{log.clockIn}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-slate-400 font-bold uppercase">Clock Out</span>
                                        <span className="text-sm font-extrabold text-slate-800">{log.clockOut}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

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
