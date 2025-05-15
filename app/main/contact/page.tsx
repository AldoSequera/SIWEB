import RomanticNavbar from '@/components/main/RomanticNavbar';
import HeartFooter from '@/components/main/HeartFooter';
import RomanticButton from '@/components/ui/RomanticButton';
import LoveInput from '@/components/ui/LoveInput';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-rose-50">
      <RomanticNavbar />

      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-rose-800 mb-8 text-center">Pesan Manis</h1>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-rose-700 mb-4">Informasi Kontak</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-rose-800">Toko Kue Kami</p>
                      <p className="text-rose-600">123 Jalan Cinta, Kota Romansa</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-rose-800">Kirim Email</p>
                      <p className="text-rose-600">cinta@sweetlovebakery.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-rose-800">Hubungi Kami</p>
                      <p className="text-rose-600">(123) 456-7890</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-rose-700 mb-4">Jam Buka</h3>
                  <ul className="space-y-2 text-rose-600">
                    <li className="flex justify-between">
                      <span>Senin - Jumat</span>
                      <span>09:00 AM - 06:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sabtu</span>
                      <span>10:00 AM - 04:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Minggu</span>
                      <span>Tutup</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-rose-700 mb-4">Kirimkan Pesan Kepada Kami</h2>
                <form className="space-y-4">
                  <LoveInput
                    label="Nama Anda"
                    type="text"
                    placeholder="Masukkan nama Anda"
                  />
                  <LoveInput
                    label="Email Anda"
                    type="email"
                    placeholder="Masukkan email Anda"
                  />
                  <div>
                    <label className="block text-rose-700 mb-1">Pesan Anda</label>
                    <textarea
                      className="w-full p-3 border border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                      rows={5}
                      placeholder="Tulis pesan manis Anda di sini..."
                    ></textarea>
                  </div>
                  <RomanticButton>
                    Kirim Pesan
                  </RomanticButton>
                </form>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-rose-700 mb-4">Temukan Kami</h2>
              <div className="bg-rose-100 h-64 rounded-lg flex items-center justify-center">
                {/* Menambahkan Google Maps iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3475590362325!2d106.81093255115678!3d-6.160872388369535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3c02d37b2db%3A0x2b6b5c9b02eeb847!2s123%20Love%20Lane%2C%20Romance%20City!5e0!3m2!1sen!2sid!4v1634568797781!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  aria-hidden="false"
                  title="Lokasi Sweet Love Bakery"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      <HeartFooter />
    </div>
  );
}
