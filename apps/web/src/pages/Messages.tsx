export default function Messages() {
    return (
        <>
            <h3 className="text-xl font-bold text-slate-800 mb-6">Messages & Announcements</h3>
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 flex h-[calc(100vh-220px)]">
                {/* Left Column - Chat List */}
                <div className="w-80 border-r border-slate-100 flex flex-col">
                    <div className="p-4 border-b border-slate-100 space-y-3">
                        <button className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg font-bold text-sm">+ New Message</button>
                        <div className="relative"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span><input className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" placeholder="Search chats..." /></div>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {[
                            { name: 'All Employees', sub: 'Announcement', pinned: true, time: 'Just now' },
                            { name: 'HR Team', sub: 'Group Chat', pinned: false, time: '2h ago' },
                            { name: 'Sarah Jenkins', sub: 'The overtime bonus from...', pinned: false, time: '5h ago', active: true, dot: true },
                            { name: 'Michael Chen', sub: 'Sure, I will check...', pinned: false, time: 'Yesterday' },
                        ].map((ch, i) => (
                            <div key={i} className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${ch.active ? 'bg-primary/5 border-l-2 border-primary' : 'hover:bg-slate-50'}`}>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${ch.pinned ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-500'}`}>{ch.name.charAt(0)}</div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-center"><p className="text-sm font-bold text-slate-800 truncate">{ch.name}</p><span className="text-[10px] text-slate-400">{ch.time}</span></div>
                                    <p className="text-xs text-slate-400 truncate">{ch.sub}</p>
                                </div>
                                {ch.dot && <div className="w-2 h-2 bg-primary rounded-full"></div>}
                            </div>
                        ))}
                    </div>
                </div>
                {/* Right Column - Chat Window */}
                <div className="flex-1 flex flex-col">
                    <div className="p-4 border-b border-slate-100 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">S</div>
                        <div><p className="text-sm font-bold text-slate-800">Sarah Jenkins</p><p className="text-xs text-slate-400">Senior Developer · Engineering</p></div>
                    </div>
                    <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-50/50">
                        <div className="text-center"><span className="text-[10px] text-slate-400 bg-slate-100 px-3 py-1 rounded-full font-medium">Yesterday</span></div>
                        <div className="flex justify-start"><div className="bg-white border border-slate-100 rounded-xl rounded-bl-none px-4 py-3 max-w-md shadow-sm"><p className="text-sm text-slate-700">Hi Admin, I have a question regarding my recent payroll slip.</p></div></div>
                        <div className="flex justify-end"><div className="bg-primary text-white rounded-xl rounded-br-none px-4 py-3 max-w-md"><p className="text-sm">Sure Sarah, what seems to be the issue?</p></div></div>
                        <div className="text-center"><span className="text-[10px] text-slate-400 bg-slate-100 px-3 py-1 rounded-full font-medium">Today</span></div>
                        <div className="flex justify-start"><div className="bg-white border border-slate-100 rounded-xl rounded-bl-none px-4 py-3 max-w-md shadow-sm"><p className="text-sm text-slate-700">The overtime bonus from last week isn't reflected in my payslip.</p></div></div>
                    </div>
                    <div className="p-4 border-t border-slate-100 flex items-center gap-3">
                        <button className="p-2 text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined">attach_file</span></button>
                        <button className="p-2 text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined">sentiment_satisfied</span></button>
                        <input className="flex-1 py-2 px-4 bg-slate-50 border border-slate-200 rounded-lg text-sm" placeholder="Type a message..." />
                        <button className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90"><span className="material-symbols-outlined">send</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}
