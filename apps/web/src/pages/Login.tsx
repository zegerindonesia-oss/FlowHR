import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authClient } from '../lib/auth-client';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            // Helper to support the dummy UX (typing just 'admin' or 'employee')
            const finalEmail = email.includes('@') ? email : `${email}@flowhr.com`;

            const { data, error } = await authClient.signIn.email({
                email: finalEmail.toLowerCase(),
                password: password,
            });

            if (error) {
                setError(error.message || 'Login failed');
                return;
            }

            if (data?.user) {
                // Save session role
                localStorage.setItem('userRole', (data.user as any).role || 'employee');
                localStorage.setItem('userId', data.user.id);
                navigate('/');
            }
        } catch (err) {
            setError('Unable to connect to server. Please try again later.');
            console.error(err);
        }
    };

    return (
        <div className="gradient-bg text-slate-800 font-display min-h-screen relative flex items-center justify-center p-4">
            {/* Decorative blobs */}
            <div className="blob-1"></div>
            <div className="blob-2"></div>
            <div className="blob-3"></div>

            <div className="glass-card w-full max-w-md p-8 md:p-10 rounded-[2rem] relative z-10">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-primary/25 mx-auto mb-6 transform hover:scale-105 transition-transform duration-300">
                        <span className="material-symbols-outlined text-3xl">hr_dashboard</span>
                    </div>
                    <h1 className="text-3xl font-extrabold tracking-tight gradient-text mb-2">Welcome Back</h1>
                    <p className="text-slate-500 text-sm">Sign in to your FlowHR account to continue.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">mail</span>
                            <input
                                id="email"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-12 pr-4 py-3.5 glass-input rounded-xl text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:outline-none placeholder:text-slate-400 transition-all font-medium"
                                placeholder="Username or Email"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label className="block text-sm font-semibold text-slate-700" htmlFor="password">
                                Password
                            </label>
                            <a href="#" className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light transition-colors">
                                Forgot password?
                            </a>
                        </div>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">lock</span>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-12 pr-4 py-3.5 glass-input rounded-xl text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 focus:outline-none placeholder:text-slate-400 transition-all font-medium"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-3 py-2">
                        <input
                            type="checkbox"
                            id="remember"
                            className="w-4 h-4 rounded text-primary border-slate-300 focus:ring-primary/50 bg-white/50"
                        />
                        <label htmlFor="remember" className="text-sm font-medium text-slate-600">
                            Remember me for 30 days
                        </label>
                    </div>

                    {error && (
                        <div className="p-3 text-sm text-red-500 bg-red-100/50 backdrop-blur-md rounded-xl border border-red-200 text-center font-medium">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="btn-gradient w-full py-4 rounded-xl font-bold text-white text-base shadow-lg shadow-primary/30 flex items-center justify-center gap-2 group"
                    >
                        <span>Sign In</span>
                        <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>

                    <div className="relative flex items-center py-4">
                        <div className="flex-grow border-t border-slate-200/50"></div>
                        <span className="flex-shrink-0 mx-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                            Or continue with
                        </span>
                        <div className="flex-grow border-t border-slate-200/50"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button type="button" className="flex items-center justify-center gap-2 py-3 px-4 glass rounded-xl hover:bg-white/60 transition-colors border border-white/40 text-sm font-semibold text-slate-700">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                            Google
                        </button>
                        <button type="button" className="flex items-center justify-center gap-2 py-3 px-4 glass rounded-xl hover:bg-white/60 transition-colors border border-white/40 text-sm font-semibold text-slate-700">
                            <span className="material-symbols-outlined text-[20px] text-slate-700">fingerprint</span>
                            Biometrics
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-center text-sm text-slate-500 font-medium">
                    Don't have an account? <a href="#" className="text-primary font-bold hover:underline">Contact HR</a>
                </p>
            </div>
        </div>
    );
}
