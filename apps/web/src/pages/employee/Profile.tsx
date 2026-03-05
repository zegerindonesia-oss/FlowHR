import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('userRole');
        navigate('/login');
    };

    return (
        <div className="flex flex-col gap-6 animate-in fade-in duration-500">
            {/* Header & Avatar */}
            <div className="flex flex-col items-center justify-center text-center mt-4 mb-2">
                <div className="relative mb-4 group">
                    <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-extrabold text-4xl overflow-hidden z-10 relative">
                        E
                    </div>
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-50 z-0" style={{ animationDuration: '3s' }}></div>
                    <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-primary z-20 hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-sm font-bold">edit</span>
                    </button>
                </div>
                <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Employee User</h1>
                <p className="text-sm font-semibold text-primary uppercase tracking-widest mt-1">Staff / Tech Dept</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full mt-3 border border-slate-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Active</span>
                </div>
            </div>

            {/* Menu List */}
            <div className="flex flex-col gap-3">
                <div className="glass-card rounded-2xl overflow-hidden">
                    <div className="px-5 py-4 flex items-center gap-4 hover:bg-white/40 transition-colors cursor-pointer border-b border-white/50">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                            <span className="material-symbols-outlined">person</span>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-slate-800 text-sm">Account Settings</h4>
                            <p className="text-[10px] text-slate-500 font-medium mt-0.5">Personal details & contact info</p>
                        </div>
                        <span className="material-symbols-outlined text-slate-300">chevron_right</span>
                    </div>

                    <div className="px-5 py-4 flex items-center gap-4 hover:bg-white/40 transition-colors cursor-pointer border-b border-white/50">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0">
                            <span className="material-symbols-outlined">account_balance</span>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-slate-800 text-sm">Bank Details</h4>
                            <p className="text-[10px] text-slate-500 font-medium mt-0.5">Payroll account destination</p>
                        </div>
                        <span className="material-symbols-outlined text-slate-300">chevron_right</span>
                    </div>

                    <div className="px-5 py-4 flex items-center gap-4 hover:bg-white/40 transition-colors cursor-pointer border-b border-white/50">
                        <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                            <span className="material-symbols-outlined">lock</span>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-slate-800 text-sm">Security & Biometrics</h4>
                            <p className="text-[10px] text-slate-500 font-medium mt-0.5">Password & face login ID</p>
                        </div>
                        <span className="material-symbols-outlined text-slate-300">chevron_right</span>
                    </div>

                    <div className="px-5 py-4 flex items-center gap-4 hover:bg-white/40 transition-colors cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-500 shrink-0">
                            <span className="material-symbols-outlined">language</span>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-slate-800 text-sm">Language</h4>
                            <p className="text-[10px] text-slate-500 font-medium mt-0.5">English (US)</p>
                        </div>
                        <span className="material-symbols-outlined text-slate-300">chevron_right</span>
                    </div>
                </div>

                {/* Support & Logout */}
                <div className="glass-card rounded-2xl overflow-hidden mt-2">
                    <div className="px-5 py-4 flex items-center gap-4 hover:bg-white/40 transition-colors cursor-pointer border-b border-white/50">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                            <span className="material-symbols-outlined">help</span>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-slate-800 text-sm">Help & Support</h4>
                        </div>
                        <span className="material-symbols-outlined text-slate-300">chevron_right</span>
                    </div>

                    <div onClick={handleLogout} className="px-5 py-4 flex items-center gap-4 hover:bg-red-50 transition-colors cursor-pointer text-red-500 group">
                        <div className="w-10 h-10 rounded-xl bg-red-50 group-hover:bg-red-100 transition-colors flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined">logout</span>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-sm">Logout</h4>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4">FlowHR App v1.2.0</p>
        </div>
    );
}
