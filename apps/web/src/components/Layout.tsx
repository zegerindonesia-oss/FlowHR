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
        <div className="bg-background-light text-slate-900 font-display">
            <div className="flex min-h-screen">
                {/* Sidebar */}
                <aside className="w-64 bg-white border-r border-slate-200 flex flex-col fixed h-full z-10">
                    <div className="p-6 flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold">M</div>
                        <h1 className="text-xl font-bold tracking-tight">Flow<span className="text-primary">HR</span></h1>
                    </div>
                    <nav className="flex-1 px-4 py-4 space-y-1">
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">Main Menu</div>
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.path === '/'}
                                className={({ isActive }) =>
                                    `flex items-center ${item.badge ? 'justify-between' : 'gap-3'} px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary/10 text-primary font-medium' : 'text-slate-600 hover:bg-slate-50'
                                    }`
                                }
                            >
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                    <span>{item.label}</span>
                                </div>
                                {item.badge && (
                                    <span className="bg-primary text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">{item.badge}</span>
                                )}
                            </NavLink>
                        ))}
                        <div className="pt-8 text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">System</div>
                        {systemItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary/10 text-primary font-medium' : 'text-slate-600 hover:bg-slate-50'
                                    }`
                                }
                            >
                                <span className="material-symbols-outlined">{item.icon}</span>
                                <span>{item.label}</span>
                            </NavLink>
                        ))}
                    </nav>
                    <div className="p-4 border-t border-slate-100">
                        <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors font-medium">
                            <span className="material-symbols-outlined">logout</span>
                            <span>Logout</span>
                        </button>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 ml-64 min-h-screen flex flex-col">
                    {/* Header */}
                    <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-10">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-800">Hello Admin!</h2>
                            <p className="text-sm text-slate-500">Welcome back to your dashboard overview.</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                                <input className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm w-64 focus:ring-primary" placeholder="Search data..." type="text" />
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full">
                                    <span className="material-symbols-outlined">notifications</span>
                                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
                                </button>
                                <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full">
                                    <span className="material-symbols-outlined">mail</span>
                                    <span className="absolute top-2 right-2 w-2 h-2 bg-primary border-2 border-white rounded-full"></span>
                                </button>
                            </div>
                            <div className="flex items-center gap-3 ml-2 pl-4 border-l border-slate-200">
                                <div className="text-right">
                                    <p className="text-sm font-bold">Admin User</p>
                                    <p className="text-xs text-slate-400">HR Manager</p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">A</div>
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
