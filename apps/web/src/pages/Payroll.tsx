const payrolls = [
    { id: 'ID-001', name: 'Sarah Jenkins', dept: 'Engineering', base: '$8,500', bonus: '$500', ded: '-$100', net: '$8,900', status: 'Paid', color: 'emerald' },
    { id: 'ID-002', name: 'Michael Chen', dept: 'Marketing', base: '$6,200', bonus: '$300', ded: '-$50', net: '$6,450', status: 'Pending', color: 'amber' },
    { id: 'ID-003', name: 'Amanda Smith', dept: 'HR', base: '$7,000', bonus: '$0', ded: '-$200', net: '$6,800', status: 'Draft', color: 'slate' },
    { id: 'ID-004', name: 'James Wilson', dept: 'Engineering', base: '$5,500', bonus: '$200', ded: '$0', net: '$5,700', status: 'Draft', color: 'slate' },
    { id: 'ID-005', name: 'Emily Davis', dept: 'Sales', base: '$6,800', bonus: '$1,200', ded: '-$150', net: '$7,850', status: 'Pending', color: 'amber' },
    { id: 'ID-006', name: 'Robert Brown', dept: 'Operations', base: '$4,500', bonus: '$100', ded: '-$80', net: '$4,520', status: 'Paid', color: 'emerald' },
]
const sc: Record<string, string> = { emerald: 'bg-emerald-100/60 text-emerald-600', amber: 'bg-amber-100/60 text-amber-600', slate: 'bg-slate-100/60 text-slate-500' }

export default function Payroll() {
    return (
        <>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800">Payroll Center</h3>
                <div className="flex gap-3">
                    <select className="text-sm glass-input rounded-xl focus:ring-primary py-2 px-3 font-medium"><option>August 2024</option><option>September 2024</option></select>
                    <button className="glass-input text-slate-600 px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-white/50 transition-all">Generate Slips</button>
                    <button className="btn-gradient px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">send</span>Disburse Payment
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                {[
                    { label: 'Total Net Pay', value: '$145,200', icon: 'account_balance_wallet', grad: 'from-emerald-400 to-teal-500' },
                    { label: 'Total Taxes', value: '$38,400', icon: 'receipt_long', grad: 'from-blue-400 to-indigo-500' },
                    { label: 'Total Deductions', value: '$4,500', icon: 'trending_down', grad: 'from-rose-400 to-red-500' },
                ].map(s => (
                    <div key={s.label} className="glass-card p-5 rounded-2xl flex items-center gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                        <span className={`material-symbols-outlined text-white p-2.5 bg-gradient-to-br ${s.grad} rounded-xl shadow-lg text-[20px]`}>{s.icon}</span>
                        <div><p className="text-2xl font-extrabold text-slate-800">{s.value}</p><p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.1em]">{s.label}</p></div>
                    </div>
                ))}
            </div>
            <div className="glass-card rounded-2xl overflow-hidden">
                <table className="w-full">
                    <thead><tr className="border-b border-white/20">
                        {['Employee ID', 'Name', 'Department', 'Base Salary', 'Bonus', 'Deductions', 'Net Payout', 'Status', 'Action'].map(h => (
                            <th key={h} className="text-left px-5 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">{h}</th>
                        ))}
                    </tr></thead>
                    <tbody>
                        {payrolls.map(p => (
                            <tr key={p.id} className="border-b border-white/10 hover:bg-white/20 transition-colors">
                                <td className="px-5 py-4 text-sm text-slate-500">{p.id}</td>
                                <td className="px-5 py-4 text-sm font-semibold text-slate-800">{p.name}</td>
                                <td className="px-5 py-4 text-sm text-slate-500">{p.dept}</td>
                                <td className="px-5 py-4 text-sm text-slate-600">{p.base}</td>
                                <td className="px-5 py-4 text-sm text-emerald-600 font-medium">{p.bonus}</td>
                                <td className="px-5 py-4 text-sm text-rose-500 font-medium">{p.ded}</td>
                                <td className="px-5 py-4 text-sm font-extrabold text-slate-800">{p.net}</td>
                                <td className="px-5 py-4"><span className={`text-xs font-bold px-2.5 py-1 rounded-full ${sc[p.color]}`}>{p.status}</span></td>
                                <td className="px-5 py-4"><button className="text-primary text-xs font-bold hover:underline">{p.status === 'Draft' ? 'Edit' : 'View Slip'}</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
