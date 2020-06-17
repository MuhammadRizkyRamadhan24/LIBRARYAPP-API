-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 17 Jun 2020 pada 15.07
-- Versi server: 10.1.35-MariaDB
-- Versi PHP: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `libraryapp`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `authors`
--

CREATE TABLE `authors` (
  `id_author` int(11) NOT NULL,
  `author` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `authors`
--

INSERT INTO `authors` (`id_author`, `author`) VALUES
(1, 'Nara Lahmusi'),
(2, 'Sir Arthur Conan Doyle'),
(3, 'Hermawan Kartajaya'),
(4, 'Anastasia Aemilia '),
(5, 'Henry Manampiring'),
(6, 'Okky Madasari');

-- --------------------------------------------------------

--
-- Struktur dari tabel `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `bookImage` varchar(255) NOT NULL,
  `id_author` int(11) NOT NULL,
  `id_genre` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  `added_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatet_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `books`
--

INSERT INTO `books` (`id`, `title`, `description`, `bookImage`, `id_author`, `id_genre`, `status`, `added_at`, `updatet_at`) VALUES
(1, 'MetroPop: Inisial K', 'Bagi Raka, inisial K adalah segala yang dia cari untuk membalaskan dendam. Menghancurkan target hingga ke akar-akarnya. Bagi Arimbi, menjadi bagian keluarga Kertaraja yang terpandang adalah priviledge sekaligus kutukan. Seluruh harta dan kekayaan yang dia', 'image-1592396928619.jpg', 1, 1, 'Ada', '2020-06-17 12:28:48', '2020-06-17 12:28:48'),
(2, 'Petualangan Sherlock Holmes', 'Melalui para klien yang datang minta pertolongan kepada konsultan detektif pertama di dunia ini, pembaca diajak mengunjungi kamar sewaan di Baker Street No. 221B yang termasyhur itu, di tempat Holmes yang eksentrik dan dr. Watson yang istimewa pernah ting', 'image-1592397002871.jpg', 2, 1, 'Ada', '2020-06-17 12:30:02', '2020-06-17 12:30:02'),
(3, 'Momentum: 18 Kunci Utama Penggerak Bisnis', 'Saat ini kita menghadapi situasi yang semakin serba-tidak pasti. VUCA (volatility, uncertainty, complexity, dan ambiguity) selalu ada di setiap aktivitas sehari-hari yang kita jalankan. Guna mengatasinya, kita harus memiliki pola pikir dan tindakan DAMO (', 'image-1592397076049.jpg', 3, 2, 'Ada', '2020-06-17 12:31:16', '2020-06-17 12:31:16'),
(4, 'Katarsis', 'ka·tar·sis: n (Psi) cara pengobatan orang yg berpenyakit saraf dng membiarkannya menuangkan segala isi hatinya dng bebas; (Sas) kelegaan emosional setelah mengalami ketegangan dan pertikaian batin akibat suatu lakuan dramatis.\n\nSeluruh keluarganya tewas d', 'image-1592397152028.jpg', 4, 1, 'Ada', '2020-06-17 12:32:32', '2020-06-17 12:32:32'),
(5, 'Mata di Tanah Melus', 'Pesawat kecil kami mendarat di negeri antah-berantah. Saat pesawat itu mulai merendah, aku bisa melihat hamparan hijau yang tak terlalu lebat, juga tak benar-benar hijau. Hijau yang kering dan lesu, namun justru terlihat ramah dan tak menakutkan untukku.\n', 'image-1592397209348.jpg', 6, 1, 'Ada', '2020-06-17 12:33:29', '2020-06-17 12:33:29'),
(6, 'Filosofi Teras', 'Lebih dari 2.000 tahun lalu, sebuah mazhab filsafat menemukan akar masalah dan juga solusi dari banyak emosi negatif. Stoisisme, atau Filosofi Teras, adalah filsafat Yunani-Romawi kuno yang bisa membantu kita mengatasi emosi negatif dan menghasilkan menta', 'image-1592397255706.jpg', 5, 3, 'Ada', '2020-06-17 12:34:15', '2020-06-17 12:34:15'),
(7, 'Cinta (Tidak Harus) Mati', 'Apa persamaan antara bendera Malaysia, anjing yang melahirkan\n\nApa persamaan antara bendera Malaysia, anjing yang melahirkan kucing, Long Distance Relationship, dan petugas menara Air Traffic Control?\n\nTidak ada yang luput dari penulis buku ini.\n\nCinta (t', 'image-1592397698232.jpg', 5, 3, 'ada', '2020-06-17 12:41:38', '2020-06-17 12:46:03');

-- --------------------------------------------------------

--
-- Struktur dari tabel `borrows`
--

CREATE TABLE `borrows` (
  `id_borrow` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `borrows`
--

INSERT INTO `borrows` (`id_borrow`, `username`, `title`, `status`) VALUES
(1, 'zzzzidannnn', 'Cinta (Tidak Harus) Mati', 'ada');

-- --------------------------------------------------------

--
-- Struktur dari tabel `genres`
--

CREATE TABLE `genres` (
  `id_genre` int(11) NOT NULL,
  `genre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `genres`
--

INSERT INTO `genres` (`id_genre`, `genre`) VALUES
(1, 'fiction'),
(2, 'bisnis'),
(3, 'motivasi');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatet_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`, `created_at`, `updatet_at`) VALUES
(1, 'zidan13', '$2b$10$NaPXmxPHtYWWWd3Ah6JPt.qH4n3IZX1flmpKvsGkanBHv1NNLooYq', 0, '2020-06-13 06:58:44', '2020-06-13 06:58:44'),
(2, 'zzzzidannnn', '$2b$10$5EsX8zSh3JDr1gQ5EEQ1WeQCuUCg.NM0sOmBONT6H/CZPMWT84gdy', 1, '2020-06-13 07:04:24', '2020-06-13 07:04:24'),
(3, 'Muhammad Rizky Ramadhan', '$2b$10$OZJDognQgfpJXc8BPIPVZ.P7fh9c2MAi7KPBiFftv20ReSYdKXexa', 1, '2020-06-14 06:52:59', '2020-06-14 06:52:59');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id_author`);

--
-- Indeks untuk tabel `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `borrows`
--
ALTER TABLE `borrows`
  ADD PRIMARY KEY (`id_borrow`);

--
-- Indeks untuk tabel `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id_genre`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `authors`
--
ALTER TABLE `authors`
  MODIFY `id_author` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `borrows`
--
ALTER TABLE `borrows`
  MODIFY `id_borrow` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `genres`
--
ALTER TABLE `genres`
  MODIFY `id_genre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
