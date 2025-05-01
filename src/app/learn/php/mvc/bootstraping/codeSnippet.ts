export const codeSnippet = `
/app
  /core
    App.php           -> Menangani routing & pemanggilan controller
    Controller.php    -> Class dasar untuk controller
    Database.php      -> Koneksi ke database

/public
  index.php          -> File bootstrapping utama
`;

export const codeSnippet2 = `
<?php
// Konfigurasi awal
error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();

// Autoload file core
require_once '../app/core/App.php';
require_once '../app/core/Controller.php';
require_once '../app/core/Database.php';

// Jalankan aplikasi
$app = new App();
`;
