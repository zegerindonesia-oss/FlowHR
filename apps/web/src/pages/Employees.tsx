const employees = [
    { id: 'ID-001', name: 'Sarah Jenkins', dept: 'Engineering', role: 'Senior Developer', email: 'sarah.j@flow.com', status: 'Active' },
    { id: 'ID-002', name: 'Michael Chen', dept: 'Marketing', role: 'Design Lead', email: 'm.chen@flow.com', status: 'Active' },
    { id: 'ID-003', name: 'Amanda Smith', dept: 'HR', role: 'HR Manager', email: 'a.smith@flow.com', status: 'Resigned' },
    { id: 'ID-004', name: 'James Wilson', dept: 'Engineering', role: 'QA Engineer', email: 'j.wilson@flow.com', status: 'Active' },
    { id: 'ID-005', name: 'Emily Davis', dept: 'Sales', role: 'Sales Director', email: 'e.davis@flow.com', status: 'Active' },
    { id: 'ID-006', name: 'Robert Brown', dept: 'Support', role: 'Support Specialist', email: 'r.brown@flow.com', status: 'Active' },
    { id: 'ID-007', name: 'Lisa Park', dept: 'Operations', role: 'Operations Manager', email: 'l.park@flow.com', status: 'Active' },
]

export default function Employees() {
    return (
        <>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800">Employee Directory</h3>
                <button className="btn-gradient px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">add</span>Add New Employee
                </button>
            </div>
            <div className="glass-card rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-white/30 flex items-center gap-4">
                    <select className="text-sm glass-input rounded-xl focus:ring-primary py-2 px-3 font-medium"><option>All Departments</option><option>Engineering</option><option>Marketing</option><option>HR</option><option>Sales</option></select>
                    <select className="text-sm glass-input rounded-xl focus:ring-primary py-2 px-3 font-medium"><option>All Status</option><option>Active</option><option>Resigned</option></select>
                    <select className="text-sm glass-input rounded-xl focus:ring-primary py-2 px-3 font-medium"><option>All Roles</option></select>
                    <div className="relative ml-auto">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                        <input className="pl-10 pr-4 py-2 glass-input rounded-xl text-sm w-64 focus:ring-primary focus:outline-none" placeholder="Search employees..." type="text" />
                    </div>
                </div>
                <table className="w-full">
                    <thead><tr className="border-b border-white/20">
                        <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">Name</th>
                        <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">Employee ID</th>
                        <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">Department</th>
                        <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">Role</th>
                        <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">Email</th>
                        <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">Status</th>
                        <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">Actions</th>
                    </tr></thead>
                    <tbody>
                        {employees.map(emp => (
                            <tr key={emp.id} className="border-b border-white/10 hover:bg-white/20 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary flex items-center justify-center font-bold text-sm">{emp.name.charAt(0)}</div>
                                        <span className="font-semibold text-sm text-slate-800">{emp.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-500">{emp.id}</td>
                                <td className="px-6 py-4 text-sm text-slate-500">{emp.dept}</td>
                                <td className="px-6 py-4 text-sm text-slate-500">{emp.role}</td>
                                <td className="px-6 py-4 text-sm text-slate-500">{emp.email}</td>
                                <td className="px-6 py-4">
                                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${emp.status === 'Active' ? 'bg-emerald-100/60 text-emerald-600' : 'bg-slate-100/60 text-slate-500'}`}>{emp.status}</span>
                                </td>
                                <td className="px-6 py-4"><button className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg">more_horiz</span></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="p-4 flex items-center justify-between border-t border-white/20">
                    <p className="text-sm text-slate-400">Showing 1-7 of 348 employees</p>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 glass-input rounded-xl text-sm text-slate-500 hover:bg-white/40 transition-all">Previous</button>
                        <button className="px-3 py-1.5 btn-gradient rounded-xl text-sm font-bold">1</button>
                        <button className="px-3 py-1.5 glass-input rounded-xl text-sm text-slate-500 hover:bg-white/40 transition-all">2</button>
                        <button className="px-3 py-1.5 glass-input rounded-xl text-sm text-slate-500 hover:bg-white/40 transition-all">3</button>
                        <button className="px-3 py-1.5 glass-input rounded-xl text-sm text-slate-500 hover:bg-white/40 transition-all">Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}
