'use client';

import { useState } from 'react';
import RomanticButton from '@/components/ui/RomanticButton';
import LoveInput from '@/components/ui/LoveInput';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send a password reset email here
    setMessage(`Tautan pengaturan ulang kata sandi dikirim ke ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-rose-800">Lupa Kata Sandi</h1>
        </div>

        {message && (
          <div className="mb-4 p-3 bg-rose-100 text-rose-700 rounded-lg">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <LoveInput
            label="Alamat Email"
            name="email"
            type="email"
            placeholder="Masukkan email Anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-lg"
          />

          <div>
            <RomanticButton type="submit" fullWidth>
              Reset Password
            </RomanticButton>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-rose-600">
            Ingat kata sandi Anda?{' '}
            <a href="/auth/login" className="font-medium text-rose-600 hover:text-rose-500">
              Masuk di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
