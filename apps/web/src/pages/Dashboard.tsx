export default function Dashboard() {
    return (
        <>
            {/* Overview Row */}
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-slate-800">Overview</h3>
                    <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-sm">add</span>
                        Create Notice
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {[
                        { icon: 'group', color: 'red', value: '348', label: 'Users', change: '+5.2%', changeColor: 'text-green-500' },
                        { icon: 'event_available', color: 'blue', value: '128', label: 'Events', change: 'Total', changeColor: 'text-slate-400' },
                        { icon: 'calendar_month', color: 'amber', value: '10', label: 'Holidays', change: '-2', changeColor: 'text-red-500' },
                        { icon: 'payments', color: 'green', value: '3,458', label: 'Payrolls', change: '+12%', changeColor: 'text-green-500' },
                        { icon: 'assignment', color: 'purple', value: '3,488', label: 'Reports', change: 'Active', changeColor: 'text-slate-400' },
                    ].map((kpi) => (
                        <div key={kpi.label} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col">
                            <div className="flex items-center justify-between mb-4">
                                <span className={`material-symbols-outlined text-${kpi.color}-500 p-2 bg-${kpi.color}-50 rounded-lg`}>{kpi.icon}</span>
                                <span className={`${kpi.changeColor} text-xs font-bold`}>{kpi.change}</span>
                            </div>
                            <p className="text-2xl font-bold">{kpi.value}</p>
                            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1">{kpi.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Middle Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h4 className="font-bold text-slate-800">Salary Statistics</h4>
                            <p className="text-xs text-slate-400">Comparison of average payout trends (2010 - 2017)</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 mr-4">
                                <span className="w-3 h-3 rounded-full bg-primary"></span>
                                <span className="text-xs text-slate-500">Gross</span>
                                <span className="w-3 h-3 rounded-full bg-blue-400 ml-2"></span>
                                <span className="text-xs text-slate-500">Net</span>
                            </div>
                            <select className="text-xs border-slate-200 rounded-lg focus:ring-primary py-1.5 px-3">
                                <option>Monthly</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                    </div>
                    <div className="h-64 relative">
                        <svg className="w-full h-full" viewBox="0 0 400 120">
                            <line stroke="#f1f5f9" strokeWidth="0.5" x1="0" x2="400" y1="20" y2="20" />
                            <line stroke="#f1f5f9" strokeWidth="0.5" x1="0" x2="400" y1="50" y2="50" />
                            <line stroke="#f1f5f9" strokeWidth="0.5" x1="0" x2="400" y1="80" y2="80" />
                            <line stroke="#f1f5f9" strokeWidth="0.5" x1="0" x2="400" y1="110" y2="110" />
                            <path d="M0,100 Q40,60 80,80 T160,40 T240,70 T320,30 T400,50" fill="none" stroke="#f27f0d" strokeWidth="2" />
                            <path d="M0,100 Q40,60 80,80 T160,40 T240,70 T320,30 T400,50 L400,120 L0,120 Z" fill="url(#grad-primary)" opacity="0.1" />
                            <path d="M0,110 Q40,90 80,100 T160,70 T240,90 T320,60 T400,80" fill="none" stroke="#60a5fa" strokeDasharray="4" strokeWidth="2" />
                            <defs>
                                <linearGradient id="grad-primary" x1="0%" x2="0%" y1="0%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#f27f0d', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#f27f0d', stopOpacity: 0 }} />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="flex justify-between mt-4 px-2">
                            {['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'].map(y => (
                                <span key={y} className="text-[10px] text-slate-400 font-bold">{y}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col items-center justify-center">
                    <div className="text-center mb-6">
                        <h4 className="font-bold text-slate-800">Employee Satisfaction</h4>
                        <p className="text-xs text-slate-400">Overall score for Q3 2023</p>
                    </div>
                    <div className="relative w-48 h-24 mt-4">
                        <div className="absolute inset-0 border-[16px] border-slate-100 rounded-t-full"></div>
                        <div className="absolute inset-0 border-[16px] border-primary rounded-t-full" style={{ clipPath: 'inset(0 26% 0 0)' }}></div>
                        <div className="absolute inset-x-0 bottom-0 text-center translate-y-2">
                            <p className="text-3xl font-bold">74%</p>
                            <div className="flex items-center justify-center gap-1 text-primary mt-1">
                                <span className="material-symbols-outlined text-lg filled-icon">thumb_up</span>
                                <span className="text-[10px] font-bold uppercase">Great</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                        <div className="bg-slate-50 p-3 rounded-lg text-center">
                            <p className="text-lg font-bold">85%</p>
                            <p className="text-[10px] text-slate-400 font-semibold uppercase">Response</p>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-lg text-center">
                            <p className="text-lg font-bold">62%</p>
                            <p className="text-[10px] text-slate-400 font-semibold uppercase">Retention</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                    <div className="mb-6">
                        <h4 className="font-bold text-slate-800">Performance Statistics</h4>
                        <p className="text-xs text-slate-400">Team efficiency by department</p>
                    </div>
                    <div className="space-y-6">
                        {[
                            { name: 'Developer', pct: 65, color: 'bg-primary' },
                            { name: 'Design', pct: 84, color: 'bg-blue-500' },
                            { name: 'Marketing', pct: 28, color: 'bg-purple-500' },
                            { name: 'Management', pct: 16, color: 'bg-pink-500' },
                        ].map(item => (
                            <div key={item.name}>
                                <div className="flex justify-between text-xs mb-1.5 font-bold uppercase tracking-wider text-slate-600">
                                    <span>{item.name}</span><span>{item.pct}%</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div className={`${item.color} h-full rounded-full`} style={{ width: `${item.pct}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h4 className="font-bold text-slate-800">New Employees</h4>
                            <p className="text-xs text-slate-400">Male vs Female hiring distribution</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="text-right"><p className="text-xs text-slate-400 font-bold">Total Male</p><p className="text-lg font-bold text-slate-800">248</p></div>
                            <div className="text-right"><p className="text-xs text-slate-400 font-bold">Total Female</p><p className="text-lg font-bold text-slate-800">194</p></div>
                        </div>
                    </div>
                    <div className="flex-1 flex items-end justify-around h-48 px-4 gap-4">
                        {[
                            { day: 'Mon', h1: 'h-24', h2: 'h-16' },
                            { day: 'Tue', h1: 'h-32', h2: 'h-20' },
                            { day: 'Wed', h1: 'h-40', h2: 'h-28' },
                            { day: 'Thu', h1: 'h-28', h2: 'h-32' },
                            { day: 'Fri', h1: 'h-36', h2: 'h-24' },
                            { day: 'Sat', h1: 'h-12', h2: 'h-8' },
                            { day: 'Sun', h1: 'h-10', h2: 'h-12' },
                        ].map(bar => (
                            <div key={bar.day} className="flex-1 flex flex-col items-center gap-2">
                                <div className="w-full flex justify-center gap-1">
                                    <div className={`w-3 bg-primary/80 rounded-t-sm ${bar.h1}`}></div>
                                    <div className={`w-3 bg-blue-400/80 rounded-t-sm ${bar.h2}`}></div>
                                </div>
                                <span className="text-[10px] text-slate-400 font-bold uppercase">{bar.day}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 flex items-center justify-center gap-8 border-t border-slate-50 pt-4">
                        <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-primary/80"></div><span className="text-xs text-slate-500 font-medium">Male Candidates</span></div>
                        <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-blue-400/80"></div><span className="text-xs text-slate-500 font-medium">Female Candidates</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}
