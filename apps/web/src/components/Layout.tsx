import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
    { label: 'Dashboard', icon: 'dashboard', path: '/' },
    { label: 'Employees', icon: 'group', path: '/employees' },
    { label: 'Attendance', icon: 'calendar_today', path: '/attendance' },
    { label: 'Payroll', icon: 'payments', path: '/payroll' },
    { label: 'Reports', icon: 'description', path: '/reports' },
    { label: 'Messages', icon: 'mail', path: '/messages', badge: 3 },
]

const systemItems = [
    { label: 'Settings', icon: 'settings', path: '/settings' },
    { label: 'Support', icon: 'help', path: '/support' },
]

export default function Layout() {
    return (
        <div className="gradient-bg text-slate-800 font-display min-h-screen relative">
            {/* Decorative blobs */}
            <div className="blob-1"></div>
            <div className="blob-2"></div>
            <div className="blob-3"></div>

            <div className="flex min-h-screen relative z-[1]">
                {/* Glass Sidebar */}
                <aside className="w-64 glass-sidebar flex flex-col fixed h-full z-10">
                    <div className="p-6 flex items-center gap-3">
                        <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-primary/25">M</div>
                        <h1 className="text-xl font-extrabold tracking-tight gradient-text">FlowHR</h1>
                    </div>
                    <nav className="flex-1 px-4 py-4 space-y-1">
                        <div className="text-[10px] font-bold text-slate-400/80 uppercase tracking-[0.15em] px-3 mb-3">Main Menu</div>
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.path === '/'}
                                className={({ isActive }) =>
                                    `flex items-center ${item.badge ? 'justify-between' : 'gap-3'} px-3 py-2.5 rounded-xl transition-all duration-200 ${isActive
                                        ? 'bg-gradient-to-r from-primary/20 to-accent/10 text-primary font-semibold shadow-sm'
                                        : 'text-slate-600 hover:bg-white/30 hover:text-primary'
                                    }`
                                }
                            >
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                    <span className="text-sm">{item.label}</span>
                                </div>
                                {item.badge && (
                                    <span className="bg-gradient-to-r from-accent to-accent-warm text-white text-[10px] w-5 h-5 rounded-full font-bold flex items-center justify-center shadow-sm">{item.badge}</span>
                                )}
                            </NavLink>
                        ))}
                        <div className="pt-8 text-[10px] font-bold text-slate-400/80 uppercase tracking-[0.15em] px-3 mb-3">System</div>
                        {systemItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${isActive
                                        ? 'bg-gradient-to-r from-primary/20 to-accent/10 text-primary font-semibold shadow-sm'
                                        : 'text-slate-600 hover:bg-white/30 hover:text-primary'
                                    }`
                                }
                            >
                                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                <span className="text-sm">{item.label}</span>
                            </NavLink>
                        ))}
                    </nav>
                    <div className="p-4 border-t border-white/20">
                        <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-red-400 hover:bg-red-500/10 transition-all duration-200 font-medium text-sm">
                            <span className="material-symbols-outlined text-[20px]">logout</span>
                            <span>Logout</span>
                        </button>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 ml-64 min-h-screen flex flex-col">
                    {/* Glass Header */}
                    <header className="h-20 glass-strong px-8 flex items-center justify-between sticky top-0 z-10 rounded-b-2xl mx-4 mt-0">
                        <div>
                            <h2 className="text-xl font-bold text-slate-800">Hello Admin! <span className="text-2xl">👋</span></h2>
                            <p className="text-xs text-slate-500">Welcome back to your dashboard overview.</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                                <input className="pl-10 pr-4 py-2 glass-input rounded-xl text-sm w-56 focus:ring-primary focus:outline-none placeholder:text-slate-400" placeholder="Search data..." type="text" />
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="relative p-2 text-slate-500 hover:text-primary hover:bg-white/40 rounded-xl transition-all">
                                    <span className="material-symbols-outlined text-[20px]">notifications</span>
                                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full ring-2 ring-white"></span>
                                </button>
                                <button className="relative p-2 text-slate-500 hover:text-primary hover:bg-white/40 rounded-xl transition-all">
                                    <span className="material-symbols-outlined text-[20px]">mail</span>
                                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full ring-2 ring-white"></span>
                                </button>
                            </div>
                            <div className="flex items-center gap-3 pl-4 border-l border-white/30">
                                <div className="text-right">
                                    <p className="text-sm font-bold text-slate-800">Admin User</p>
                                    <p className="text-[10px] text-slate-400 font-medium">HR Manager</p>
                                </div>
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shadow-lg shadow-primary/25">A</div>
                            </div>
                        </div>
                    </header>

                    {/* Page Content */}
                    <div className="p-8 space-y-8">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    )
}
