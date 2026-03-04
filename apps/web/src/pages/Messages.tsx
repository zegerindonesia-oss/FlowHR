export default function Messages() {
    return (
        <>
            <h3 className="text-xl font-bold text-slate-800 mb-6">Messages & Announcements</h3>
            <div className="glass-card rounded-2xl flex h-[calc(100vh-220px)] overflow-hidden">
                <div className="w-80 border-r border-white/30 flex flex-col">
                    <div className="p-4 border-b border-white/20 space-y-3">
                        <button className="w-full btn-gradient py-2.5 rounded-xl font-bold text-sm">+ New Message</button>
                        <div className="relative"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span><input className="w-full pl-10 pr-4 py-2 glass-input rounded-xl text-sm focus:outline-none" placeholder="Search chats..." /></div>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {[
                            { name: 'All Employees', sub: 'Announcement', pinned: true, time: 'Just now' },
                            { name: 'HR Team', sub: 'Group Chat', pinned: false, time: '2h ago' },
                            { name: 'Sarah Jenkins', sub: 'The overtime bonus from...', pinned: false, time: '5h ago', active: true, dot: true },
                            { name: 'Michael Chen', sub: 'Sure, I will check...', pinned: false, time: 'Yesterday' },
                        ].map((ch, i) => (
                            <div key={i} className={`flex items-center gap-3 px-4 py-3.5 cursor-pointer transition-all ${ch.active ? 'bg-gradient-to-r from-primary/10 to-accent/5 border-l-2 border-primary' : 'hover:bg-white/20'}`}>
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${ch.pinned ? 'bg-gradient-to-br from-primary/20 to-accent/20 text-primary' : 'bg-white/40 text-slate-500'}`}>{ch.name.charAt(0)}</div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-center"><p className="text-sm font-bold text-slate-800 truncate">{ch.name}</p><span className="text-[10px] text-slate-400">{ch.time}</span></div>
                                    <p className="text-xs text-slate-400 truncate">{ch.sub}</p>
                                </div>
                                {ch.dot && <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-1 flex flex-col">
                    <div className="p-4 border-b border-white/20 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400/20 to-cyan-400/20 text-blue-600 flex items-center justify-center font-bold text-sm">S</div>
                        <div><p className="text-sm font-bold text-slate-800">Sarah Jenkins</p><p className="text-xs text-slate-400">Senior Developer · Engineering</p></div>
                    </div>
                    <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-white/10">
                        <div className="text-center"><span className="text-[10px] text-slate-400 bg-white/50 px-3 py-1 rounded-full font-medium">Yesterday</span></div>
                        <div className="flex justify-start"><div className="glass-card rounded-2xl rounded-bl-none px-4 py-3 max-w-md"><p className="text-sm text-slate-700">Hi Admin, I have a question regarding my recent payroll slip.</p></div></div>
                        <div className="flex justify-end"><div className="bg-gradient-to-r from-primary to-primary-light text-white rounded-2xl rounded-br-none px-4 py-3 max-w-md shadow-lg shadow-primary/20"><p className="text-sm">Sure Sarah, what seems to be the issue?</p></div></div>
                        <div className="text-center"><span className="text-[10px] text-slate-400 bg-white/50 px-3 py-1 rounded-full font-medium">Today</span></div>
                        <div className="flex justify-start"><div className="glass-card rounded-2xl rounded-bl-none px-4 py-3 max-w-md"><p className="text-sm text-slate-700">The overtime bonus from last week isn't reflected in my payslip.</p></div></div>
                    </div>
                    <div className="p-4 border-t border-white/20 flex items-center gap-3">
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">attach_file</span></button>
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">sentiment_satisfied</span></button>
                        <input className="flex-1 py-2.5 px-4 glass-input rounded-xl text-sm focus:outline-none" placeholder="Type a message..." />
                        <button className="btn-gradient p-2.5 rounded-xl"><span className="material-symbols-outlined text-[20px]">send</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}
