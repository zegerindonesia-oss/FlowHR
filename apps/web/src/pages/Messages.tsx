import { useState } from 'react';

export default function Messages() {
    const userRole = localStorage.getItem('userRole');
    const isAdmin = userRole === 'admin';
    const [activeMobileChat, setActiveMobileChat] = useState<string | null>(null);

    const chats = [
        { name: 'All Employees', sub: 'Announcement', pinned: true, time: 'Just now', initial: 'A' },
        { name: 'HR Team', sub: 'Group Chat', pinned: false, time: '2h ago', initial: 'H' },
        { name: 'Sarah Jenkins', sub: 'The overtime bonus from...', pinned: false, time: '5h ago', active: true, dot: true, initial: 'S' },
        { name: 'Michael Chen', sub: 'Sure, I will check...', pinned: false, time: 'Yesterday', initial: 'M' },
    ];

    if (!isAdmin) {
        if (activeMobileChat) {
            return (
                <div className="flex flex-col h-[calc(100vh-140px)] animate-in fade-in duration-300 pb-20">
                    {/* Mobile Chat Header */}
                    <div className="glass-card rounded-2xl p-4 flex items-center gap-3 mb-4 shadow-sm border border-white/60 shrink-0">
                        <button onClick={() => setActiveMobileChat(null)} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors">
                            <span className="material-symbols-outlined text-sm font-bold">arrow_back</span>
                        </button>
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400/20 to-cyan-400/20 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                            {activeMobileChat.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-extrabold text-slate-800 text-sm truncate">{activeMobileChat}</h3>
                            <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider">Online</p>
                        </div>
                        <button className="text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-lg">more_vert</span>
                        </button>
                    </div>

                    {/* Mobile Chat Area */}
                    <div className="flex-1 overflow-y-auto space-y-4 px-2 custom-scrollbar">
                        <div className="text-center"><span className="text-[10px] text-slate-400 bg-black/5 px-3 py-1 rounded-full font-medium">Yesterday</span></div>
                        <div className="flex justify-start"><div className="glass-card rounded-2xl rounded-bl-none px-4 py-3 max-w-[85%] border border-white/60"><p className="text-sm text-slate-700">Hi Admin, I have a question regarding my recent payroll slip.</p></div></div>
                        <div className="flex justify-end"><div className="bg-gradient-to-r from-primary to-primary-light text-white rounded-2xl rounded-br-none px-4 py-3 max-w-[85%] shadow-lg shadow-primary/20"><p className="text-sm">Sure, what seems to be the issue?</p></div></div>
                        <div className="text-center"><span className="text-[10px] text-slate-400 bg-black/5 px-3 py-1 rounded-full font-medium">Today</span></div>
                        <div className="flex justify-start"><div className="glass-card rounded-2xl rounded-bl-none px-4 py-3 max-w-[85%] border border-white/60"><p className="text-sm text-slate-700">The overtime bonus from last week isn't reflected in my payslip.</p></div></div>
                    </div>

                    {/* Mobile Chat Input (Fixed at bottom above nav) */}
                    <div className="mt-4 glass-card p-2 rounded-2xl flex items-center gap-2 border border-white/60 shadow-sm shrink-0">
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors shrink-0"><span className="material-symbols-outlined text-lg">add_circle</span></button>
                        <input className="flex-1 py-2 px-3 bg-white/50 rounded-xl text-sm focus:outline-none placeholder:text-slate-400 font-medium" placeholder="Message..." />
                        <button className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center shadow-md shadow-primary/20 shrink-0 transform transition-transform active:scale-95"><span className="material-symbols-outlined text-sm font-bold ml-1">send</span></button>
                    </div>
                </div>
            );
        }

        return (
            <div className="flex flex-col gap-4 animate-in fade-in duration-500 pb-24">
                <div className="mb-2">
                    <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Messages</h1>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1">Chats & Announcements</p>
                </div>

                <div className="relative mb-2">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input className="w-full pl-12 pr-4 py-3.5 glass-input rounded-2xl text-sm focus:ring-2 focus:ring-primary/50 focus:outline-none placeholder:text-slate-400 font-medium border border-white/60 shadow-sm" placeholder="Search conversations..." />
                </div>

                <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
                    <button className="whitespace-nowrap px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full text-xs font-bold shadow-md shadow-primary/20">All Messages</button>
                    <button className="whitespace-nowrap px-4 py-2 bg-white/40 text-slate-600 rounded-full text-xs font-bold border border-white/60 hover:bg-white/60 transition-colors">Unread (1)</button>
                    <button className="whitespace-nowrap px-4 py-2 bg-white/40 text-slate-600 rounded-full text-xs font-bold border border-white/60 hover:bg-white/60 transition-colors">Groups</button>
                </div>

                <div className="glass-card rounded-3xl overflow-hidden mt-2 border border-white/50 shadow-sm flex flex-col">
                    {chats.map((ch, i) => (
                        <div key={i} onClick={() => setActiveMobileChat(ch.name)} className={`flex items-center gap-4 p-4 cursor-pointer transition-colors border-b border-white/30 last:border-b-0 ${ch.active ? 'bg-primary/5' : 'hover:bg-white/40'}`}>
                            <div className="relative">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg border-2 border-white shadow-sm ${ch.pinned ? 'bg-gradient-to-br from-primary/80 to-accent/80 text-white' : 'bg-slate-100 text-slate-500'}`}>
                                    {ch.pinned ? <span className="material-symbols-outlined text-lg">campaign</span> : ch.initial}
                                </div>
                                {ch.dot && <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-gradient-to-br from-emerald-400 to-emerald-500 border-2 border-white rounded-full"></div>}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-0.5">
                                    <p className={`text-sm truncate ${ch.dot ? 'font-extrabold text-slate-800' : 'font-bold text-slate-700'}`}>{ch.name}</p>
                                    <span className={`text-[10px] whitespace-nowrap ${ch.dot ? 'text-primary font-bold' : 'text-slate-400 font-medium'}`}>{ch.time}</span>
                                </div>
                                <p className={`text-xs truncate ${ch.dot ? 'font-bold text-slate-700' : 'text-slate-500'}`}>{ch.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Floating Action Button */}
                <button className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full shadow-[0_8px_25px_rgba(124,58,237,0.4)] flex items-center justify-center text-white transform transition-transform active:scale-90 z-40 border-2 border-white">
                    <span className="material-symbols-outlined edit-icon text-[24px]">edit_square</span>
                </button>
            </div>
        );
    }

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
