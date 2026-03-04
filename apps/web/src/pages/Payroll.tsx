const payrolls = [
    { id: 'ID-001', name: 'Sarah Jenkins', dept: 'Engineering', base: '$8,500', bonus: '$500', ded: '-$100', net: '$8,900', status: 'Paid', color: 'green' },
    { id: 'ID-002', name: 'Michael Chen', dept: 'Marketing', base: '$6,200', bonus: '$300', ded: '-$50', net: '$6,450', status: 'Pending', color: 'yellow' },
    { id: 'ID-003', name: 'Amanda Smith', dept: 'HR', base: '$7,000', bonus: '$0', ded: '-$200', net: '$6,800', status: 'Draft', color: 'slate' },
    { id: 'ID-004', name: 'James Wilson', dept: 'Engineering', base: '$5,500', bonus: '$200', ded: '$0', net: '$5,700', status: 'Draft', color: 'slate' },
    { id: 'ID-005', name: 'Emily Davis', dept: 'Sales', base: '$6,800', bonus: '$1,200', ded: '-$150', net: '$7,850', status: 'Pending', color: 'yellow' },
    { id: 'ID-006', name: 'Robert Brown', dept: 'Operations', base: '$4,500', bonus: '$100', ded: '-$80', net: '$4,520', status: 'Paid', color: 'green' },
]
const sc: Record<string, string> = { green: 'bg-green-50 text-green-600', yellow: 'bg-yellow-50 text-yellow-600', slate: 'bg-slate-100 text-slate-500' }

export default function Payroll() {
    return (
        <>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800">Payroll Center</h3>
                <div className="flex gap-3">
                    <select className="text-sm border-slate-200 rounded-lg focus:ring-primary py-2 px-3 font-medium"><option>August 2024</option><option>September 2024</option></select>
                    <button className="border border-slate-200 text-slate-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-slate-50">Generate Slips</button>
                    <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-sm">send</span>Disburse Payment
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                    { label: 'Total Net Pay', value: '$145,200', icon: 'account_balance_wallet', color: 'green' },
                    { label: 'Total Taxes', value: '$38,400', icon: 'receipt_long', color: 'blue' },
                    { label: 'Total Deductions', value: '$4,500', icon: 'trending_down', color: 'red' },
                ].map(s => (
                    <div key={s.label} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
                        <span className={`material-symbols-outlined text-${s.color}-500 p-2.5 bg-${s.color}-50 rounded-lg`}>{s.icon}</span>
                        <div><p className="text-2xl font-bold">{s.value}</p><p className="text-xs text-slate-400 font-semibold uppercase">{s.label}</p></div>
                    </div>
                ))}
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-100">
                <table className="w-full">
                    <thead><tr className="border-b border-slate-100">
                        {['Employee ID', 'Name', 'Department', 'Base Salary', 'Bonus', 'Deductions', 'Net Payout', 'Status', 'Action'].map(h => (
                            <th key={h} className="text-left px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">{h}</th>
                        ))}
                    </tr></thead>
                    <tbody>
                        {payrolls.map(p => (
                            <tr key={p.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                <td className="px-5 py-4 text-sm text-slate-500">{p.id}</td>
                                <td className="px-5 py-4 text-sm font-medium text-slate-800">{p.name}</td>
                                <td className="px-5 py-4 text-sm text-slate-500">{p.dept}</td>
                                <td className="px-5 py-4 text-sm text-slate-600">{p.base}</td>
                                <td className="px-5 py-4 text-sm text-green-600">{p.bonus}</td>
                                <td className="px-5 py-4 text-sm text-red-500">{p.ded}</td>
                                <td className="px-5 py-4 text-sm font-bold text-slate-800">{p.net}</td>
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
