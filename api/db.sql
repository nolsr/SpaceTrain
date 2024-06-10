-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 10. Jun 2024 um 17:55
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
  `gesamtpreis` float NOT NULL,
  `kundennr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `buchungsitzplatz`
--

CREATE TABLE `buchungsitzplatz` (
  `buchungsitzplatznr` int(11) NOT NULL,
  `buchungsnr` int(11) NOT NULL,
  `sitzplatznr` int(11) NOT NULL,
  `tournr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `kunde`
--

CREATE TABLE `kunde` (
  `kundennr` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `vorname` varchar(255) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(1, 1),
(2, 1.5),
(3, 2);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `rakete`
--

CREATE TABLE `rakete` (
  `raketennr` int(11) NOT NULL,
  `bezeichnung` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `rakete`
--

INSERT INTO `rakete` (`raketennr`, `bezeichnung`) VALUES
(1, 'Stellar Voyager'),
(2, 'Nebula Crusader');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `sitzplatz`
--

CREATE TABLE `sitzplatz` (
  `sitzplatznr` int(11) NOT NULL,
  `raketennr` int(11) NOT NULL,
  `preis` float UNSIGNED NOT NULL,
  `bezeichnung` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `sitzplatz`
--

INSERT INTO `sitzplatz` (`sitzplatznr`, `raketennr`, `preis`, `bezeichnung`) VALUES
(1, 1, 74999, 'FL'),
(2, 1, 74999, 'FM'),
(3, 1, 74999, 'FR'),
(4, 1, 59999, 'HL'),
(5, 1, 59999, 'HM'),
(6, 1, 59999, 'HR'),
(7, 2, 124999, 'FL'),
(8, 2, 124999, 'FR'),
(9, 2, 89999, 'HL'),
(10, 2, 89999, 'HR');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `tour`
--

CREATE TABLE `tour` (
  `tournr` int(11) NOT NULL,
  `datum` date NOT NULL,
  `ort` varchar(255) NOT NULL,
  `preisklassennr` int(11) NOT NULL,
  `personalnr` int(11) NOT NULL,
  `raketennr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `tour`
--

INSERT INTO `tour` (`tournr`, `datum`, `ort`, `preisklassennr`, `personalnr`, `raketennr`) VALUES
(1, '2024-07-11', 'Aurora Spaceport', 1, 3, 1),
(2, '2024-07-30', 'Nebula Launch Facility', 2, 8, 2),
(3, '2024-07-23', 'Starlight Base', 3, 6, 2);

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
-- Indizes für die Tabelle `buchungsitzplatz`
--
ALTER TABLE `buchungsitzplatz`
  ADD PRIMARY KEY (`buchungsitzplatznr`),
  ADD KEY `bt_buchungsnr` (`buchungsnr`) USING BTREE,
  ADD KEY `bs_sitzplatznr` (`sitzplatznr`),
  ADD KEY `bs_tournr` (`tournr`);

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
-- Indizes für die Tabelle `tour`
--
ALTER TABLE `tour`
  ADD PRIMARY KEY (`tournr`),
  ADD KEY `t_personalnr` (`personalnr`) USING BTREE,
  ADD KEY `t_raketennr` (`raketennr`) USING BTREE,
  ADD KEY `t_preisklassennr` (`preisklassennr`) USING BTREE;

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `buchung`
--
ALTER TABLE `buchung`
  MODIFY `buchungsnr` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `buchungsitzplatz`
--
ALTER TABLE `buchungsitzplatz`
  MODIFY `buchungsitzplatznr` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `kunde`
--
ALTER TABLE `kunde`
  MODIFY `kundennr` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `raketennr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT für Tabelle `sitzplatz`
--
ALTER TABLE `sitzplatz`
  MODIFY `sitzplatznr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT für Tabelle `tour`
--
ALTER TABLE `tour`
  MODIFY `tournr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `buchung`
--
ALTER TABLE `buchung`
  ADD CONSTRAINT `b_kundennr` FOREIGN KEY (`kundennr`) REFERENCES `kunde` (`kundennr`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `buchungsitzplatz`
--
ALTER TABLE `buchungsitzplatz`
  ADD CONSTRAINT `bs_buchungsnr` FOREIGN KEY (`buchungsnr`) REFERENCES `buchung` (`buchungsnr`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bs_sitzplatznr` FOREIGN KEY (`sitzplatznr`) REFERENCES `sitzplatz` (`sitzplatznr`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bs_tournr` FOREIGN KEY (`tournr`) REFERENCES `tour` (`tournr`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `sitzplatz`
--
ALTER TABLE `sitzplatz`
  ADD CONSTRAINT `sp_raketennr` FOREIGN KEY (`raketennr`) REFERENCES `rakete` (`raketennr`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `tour`
--
ALTER TABLE `tour`
  ADD CONSTRAINT `personalnr` FOREIGN KEY (`personalnr`) REFERENCES `personal` (`personalnr`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `preisklassennr` FOREIGN KEY (`preisklassennr`) REFERENCES `preisklasse` (`preisklassennr`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `raketennr` FOREIGN KEY (`raketennr`) REFERENCES `rakete` (`raketennr`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
