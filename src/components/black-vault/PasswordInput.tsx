import { useState } from 'react';

export default function PasswordInput({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const correctPassword = 'DIMENSION-ZERO';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      onSuccess();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className={`relative ${error ? 'crt-error' : ''}`}>
          <div className="crt-screen">
            <label htmlFor="password" className="block mb-2 text-green-500">
              输入访问密码:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-black border border-green-500 text-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="******"
            />
          </div>
          {error && <div className="crt-overlay"></div>}
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-500/10 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors"
        >
          验证
        </button>
      </form>
    </div>
  );
}
