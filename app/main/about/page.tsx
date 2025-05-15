import RomanticNavbar from '@/components/main/RomanticNavbar';
import HeartFooter from '@/components/main/HeartFooter';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-rose-50">
      <RomanticNavbar />

      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-rose-800 mb-8 text-center">Kisah Cinta Kami</h1>

          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <div className="w-full md:w-1/2">
                <div className="bg-rose-100 h-64 rounded-lg flex items-center justify-center">
                  {/* Gambar diambil dari folder public */}
                  <img
                    src="/images/kami.jpg"
                    alt="Our Love Story"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold text-rose-700 mb-4">Bagaimana Semua Dimulai</h2>
                <p className="text-rose-900 mb-4">
                  Itu adalah sore yang hujan di Paris ketika kami pertama kali bertemu di sebuah patiseri kecil.
                  Cinta kami yang sama terhadap kue membawa kami bersama, dan tak lama kemudian kami mulai membuat
                  kue-kue indah yang menceritakan kisah cinta.
                </p>
                <p className="text-rose-900">
                  Pada tahun 2020, kami memutuskan untuk mengubah passion kami menjadi bisnis, dan Sweet Love Bakery pun lahir.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-rose-700 mb-4">Filosofi Kami</h2>
              <p className="text-rose-900">
                Kami percaya setiap kue haruslah unik seperti cinta yang dirayakannya.
                Itulah sebabnya kami menuangkan hati kami ke dalam setiap kreasi, menggunakan hanya bahan-bahan terbaik
                dan teknik-teknik yang diturunkan dari generasi ke generasi.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-rose-700 mb-4">Kenali Tim Kami</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-rose-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-rose-800 mb-2">Dicky</h3>
                  <p className="text-rose-700">Koki Kue & Co-Founder</p>
                  <p className="text-rose-600 mt-2">"Saya fokus pada pembuatan kue-kue dengan sentuhan klasik yang selalu membuat orang jatuh cinta pada rasa dan penampilannya."</p>
                </div>
                <div className="bg-rose-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-rose-800 mb-2">Aldo</h3>
                  <p className="text-rose-700">Koki Pastry & Koordinator Kreatif</p>
                  <p className="text-rose-600 mt-2">"Saya menggabungkan teknik pastry tradisional dengan kreativitas modern untuk menghasilkan rasa yang luar biasa."</p>
                </div>
                <div className="bg-rose-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-rose-800 mb-2">Yosia</h3>
                  <p className="text-rose-700">Manajer Operasional & Co-Founder</p>
                  <p className="text-rose-600 mt-2">"Saya memastikan semua proses operasional berjalan dengan lancar dan membantu dalam pengembangan produk baru yang menarik."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <HeartFooter />
    </div>
  );
}
