import { useState, useEffect } from 'react';

export default function Dashboard() {
    const userRole = localStorage.getItem('userRole');
    const isAdmin = userRole === 'admin';

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        if (!isAdmin) {
            const timer = setInterval(() => setCurrentTime(new Date()), 1000);
            return () => clearInterval(timer);
        }
    }, [isAdmin]);

    if (!isAdmin) {
        return (
            <div className="flex flex-col gap-6 animate-in fade-in duration-500">
                {/* Greeting & Date */}
                <div className="text-center mt-2">
                    <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-1">
                        {currentTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                    </p>
                    <h1 className="text-5xl font-extrabold text-slate-800 tracking-tight tabular-nums drop-shadow-sm">
                        {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
                    </h1>
                </div>

                {/* Clock In Button Action */}
                <div className="relative flex justify-center py-6">
                    {/* Pulsing rings behind button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-48 bg-primary/20 rounded-full animate-ping opacity-75" style={{ animationDuration: '3s' }}></div>
                        <div className="absolute w-40 h-40 bg-accent/20 rounded-full animate-ping opacity-75" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
                    </div>

                    <button className="relative z-10 w-40 h-40 rounded-full bg-gradient-to-tr from-primary via-purple-500 to-accent text-white shadow-[0_10px_40px_rgba(124,58,237,0.5)] flex flex-col items-center justify-center gap-2 transform transition-transform active:scale-95 hover:scale-105 border-4 border-white">
                        <span className="material-symbols-outlined text-[40px] drop-shadow-md">fingerprint</span>
                        <span className="font-extrabold tracking-wider text-lg drop-shadow-md">CLOCK IN</span>
                    </button>
                </div>

                {/* Status Cards */}
                <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center text-center">
                        <span className="material-symbols-outlined text-emerald-500 mb-2 bg-emerald-50 w-10 h-10 flex items-center justify-center rounded-xl">schedule</span>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Shift Start</p>
                        <p className="text-lg font-extrabold text-slate-800">09:00</p>
                    </div>
                    <div className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center text-center">
                        <span className="material-symbols-outlined text-rose-500 mb-2 bg-rose-50 w-10 h-10 flex items-center justify-center rounded-xl">update</span>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Shift End</p>
                        <p className="text-lg font-extrabold text-slate-800">17:00</p>
                    </div>
                </div>

                {/* Info Card */}
                <div className="glass-card p-5 rounded-2xl mt-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-full -z-10"></div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="material-symbols-outlined text-accent">campaign</span>
                        <h3 className="font-bold text-slate-800">Company Notice</h3>
                    </div>
                    <p className="text-sm text-slate-600 font-medium">Please be informed that there will be a townhall meeting tomorrow at 10 AM. All employees are expected to attend.</p>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Overview Row */}
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-slate-800">Overview</h3>
                    {isAdmin && (
                        <button className="btn-gradient px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">add</span>
                            Create Notice
                        </button>
                    )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {[
                        { icon: 'group', grad: 'from-rose-400 to-pink-500', value: '348', label: 'Users', change: '+5.2%', changeColor: 'text-emerald-500' },
                        { icon: 'event_available', grad: 'from-blue-400 to-indigo-500', value: '128', label: 'Events', change: 'Total', changeColor: 'text-slate-400' },
                        { icon: 'calendar_month', grad: 'from-amber-400 to-orange-500', value: '10', label: 'Holidays', change: '-2', changeColor: 'text-rose-400' },
                        { icon: 'payments', grad: 'from-emerald-400 to-teal-500', value: '3,458', label: 'Payrolls', change: '+12%', changeColor: 'text-emerald-500' },
                        { icon: 'assignment', grad: 'from-violet-400 to-purple-500', value: '3,488', label: 'Reports', change: 'Active', changeColor: 'text-slate-400' },
                    ].map((kpi) => (
                        <div key={kpi.label} className="glass-card p-5 rounded-2xl flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                            <div className="flex items-center justify-between mb-4">
                                <span className={`material-symbols-outlined text-white p-2.5 bg-gradient-to-br ${kpi.grad} rounded-xl shadow-lg text-[20px]`}>{kpi.icon}</span>
                                <span className={`${kpi.changeColor} text-xs font-bold`}>{kpi.change}</span>
                            </div>
                            <p className="text-2xl font-extrabold text-slate-800">{kpi.value}</p>
                            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.1em] mt-1">{kpi.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Middle Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 glass-card rounded-2xl p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h4 className="font-bold text-slate-800">Salary Statistics</h4>
                            <p className="text-xs text-slate-400">Comparison of average payout trends (2010 - 2017)</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 mr-4">
                                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent"></span>
                                <span className="text-xs text-slate-500">Gross</span>
                                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 ml-2"></span>
                                <span className="text-xs text-slate-500">Net</span>
                            </div>
                            <select className="text-xs glass-input rounded-xl focus:ring-primary py-1.5 px-3 font-medium">
                                <option>Monthly</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                    </div>
                    <div className="h-64 relative">
                        <svg className="w-full h-full" viewBox="0 0 400 120">
                            <line stroke="rgba(148,163,184,0.15)" strokeWidth="0.5" x1="0" x2="400" y1="20" y2="20" />
                            <line stroke="rgba(148,163,184,0.15)" strokeWidth="0.5" x1="0" x2="400" y1="50" y2="50" />
                            <line stroke="rgba(148,163,184,0.15)" strokeWidth="0.5" x1="0" x2="400" y1="80" y2="80" />
                            <line stroke="rgba(148,163,184,0.15)" strokeWidth="0.5" x1="0" x2="400" y1="110" y2="110" />
                            <path d="M0,100 Q40,60 80,80 T160,40 T240,70 T320,30 T400,50" fill="none" stroke="url(#grad-line)" strokeWidth="2.5" />
                            <path d="M0,100 Q40,60 80,80 T160,40 T240,70 T320,30 T400,50 L400,120 L0,120 Z" fill="url(#grad-fill)" opacity="0.15" />
                            <path d="M0,110 Q40,90 80,100 T160,70 T240,90 T320,60 T400,80" fill="none" stroke="#60a5fa" strokeDasharray="4" strokeWidth="2" />
                            <defs>
                                <linearGradient id="grad-line" x1="0%" x2="100%"><stop offset="0%" stopColor="#7c3aed" /><stop offset="100%" stopColor="#f472b6" /></linearGradient>
                                <linearGradient id="grad-fill" x1="0%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stopColor="#7c3aed" stopOpacity="1" /><stop offset="100%" stopColor="#7c3aed" stopOpacity="0" /></linearGradient>
                            </defs>
                        </svg>
                        <div className="flex justify-between mt-4 px-2">
                            {['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'].map(y => (
                                <span key={y} className="text-[10px] text-slate-400 font-bold">{y}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center">
                    <div className="text-center mb-6">
                        <h4 className="font-bold text-slate-800">Employee Satisfaction</h4>
                        <p className="text-xs text-slate-400">Overall score for Q3 2023</p>
                    </div>
                    <div className="relative w-48 h-24 mt-4">
                        <div className="absolute inset-0 border-[16px] border-slate-100/50 rounded-t-full"></div>
                        <div className="absolute inset-0 border-[16px] border-transparent rounded-t-full" style={{ clipPath: 'inset(0 26% 0 0)', borderImage: 'linear-gradient(135deg, #7c3aed, #f472b6) 1' }}></div>
                        <div className="absolute inset-0 border-[16px] rounded-t-full" style={{ clipPath: 'inset(0 26% 0 0)', borderColor: '#7c3aed' }}></div>
                        <div className="absolute inset-x-0 bottom-0 text-center translate-y-2">
                            <p className="text-3xl font-extrabold gradient-text">74%</p>
                            <div className="flex items-center justify-center gap-1 text-primary mt-1">
                                <span className="material-symbols-outlined text-lg filled-icon">thumb_up</span>
                                <span className="text-[10px] font-bold uppercase">Great</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                        <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-3 rounded-xl text-center">
                            <p className="text-lg font-extrabold text-slate-800">85%</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase">Response</p>
                        </div>
                        <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-3 rounded-xl text-center">
                            <p className="text-lg font-extrabold text-slate-800">62%</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase">Retention</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-12">
                <div className="glass-card rounded-2xl p-6">
                    <div className="mb-6">
                        <h4 className="font-bold text-slate-800">Performance Statistics</h4>
                        <p className="text-xs text-slate-400">Team efficiency by department</p>
                    </div>
                    <div className="space-y-5">
                        {[
                            { name: 'Developer', pct: 65, grad: 'from-primary to-accent' },
                            { name: 'Design', pct: 84, grad: 'from-blue-400 to-cyan-400' },
                            { name: 'Marketing', pct: 28, grad: 'from-purple-400 to-violet-500' },
                            { name: 'Management', pct: 16, grad: 'from-pink-400 to-rose-500' },
                        ].map(item => (
                            <div key={item.name}>
                                <div className="flex justify-between text-xs mb-1.5 font-bold uppercase tracking-wider text-slate-600">
                                    <span>{item.name}</span><span>{item.pct}%</span>
                                </div>
                                <div className="w-full bg-slate-100/50 h-2.5 rounded-full overflow-hidden">
                                    <div className={`bg-gradient-to-r ${item.grad} h-full rounded-full`} style={{ width: `${item.pct}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-2 glass-card rounded-2xl p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h4 className="font-bold text-slate-800">New Employees</h4>
                            <p className="text-xs text-slate-400">Male vs Female hiring distribution</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="text-right"><p className="text-xs text-slate-400 font-bold">Total Male</p><p className="text-lg font-extrabold text-slate-800">248</p></div>
                            <div className="text-right"><p className="text-xs text-slate-400 font-bold">Total Female</p><p className="text-lg font-extrabold text-slate-800">194</p></div>
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
                                    <div className={`w-3.5 bg-gradient-to-t from-primary to-primary-light rounded-t-lg ${bar.h1}`}></div>
                                    <div className={`w-3.5 bg-gradient-to-t from-accent to-pink-300 rounded-t-lg ${bar.h2}`}></div>
                                </div>
                                <span className="text-[10px] text-slate-400 font-bold uppercase">{bar.day}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 flex items-center justify-center gap-8 border-t border-white/30 pt-4">
                        <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-primary-light"></div><span className="text-xs text-slate-500 font-medium">Male Candidates</span></div>
                        <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-accent to-pink-300"></div><span className="text-xs text-slate-500 font-medium">Female Candidates</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}
