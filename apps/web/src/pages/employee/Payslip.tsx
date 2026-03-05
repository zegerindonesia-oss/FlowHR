export default function Payslip() {
    return (
        <div className="flex flex-col gap-6 animate-in fade-in duration-500 overflow-x-hidden">
            <div className="flex items-center justify-between mb-2">
                <div>
                    <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Payslips</h1>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1">Salary Details</p>
                </div>
                {/* Month Selector */}
                <div className="flex items-center gap-2 bg-white/40 p-1.5 rounded-full border border-white/60 shadow-sm">
                    <button className="w-8 h-8 rounded-full hover:bg-white/60 flex items-center justify-center text-slate-400 transition-colors"><span className="material-symbols-outlined text-[20px]">chevron_left</span></button>
                    <span className="text-sm font-bold text-slate-700 px-1">October 2023</span>
                    <button className="w-8 h-8 rounded-full hover:bg-white/60 flex items-center justify-center text-slate-400 transition-colors"><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
                </div>
            </div>

            {/* Total Net Pay Card */}
            <div className="glass-card p-6 rounded-3xl relative overflow-hidden bg-gradient-to-br from-primary/90 to-accent/90 border-0 shadow-xl shadow-primary/20 text-white">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-bl-full -z-0"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-32 h-32 bg-white/10 rounded-tr-full -z-0"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    <span className="material-symbols-outlined text-4xl mb-3 text-white/80">account_balance_wallet</span>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/80 mb-1">Total Net Pay</p>
                    <h2 className="text-4xl font-extrabold tracking-tight drop-shadow-md">$4,250.00</h2>
                    <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 rounded-full backdrop-blur-md border border-white/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-[10px] font-bold uppercase tracking-wider">Deposited on Oct 25</span>
                    </div>
                </div>
            </div>

            {/* Breakdown */}
            <div className="space-y-4 mt-2">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest px-2">Earnings</h3>

                <div className="glass-card p-5 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-emerald-500 bg-emerald-50 p-2 rounded-xl text-lg">payments</span>
                            <div>
                                <p className="font-bold text-slate-700 text-sm">Base Salary</p>
                                <p className="text-[10px] text-slate-400 bg-slate-100 inline-block px-1.5 py-0.5 rounded mt-0.5">160 Hours</p>
                            </div>
                        </div>
                        <span className="font-extrabold text-slate-800">$4,000.00</span>
                    </div>

                    <div className="w-full h-px bg-slate-200/50"></div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-blue-500 bg-blue-50 p-2 rounded-xl text-lg">card_giftcard</span>
                            <div>
                                <p className="font-bold text-slate-700 text-sm">Bonus / Allowance</p>
                                <p className="text-[10px] text-slate-400 bg-slate-100 inline-block px-1.5 py-0.5 rounded mt-0.5">Transport</p>
                            </div>
                        </div>
                        <span className="font-extrabold text-slate-800">$500.00</span>
                    </div>
                </div>

                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest px-2 pt-4">Deductions</h3>

                <div className="glass-card p-5 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-rose-500 bg-rose-50 p-2 rounded-xl text-lg">account_balance</span>
                            <div>
                                <p className="font-bold text-slate-700 text-sm">Income Tax</p>
                            </div>
                        </div>
                        <span className="font-extrabold text-rose-500">-$150.00</span>
                    </div>

                    <div className="w-full h-px bg-slate-200/50"></div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-orange-500 bg-orange-50 p-2 rounded-xl text-lg">medical_services</span>
                            <div>
                                <p className="font-bold text-slate-700 text-sm">Health Insurance</p>
                            </div>
                        </div>
                        <span className="font-extrabold text-rose-500">-$100.00</span>
                    </div>
                </div>
            </div>

            {/* Download Button */}
            <button className="btn-gradient w-full py-4 rounded-xl font-bold text-white shadow-lg shadow-primary/30 mt-4 flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-95">
                <span className="material-symbols-outlined text-xl">download</span>
                Download PDF Slip
            </button>
            <br />
        </div>
    );
}
