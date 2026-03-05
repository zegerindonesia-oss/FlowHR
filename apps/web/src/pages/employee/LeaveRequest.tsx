export default function LeaveRequest() {
    return (
        <div className="flex flex-col gap-6 animate-in fade-in duration-500">
            <div className="mb-2">
                <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Request Leave</h1>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1">Submit time-off</p>
            </div>

            {/* Balances Card */}
            <div className="glass-card p-5 rounded-2xl relative overflow-hidden flex items-center justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full -z-10"></div>
                <div>
                    <h3 className="text-sm font-bold text-slate-600 mb-1">Annual Leave Limit</h3>
                    <p className="text-3xl font-extrabold text-slate-800">12 <span className="text-sm text-slate-500 font-semibold tracking-wide">Days</span></p>
                </div>
                <div className="w-14 h-14 rounded-full border-4 border-primary/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">0</span>
                </div>
            </div>

            {/* Request Form */}
            <div className="glass-card p-6 rounded-2xl space-y-5">
                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2" htmlFor="type">
                        Leave Type
                    </label>
                    <div className="relative">
                        <select className="w-full pl-4 pr-10 py-3 glass-input rounded-xl text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:outline-none appearance-none font-medium text-slate-700" id="type">
                            <option>Annual Leave (Cuti Tahunan)</option>
                            <option>Sick Leave (Sakit)</option>
                            <option>Unpaid Leave (Izin)</option>
                            <option>Maternity Leave</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2" htmlFor="start">
                            Start Date
                        </label>
                        <input type="date" id="start" className="w-full px-4 py-3 glass-input rounded-xl text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:outline-none font-medium text-slate-700" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2" htmlFor="end">
                            End Date
                        </label>
                        <input type="date" id="end" className="w-full px-4 py-3 glass-input rounded-xl text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:outline-none font-medium text-slate-700" />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2" htmlFor="reason">
                        Reason
                    </label>
                    <textarea
                        id="reason"
                        rows={3}
                        className="w-full px-4 py-3 glass-input rounded-xl text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:outline-none placeholder:text-slate-400 resize-none font-medium text-slate-700"
                        placeholder="Please briefly explain your leave request..."
                    ></textarea>
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Attachment (Optional)
                    </label>
                    <div className="w-full py-4 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center gap-2 bg-white/30 cursor-pointer hover:bg-white/50 transition-colors">
                        <span className="material-symbols-outlined text-slate-400 text-3xl">cloud_upload</span>
                        <span className="text-xs font-bold text-slate-500">Upload Doctor's Note (PDF/JPG)</span>
                    </div>
                </div>

                <button className="btn-gradient w-full py-3.5 rounded-xl font-bold text-white shadow-lg shadow-primary/30 mt-2">
                    Submit Request
                </button>
            </div>

            {/* History Link */}
            <button className="flex items-center justify-between p-4 glass-card rounded-2xl hover:bg-white/40 transition-colors group">
                <div className="flex items-center gap-3 text-slate-700">
                    <span className="material-symbols-outlined">history</span>
                    <span className="font-bold text-sm">View Request History</span>
                </div>
                <span className="material-symbols-outlined text-slate-400 group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
        </div>
    );
}
