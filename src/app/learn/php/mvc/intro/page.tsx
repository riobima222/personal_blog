import TemplateBlog from "@/components/layout/templateBlog";

const PhpMvcIntro = () => {
  return (
    <TemplateBlog>
      <div>
        <h2 className="text-2xl font-bold mt-16 mb-6">
          Mengenal Konsep MVC di PHP: Cara Rapi Menyusun Kode
        </h2>

        <p>
          Membangun aplikasi web jadi lebih efisien (tepat dan sesuai) kalau
          kodenya tertata rapi dan mudah dikelola. Pola MVC bisa jadi solusi
          untuk menerapkan hal itu.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">Apa Itu MVC?</h2>

        <p>
          MVC adalah singkatan dari Model - View - Controller, yaitu sebuah pola
          arsitektur (Cara kita merancang dan menyusun struktur kode program
          agar kuat, rapi, dan mudah dikembangkan) yang memisahkan kode menjadi
          tiga bagian utama:
        </p>

        <ul className="mt-2">
          <li>
            Model: bagian yang menangani logika data dan interaksi dengan
            database.
          </li>
          <li>
            View: bagian tampilan yang dilihat oleh pengguna (HTML, CSS, dll).
          </li>
          <li>
            Controller: bagian yang mengatur alur kerja. Ia menerima permintaan
            dari pengguna, memproses logika menggunakan Model, lalu menampilkan
            hasil melalui View.
          </li>
        </ul>

        <p>
          Dengan kata lain, MVC membantu memisahkan antara logika program,
          tampilan, dan data, sehingga kode menjadi lebih bersih, teratur, dan
          mudah dikembangkan.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">Mengapa MVC Penting?</h2>

        <ul className="mt-2">
          <li>
            Rapi dan terstruktur: kode tidak bercampur antara logika, tampilan,
            dan data.
          </li>
          <li>
            Mudah dikembangkan: tim dapat bekerja secara terpisah di bagian
            View, Controller, atau Model.
          </li>
          <li>
            Lebih mudah maintenance: jika terjadi bug, kamu tahu di mana harus
            mencari.
          </li>
          <li>
            Fleksibel: mudah dikembangkan seiring bertambahnya fitur aplikasi.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-6">
          MVC Bisa Digunakan di Mana Saja?
        </h2>
        <p>
          Pola MVC tidak terbatas hanya di PHP saja. MVC bisa diterapkan di
          berbagai bahasa pemrograman yang mendukung konsep OOP (Object-Oriented
          Programming), seperti: PHP, JAVA, Pyton, C#, JavaScript (beberapa
          framework menerapkan konsep mirip MVC)
        </p>

        <p className="mt-2">
          Bahkan, banyak framework populer yang berbasis MVC, contohnya:
        </p>
        <ul className="mt-2">
          <li>
            <strong>Laravel</strong> (PHP)
          </li>
          <li>
            <strong>CodeIgniter</strong> (PHP)
          </li>
          <li>
            <strong>Django</strong> (Python)
          </li>
          <li>
            <strong>Spring</strong> (Java)
          </li>
          <li>
            <strong>ASP.NET MVC (C#)</strong>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-6">KESIMPULAN :</h2>

        <p>
          Jika kamu ingin membangun aplikasi web yang rapi, scalable, dan mudah
          dikelola, maka mempelajari pola MVC adalah langkah awal yang sangat
          bagus. MVC membantu kamu membagi aplikasi menjadi tiga bagian dengan
          tanggung jawab masing-masing, sehingga kamu tidak perlu mencampur aduk
          antara logika, tampilan, dan data. Di artikel berikutnya, kita akan
          bahas bagaimana implementasi MVC secara sederhana di PHP, lengkap
          dengan contoh folder dan file-nya.
        </p>
      </div>
    </TemplateBlog>
  );
};
export default PhpMvcIntro;
