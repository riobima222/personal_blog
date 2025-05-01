"use client";
import TemplateBlog from "@/components/layout/templateBlog";
import SyntaxHighlighter, {
  Prism as SyntaxHighlighter2,
} from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { codeSnippet, codeSnippet2 } from "./codeSnippet";
import CopyCode from "@/components/copyCode";

const PhpMvcBootstraping = () => {
  return (
    <TemplateBlog>
      <div>
        <h2 className="text-2xl font-bold mt-16 mb-6">
          Memahami Konsep Bootstrapping dalam PHP MVC
        </h2>

        <h2 className="text-2xl font-bold mt-10 mb-6">
          1. Apa Itu Bootstrapping?
        </h2>

        <p className="mb-1">
          Bootstrapping adalah proses awal yang dijalankan saat aplikasi pertama
          kali diakses oleh pengguna. Umumnya, proses ini dilakukan melalui file
          index.php yang berada di dalam folder public.
        </p>

        <p>
          Secara sederhana, bootstrapping berperan sebagai jembatan utama antara
          permintaan pengguna (melalui browser) dan keseluruhan struktur MVC di
          balik layar. Tanpa proses ini, aplikasi tidak akan tahu dari mana
          harus memulai eksekusi kode.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">
          2. Apa Itu Bootstrapping?
        </h2>

        <p>Bootstrapping memiliki beberapa tujuan utama, antara lain:</p>

        <ul className="mt-2">
          <li>Mengatur konfigurasi awal aplikasi</li>
          <li>
            Menyiapkan autoload untuk class-class penting (Autoload adalah =
            Sistem otomatis memuat file class saat dibutuhkan (tanpa require
            manual), biasanya diatur via spl_autoload_register() atau Composer
            (PSR-4).)
          </li>
          <li>Menangani sistem routing</li>
          <li>Memanggil controller dan method sesuai permintaan URL</li>
          <li>Menjalankan aplikasi secara keseluruhan</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-6">
          3. Fungsi-Fungsi yang Umumnya Ada dalam Bootstrapping
        </h2>

        <p>
          Beberapa hal yang biasanya dilakukan dalam proses bootstrapping
          adalah:
        </p>

        <ul className="mt-2">
          <li>
            Inisialisasi konfigurasi, seperti error_reporting, timezone, dan
            session_start()
          </li>
          <li>
            Autoload file atau class, menggunakan require_once atau
            spl_autoload_register
          </li>
          <li>
            Menangani routing dari URL ke controller dan method yang sesuai
          </li>
          <li>Memanggil controller dan method, termasuk parameter jika ada</li>
          <li>Menyiapkan koneksi ke database, jika diperlukan</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-6">
          4. Contoh Struktur Folder MVC Sederhana
        </h2>

        <div className="relative">
          <SyntaxHighlighter
            language="jsx"
            style={vscDarkPlus}
            customStyle={{
              borderRadius: "0.5rem",
              padding: "1rem",
            }}
          >
            {codeSnippet}
          </SyntaxHighlighter>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">
          5. Contoh Bootstrapping Sederhana (index.php)
        </h2>

        <p>
          Berikut contoh isi file index.php yang bertugas sebagai file
          bootstrapping:
        </p>

        <div className="relative">
          <SyntaxHighlighter2
            language="jsx"
            style={vscDarkPlus}
            customStyle={{
              borderRadius: "0.5rem",
              padding: "1rem",
            }}
          >
            {codeSnippet2}
          </SyntaxHighlighter2>
          <CopyCode text={codeSnippet2} />
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">
          6. Kenapa Bootstrapping Itu Penting?
        </h2>

        <p>
          Tanpa bootstrapping, aplikasi tidak akan tahu harus memulai dari mana.
          Ia berperan sebagai pintu masuk utama dari keseluruhan sistem.
          Bootstrapping memastikan bahwa seluruh konfigurasi, class, dan fungsi
          penting sudah siap digunakan sebelum aplikasi dijalankan lebih jauh.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6">KESIMPULAN :</h2>

        <p>
          Bootstrapping adalah bagian krusial dalam arsitektur PHP MVC. Dengan
          memahami dan menyiapkan proses bootstrapping dengan baik, kamu akan
          memiliki fondasi aplikasi yang kuat, terstruktur, dan mudah
          dikembangkan ke depannya.
        </p>
      </div>
    </TemplateBlog>
  );
};

export default PhpMvcBootstraping;
