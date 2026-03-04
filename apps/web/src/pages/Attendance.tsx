const logs = [
    { name: 'Sarah Jenkins', dept: 'Engineering', shift: 'Morning (09:00-17:00)', clockIn: '08:45 AM', clockOut: '--:--', status: 'On Time', color: 'green' },
    { name: 'Michael Chen', dept: 'Marketing', shift: 'Morning (09:00-17:00)', clockIn: '09:15 AM', clockOut: '--:--', status: 'Late', color: 'yellow' },
    { name: 'Amanda Smith', dept: 'HR', shift: 'Morning (09:00-17:00)', clockIn: '--:--', clockOut: '--:--', status: 'Absent', color: 'red' },
    { name: 'James Wilson', dept: 'Sales', shift: 'Morning (09:00-17:00)', clockIn: '08:55 AM', clockOut: '--:--', status: 'On Time', color: 'green' },
    { name: 'Emily Davis', dept: 'Support', shift: 'Afternoon (13:00-21:00)', clockIn: '--:--', clockOut: '--:--', status: 'Pending', color: 'slate' },
    { name: 'Robert Brown', dept: 'Operations', shift: 'Morning (09:00-17:00)', clockIn: '09:05 AM', clockOut: '--:--', status: 'Late', color: 'yellow' },
]
const statusColors: Record<string, string> = { green: 'bg-green-50 text-green-600', yellow: 'bg-yellow-50 text-yellow-600', red: 'bg-red-50 text-red-600', slate: 'bg-slate-100 text-slate-500' }

export default function Attendance() {
    return (
        <>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800">Attendance Monitor</h3>
                <div className="flex gap-3">
                    <button className="border border-slate-200 text-slate-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-slate-50 transition-all">Export Raw Data</button>
                    <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-sm">upload</span>Upload Fingerprint
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                    { label: 'Present', value: '245', icon: 'check_circle', color: 'green' },
                    { label: 'Late', value: '12', icon: 'schedule', color: 'yellow' },
                    { label: 'Absent', value: '5', icon: 'cancel', color: 'red' },
                    { label: 'On Leave', value: '8', icon: 'event_busy', color: 'purple' },
                ].map(s => (
                    <div key={s.label} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
                        <span className={`material-symbols-outlined text-${s.color}-500 p-2.5 bg-${s.color}-50 rounded-lg`}>{s.icon}</span>
                        <div><p className="text-2xl font-bold">{s.value}</p><p className="text-xs text-slate-400 font-semibold uppercase">{s.label}</p></div>
                    </div>
                ))}
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="p-4 border-b border-slate-100 flex items-center gap-4">
                    <input type="date" className="text-sm border-slate-200 rounded-lg focus:ring-primary py-2 px-3" defaultValue="2024-10-15" />
                    <select className="text-sm border-slate-200 rounded-lg focus:ring-primary py-2 px-3"><option>All Departments</option></select>
                    <select className="text-sm border-slate-200 rounded-lg focus:ring-primary py-2 px-3"><option>All Shifts</option></select>
                </div>
                <table className="w-full">
                    <thead><tr className="border-b border-slate-100">
                        <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Employee</th>
                        <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Department</th>
                        <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Shift</th>
                        <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Clock In</th>
                        <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Clock Out</th>
                        <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Status</th>
                    </tr></thead>
                    <tbody>
                        {logs.map((r, i) => (
                            <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                <td className="px-6 py-4"><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">{r.name.charAt(0)}</div><span className="font-medium text-sm">{r.name}</span></div></td>
                                <td className="px-6 py-4 text-sm text-slate-500">{r.dept}</td>
                                <td className="px-6 py-4 text-sm text-slate-500">{r.shift}</td>
                                <td className="px-6 py-4 text-sm text-slate-600 font-medium">{r.clockIn}</td>
                                <td className="px-6 py-4 text-sm text-slate-500">{r.clockOut}</td>
                                <td className="px-6 py-4"><span className={`text-xs font-bold px-2.5 py-1 rounded-full ${statusColors[r.color]}`}>{r.status}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
