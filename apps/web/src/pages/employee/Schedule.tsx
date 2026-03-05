export default function Schedule() {
    return (
        <div className="flex flex-col gap-6 animate-in fade-in duration-500">
            <div className="mb-2">
                <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Schedule</h1>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1">My Weekly Shifts</p>
            </div>

            {/* Date Picker Strip */}
            <div className="flex justify-between items-center bg-white/40 p-2 rounded-2xl glass-card border border-white/50">
                {[
                    { day: 'Mon', date: '12' },
                    { day: 'Tue', date: '13', active: true },
                    { day: 'Wed', date: '14' },
                    { day: 'Thu', date: '15' },
                    { day: 'Fri', date: '16' },
                ].map((d, i) => (
                    <button
                        key={i}
                        className={`flex flex-col items-center justify-center w-14 h-16 rounded-xl transition-all ${d.active
                                ? 'bg-gradient-to-b from-primary to-accent text-white shadow-lg shadow-primary/30 scale-105'
                                : 'text-slate-500 hover:bg-white/60'
                            }`}
                    >
                        <span className={`text-[10px] font-bold uppercase ${d.active ? 'text-white/90' : 'text-slate-400'}`}>{d.day}</span>
                        <span className="text-xl font-extrabold mt-1 leading-none">{d.date}</span>
                    </button>
                ))}
            </div>

            {/* Shift Details Card */}
            <div className="glass-card p-6 rounded-3xl relative overflow-hidden mt-2 border-2 border-white/60 shadow-xl shadow-primary/5">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-full -z-10"></div>

                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary shrink-0 border border-primary/20">
                            <span className="material-symbols-outlined text-2xl">wb_sunny</span>
                        </div>
                        <div>
                            <h3 className="font-extrabold text-slate-800 text-lg">Morning Shift</h3>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Regular Hours</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex items-start gap-4 relative">
                        {/* Timeline line */}
                        <div className="absolute left-[11px] top-6 bottom-[-30px] w-0.5 bg-slate-200"></div>

                        <div className="w-6 h-6 rounded-full bg-emerald-100 border-4 border-white flex items-center justify-center shrink-0 z-10 shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        </div>
                        <div className="flex-1 bg-white/50 p-3 rounded-xl border border-white/60">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 mt-0.5">Start Time</p>
                            <div className="flex items-center justify-between">
                                <p className="text-xl font-extrabold text-slate-800">09:00 AM</p>
                                <span className="material-symbols-outlined text-emerald-500 bg-emerald-50 p-1.5 rounded-lg">login</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 relative">
                        <div className="w-6 h-6 rounded-full bg-rose-100 border-4 border-white flex items-center justify-center shrink-0 z-10 shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                        </div>
                        <div className="flex-1 bg-white/50 p-3 rounded-xl border border-white/60">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 mt-0.5">End Time</p>
                            <div className="flex items-center justify-between">
                                <p className="text-xl font-extrabold text-slate-800">05:00 PM</p>
                                <span className="material-symbols-outlined text-rose-500 bg-rose-50 p-1.5 rounded-lg">logout</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-200/60 flex items-center gap-3">
                    <span className="material-symbols-outlined text-slate-400">location_on</span>
                    <div>
                        <p className="text-sm font-bold text-slate-700">Main Tech Office</p>
                        <p className="text-xs text-slate-500">Floor 4, Workstation B-12</p>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4 mt-2">
                <button className="py-3.5 bg-white/60 hover:bg-white/80 transition-colors border border-white/80 rounded-xl font-bold text-sm text-slate-600 flex items-center justify-center gap-2 shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">swap_horiz</span>
                    Trade Shift
                </button>
                <button className="py-3.5 bg-white/60 hover:bg-white/80 transition-colors border border-white/80 rounded-xl font-bold text-sm text-rose-500 flex items-center justify-center gap-2 shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">event_busy</span>
                    Call Out
                </button>
            </div>
        </div>
    );
}
