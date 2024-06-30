-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 30. Jun 2024 um 19:33
-- Server-Version: 10.4.14-MariaDB
-- PHP-Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `spacetrain`
--
CREATE DATABASE IF NOT EXISTS `spacetrain` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `spacetrain`;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `buchung`
--

CREATE TABLE `buchung` (
  `buchungsnr` int(11) NOT NULL,
  `gesamtpreis` float(10,2) UNSIGNED NOT NULL,
  `kundennr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `buchung`
--

INSERT INTO `buchung` (`buchungsnr`, `gesamtpreis`, `kundennr`) VALUES
(4, 448493.09, 11),
(5, 448493.09, 11),
(6, 701493.12, 11),
(7, 459997.69, 11),
(8, 172497.70, 13);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `kunde`
--

CREATE TABLE `kunde` (
  `kundennr` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `vorname` varchar(255) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `kunde`
--

INSERT INTO `kunde` (`kundennr`, `name`, `vorname`, `adresse`, `email`, `password`) VALUES
(11, 'Rodenburg', 'Nils', 'Bornstraße 68', 'rodenburgnils@googlemail.com', '$2b$10$lshc.Zy8dWFbAOrmZrC/qealkK01zlibVIo8LTA5TRd4e2kQfU8wG'),
(12, 'Rodenburg', 'Nils', 'Bornstraße 68', 'rodenb2urgnils@googlemail.com', '$2b$10$/RtAhNwM496hiPNETpY6tOFUy6zhn8cTr519tmfDopjQxi2tQZqRy'),
(13, 'Mutermann', 'Max', 'Adresse 5', 'uidfhskdjlsfg@gmail.com', '$2b$10$2LH5YVUesieEeMfDsQ3cauigIGoQFqJYoN7bdq5MEPgh13oUXPFXG');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `personal`
--

CREATE TABLE `personal` (
  `personalnr` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `personal`
--

INSERT INTO `personal` (`personalnr`, `name`) VALUES
(1, 'Lea Sommerfeld'),
(2, 'Finn Maurer'),
(3, 'Lena Bergmann'),
(4, 'Maximilian Fischer'),
(5, 'Sophie Bauer'),
(6, 'Johann Weber'),
(7, 'Nina Hoffmann'),
(8, 'Tom Schuster');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `preisklasse`
--

CREATE TABLE `preisklasse` (
  `preisklassennr` int(11) NOT NULL,
  `multiplikator` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `preisklasse`
--

INSERT INTO `preisklasse` (`preisklassennr`, `multiplikator`) VALUES
(1, 1.1),
(2, 1.6),
(3, 2.3);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `rakete`
--

CREATE TABLE `rakete` (
  `raketennr` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `hoehe` float UNSIGNED NOT NULL,
  `durchmesser` float UNSIGNED NOT NULL,
  `schiffvolumen` float UNSIGNED NOT NULL,
  `traegervolumen` int(10) UNSIGNED NOT NULL,
  `startnutzlastmasse` int(10) UNSIGNED NOT NULL,
  `rueckkehrnutzlastmasse` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `rakete`
--

INSERT INTO `rakete` (`raketennr`, `name`, `hoehe`, `durchmesser`, `schiffvolumen`, `traegervolumen`, `startnutzlastmasse`, `rueckkehrnutzlastmasse`) VALUES
(1, 'Stellar Voyager', 27, 5.3, 6.5, 23, 3850, 1900),
(2, 'Nebula Crusader', 31, 6.4, 8.9, 35, 5000, 2300),
(3, 'Galactic Pioneer', 37, 8.1, 9.3, 37, 6000, 3000);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `sitzplatz`
--

CREATE TABLE `sitzplatz` (
  `sitzplatznr` int(11) NOT NULL,
  `raketennr` int(11) NOT NULL,
  `preis` float UNSIGNED NOT NULL,
  `bezeichnung` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `sitzplatz`
--

INSERT INTO `sitzplatz` (`sitzplatznr`, `raketennr`, `preis`, `bezeichnung`) VALUES
(1, 1, 74999, 'VL'),
(2, 1, 74999, 'VM'),
(3, 1, 74999, 'VR'),
(4, 1, 59999, 'HL'),
(5, 1, 59999, 'HM'),
(6, 1, 59999, 'HR'),
(7, 2, 124999, 'VL'),
(8, 2, 124999, 'VR'),
(9, 2, 89999, 'HL'),
(10, 2, 89999, 'HR'),
(11, 3, 199999, 'VL'),
(12, 3, 199999, 'VR'),
(13, 3, 149999, 'HL'),
(14, 3, 149999, 'HM'),
(15, 3, 149999, 'HR');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `ticket`
--

CREATE TABLE `ticket` (
  `ticketnr` int(11) NOT NULL,
  `buchungsnr` int(11) NOT NULL,
  `sitzplatznr` int(11) NOT NULL,
  `tourterminnr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `ticket`
--

INSERT INTO `ticket` (`ticketnr`, `buchungsnr`, `sitzplatznr`, `tourterminnr`) VALUES
(1, 4, 3, 3),
(2, 4, 5, 3),
(3, 4, 6, 3),
(4, 5, 3, 3),
(5, 5, 5, 3),
(6, 5, 6, 3),
(7, 6, 8, 6),
(8, 6, 9, 6),
(9, 6, 10, 6),
(10, 7, 11, 7),
(11, 8, 1, 3);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `tour`
--

CREATE TABLE `tour` (
  `tournr` int(11) NOT NULL,
  `tourname` varchar(255) DEFAULT NULL,
  `beschreibung` varchar(512) DEFAULT NULL,
  `ort` varchar(255) NOT NULL,
  `preisklassennr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `tour`
--

INSERT INTO `tour` (`tournr`, `tourname`, `beschreibung`, `ort`, `preisklassennr`) VALUES
(1, 'EARTH ORBIT TOUR', 'Erleben Sie die Schwerelosigkeit und die atemberaubende Aussicht auf unseren Heimatplaneten mit unserer Earth Orbit Tour. Schweben Sie durch die Weiten des Weltraums und bewundern Sie die majestätische Schönheit der Erde aus der Ferne. Beobachten Sie Kontinente und Ozeane aus der Vogelperspektive und lassen Sie sich von der Zerbrechlichkeit unseres Planeten beeindrucken. Diese Tour bietet Ihnen die Möglichkeit, den Blick der Astronauten zu teilen und die Welt mit neuen Augen zu sehen.', 'Aurora Spaceport', 1),
(2, 'LUNAR SURFACE EXPLORATION', 'Betreten Sie die legendäre Mondoberfläche und folgen Sie den Spuren der Astronauten mit unserer Lunar Surface Exploration Tour. Schreiten Sie über den staubigen Boden des Mondes und erleben Sie die unvergleichliche Stille des Weltraums. Erforschen Sie Krater, entdecken Sie alte Mondlandefahrzeuge und sammeln Sie einzigartige Gesteinsproben. Diese Tour bietet Ihnen die Möglichkeit, sich wie ein echter Weltraumforscher zu fühlen und die Geheimnisse unseres natürlichen Satelliten zu entdecken.', 'Nebula Launch Facility', 2),
(3, 'OUTER SPACE DISCOVERY', 'Tauchen Sie ein in die unendlichen Weiten des Weltraums mit unserer Outer Space Discovery Tour. Erleben Sie die Schwerelosigkeit und bewundern Sie atemberaubende Ausblicke auf ferne Galaxien und strahlende Sterne. Diese Tour bietet Ihnen die Möglichkeit, faszinierende wissenschaftliche Experimente durchzuführen und an historischen Weltraummissionen teilzunehmen. Unsere erfahrenen Guides stehen Ihnen jederzeit zur Seite, um diese unvergessliche Reise zu einem unvergesslichen Erlebnis zu machen.', 'Starlight Base', 3);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `tourtermin`
--

CREATE TABLE `tourtermin` (
  `tourterminnr` int(11) NOT NULL,
  `tournr` int(11) NOT NULL,
  `datum` date NOT NULL,
  `personalnr` int(11) NOT NULL,
  `raketennr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `tourtermin`
--

INSERT INTO `tourtermin` (`tourterminnr`, `tournr`, `datum`, `personalnr`, `raketennr`) VALUES
(1, 3, '2024-06-11', 3, 3),
(2, 3, '2024-06-15', 4, 2),
(3, 3, '2024-07-03', 6, 1),
(6, 3, '2024-07-11', 4, 2),
(7, 3, '2024-07-23', 4, 3),
(8, 2, '2024-07-08', 5, 3),
(9, 2, '2024-07-12', 8, 3),
(10, 2, '2024-07-25', 7, 2),
(11, 1, '2024-07-09', 1, 1),
(12, 1, '2024-07-02', 6, 2),
(13, 1, '2024-07-13', 5, 1),
(14, 1, '2024-07-22', 2, 3);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `buchung`
--
ALTER TABLE `buchung`
  ADD PRIMARY KEY (`buchungsnr`),
  ADD KEY `b_kundennr` (`kundennr`);

--
-- Indizes für die Tabelle `kunde`
--
ALTER TABLE `kunde`
  ADD PRIMARY KEY (`kundennr`);

--
-- Indizes für die Tabelle `personal`
--
ALTER TABLE `personal`
  ADD PRIMARY KEY (`personalnr`);

--
-- Indizes für die Tabelle `preisklasse`
--
ALTER TABLE `preisklasse`
  ADD PRIMARY KEY (`preisklassennr`);

--
-- Indizes für die Tabelle `rakete`
--
ALTER TABLE `rakete`
  ADD PRIMARY KEY (`raketennr`);

--
-- Indizes für die Tabelle `sitzplatz`
--
ALTER TABLE `sitzplatz`
  ADD PRIMARY KEY (`sitzplatznr`),
  ADD KEY `sp_raketennr` (`raketennr`);

--
-- Indizes für die Tabelle `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`ticketnr`),
  ADD KEY `bt_buchungsnr` (`buchungsnr`) USING BTREE,
  ADD KEY `bs_sitzplatznr` (`sitzplatznr`),
  ADD KEY `bs_tourterminnr` (`tourterminnr`);

--
-- Indizes für die Tabelle `tour`
--
ALTER TABLE `tour`
  ADD PRIMARY KEY (`tournr`),
  ADD KEY `t_preisklassennr` (`preisklassennr`) USING BTREE;

--
-- Indizes für die Tabelle `tourtermin`
--
ALTER TABLE `tourtermin`
  ADD PRIMARY KEY (`tourterminnr`),
  ADD KEY `tt_tournr` (`tournr`) USING BTREE,
  ADD KEY `tt_personalnr` (`personalnr`) USING BTREE,
  ADD KEY `tt_raketennr` (`raketennr`) USING BTREE;

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `buchung`
--
ALTER TABLE `buchung`
  MODIFY `buchungsnr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT für Tabelle `kunde`
--
ALTER TABLE `kunde`
  MODIFY `kundennr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT für Tabelle `personal`
--
ALTER TABLE `personal`
  MODIFY `personalnr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT für Tabelle `preisklasse`
--
ALTER TABLE `preisklasse`
  MODIFY `preisklassennr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT für Tabelle `rakete`
--
ALTER TABLE `rakete`
  MODIFY `raketennr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT für Tabelle `sitzplatz`
--
ALTER TABLE `sitzplatz`
  MODIFY `sitzplatznr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT für Tabelle `ticket`
--
ALTER TABLE `ticket`
  MODIFY `ticketnr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT für Tabelle `tour`
--
ALTER TABLE `tour`
  MODIFY `tournr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT für Tabelle `tourtermin`
--
ALTER TABLE `tourtermin`
  MODIFY `tourterminnr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `buchung`
--
ALTER TABLE `buchung`
  ADD CONSTRAINT `b_kundennr` FOREIGN KEY (`kundennr`) REFERENCES `kunde` (`kundennr`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `sitzplatz`
--
ALTER TABLE `sitzplatz`
  ADD CONSTRAINT `sp_raketennr` FOREIGN KEY (`raketennr`) REFERENCES `rakete` (`raketennr`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `bs_buchungsnr` FOREIGN KEY (`buchungsnr`) REFERENCES `buchung` (`buchungsnr`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bs_sitzplatznr` FOREIGN KEY (`sitzplatznr`) REFERENCES `sitzplatz` (`sitzplatznr`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bs_tourterminnr` FOREIGN KEY (`tourterminnr`) REFERENCES `tourtermin` (`tourterminnr`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `tour`
--
ALTER TABLE `tour`
  ADD CONSTRAINT `preisklassennr` FOREIGN KEY (`preisklassennr`) REFERENCES `preisklasse` (`preisklassennr`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `tourtermin`
--
ALTER TABLE `tourtermin`
  ADD CONSTRAINT `personalnr` FOREIGN KEY (`personalnr`) REFERENCES `personal` (`personalnr`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `raketennr` FOREIGN KEY (`raketennr`) REFERENCES `rakete` (`raketennr`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tournr` FOREIGN KEY (`tournr`) REFERENCES `tour` (`tournr`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
