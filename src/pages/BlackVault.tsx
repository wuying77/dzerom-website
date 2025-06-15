import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PasswordInput from '@/components/black-vault/PasswordInput';
import CycleSimulation from '@/components/black-vault/CycleSimulation';
import TechEvents from '@/components/black-vault/TechEvents';
import SecretFiles from '@/components/black-vault/SecretFiles';

export default function BlackVault() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-black text-green-500 font-courier">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-32">
        <h1 className="text-4xl font-cinzel mb-12 text-center">黑档案室</h1>
        
        {!isAuthenticated ? (
          <PasswordInput onSuccess={() => setIsAuthenticated(true)} />
        ) : (
          <div className="space-y-12">
            <CycleSimulation />
            <TechEvents />
            <SecretFiles />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
