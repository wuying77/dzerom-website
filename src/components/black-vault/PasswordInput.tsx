import { useState } from 'react';
import { toast } from 'sonner';

export default function PasswordInput({ onSuccess }: { onSuccess: (isAdmin: boolean) => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // 从环境变量获取凭据
  const credentials = {
    superAdmin: {
      username: import.meta.env.VITE_SUPER_ADMIN_USERNAME || 'alinme-Dzero',
      password: import.meta.env.VITE_SUPER_ADMIN_PASSWORD || 'fr@27!Ek-c?/KH$'
    },
    testUser: {
      username: import.meta.env.VITE_TEST_USERNAME || 'testuser',
      password: import.meta.env.VITE_TEST_PASSWORD || 'testpass123'
    },
    legacyPassword: import.meta.env.VITE_LEGACY_PASSWORD || 'DIMENSION-ZERO'
  };

  // 登录尝试限制
  const MAX_LOGIN_ATTEMPTS = 5;
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLocked) {
      setError(true);
      toast.error('账户已锁定，请稍后再试');
      return;
    }

    let isAdmin = false;
    let isValid = false;
    
    // 检查超级管理员凭据
    if (username === credentials.superAdmin.username && 
        password === credentials.superAdmin.password) {
      isValid = true;
      isAdmin = true;
    }
    // 检查测试用户凭据
    else if (username === credentials.testUser.username && 
             password === credentials.testUser.password) {
      isValid = true;
    }
    // 检查旧密码
    else if (password === credentials.legacyPassword) {
      isValid = true;
    }

    if (isValid) {
      setLoginAttempts(0);
      onSuccess(isAdmin);
    } else {
      const attempts = loginAttempts + 1;
      setLoginAttempts(attempts);
      setError(true);
      
      if (attempts >= MAX_LOGIN_ATTEMPTS) {
        setIsLocked(true);
        toast.error('登录尝试过多，账户已锁定30分钟');
        setTimeout(() => setIsLocked(false), 30 * 60 * 1000);
      } else {
        toast.error(`用户名或密码错误，剩余尝试次数: ${MAX_LOGIN_ATTEMPTS - attempts}`);
        setTimeout(() => setError(false), 2000);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className={`relative ${error ? 'crt-error' : ''}`}>
          <div className="crt-screen">
             <div className="space-y-4">
               <div>
                 <label htmlFor="username" className="block mb-1 text-green-500">用户名:</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2 bg-black border border-green-500 text-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                    placeholder="输入用户名"
                  />
               </div>
               <div>
                 <label htmlFor="password" className="block mb-1 text-green-500">密码:</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2 bg-black border border-green-500 text-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 pr-10"
                      placeholder="******"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 hover:text-green-300"
                    >
                      <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                  </div>
               </div>
             </div>
             {error && <div className="crt-overlay"></div>}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-500/10 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors"
          >
            验证
          </button>
        </div>
      </form>
    </div>
  );
}