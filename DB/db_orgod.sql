-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 26, 2022 at 02:38 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_orgod`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `admin_id` int(11) NOT NULL,
  `admin_name` varchar(100) NOT NULL,
  `admin_email` varchar(100) NOT NULL,
  `admin_password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`admin_id`, `admin_name`, `admin_email`, `admin_password`) VALUES
(1, 'Admin', 'admin@gmail.com', 'admin@123');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_blood`
--

CREATE TABLE `tbl_blood` (
  `blood_id` int(11) NOT NULL,
  `blood_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_blood`
--

INSERT INTO `tbl_blood` (`blood_id`, `blood_name`) VALUES
(1, 'A+'),
(2, 'A-'),
(3, 'B+'),
(4, 'B-'),
(5, 'O+'),
(6, 'O-'),
(8, 'AB+'),
(9, 'AB-');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_complaint`
--

CREATE TABLE `tbl_complaint` (
  `complaint_id` int(11) NOT NULL,
  `complaint_content` varchar(100) NOT NULL,
  `complaint_title` varchar(100) NOT NULL,
  `complaint_date` varchar(100) NOT NULL,
  `complaint_reply` varchar(100) NOT NULL,
  `complaint_status` varchar(100) NOT NULL,
  `user_id` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_district`
--

CREATE TABLE `tbl_district` (
  `district_id` int(11) NOT NULL,
  `district_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_district`
--

INSERT INTO `tbl_district` (`district_id`, `district_name`) VALUES
(1, 'Idukki'),
(2, 'Ernakulam'),
(3, 'Kollam'),
(4, 'Palakad'),
(5, 'Kottayam');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_donor`
--

CREATE TABLE `tbl_donor` (
  `donor_id` int(11) NOT NULL,
  `donor_name` varchar(100) NOT NULL,
  `donor_details` varchar(100) NOT NULL,
  `donor_healthreport` varchar(100) NOT NULL,
  `donor_proof` varchar(100) NOT NULL,
  `blood_id` int(11) NOT NULL,
  `organ_id` int(11) NOT NULL,
  `donor_date` varchar(100) NOT NULL,
  `donor_status` varchar(100) NOT NULL DEFAULT '0',
  `donor_image` varchar(100) NOT NULL,
  `donor_contact` int(11) NOT NULL,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `hospital_id` int(11) NOT NULL DEFAULT 0,
  `donor_vstatus` varchar(100) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_donor`
--

INSERT INTO `tbl_donor` (`donor_id`, `donor_name`, `donor_details`, `donor_healthreport`, `donor_proof`, `blood_id`, `organ_id`, `donor_date`, `donor_status`, `donor_image`, `donor_contact`, `user_id`, `hospital_id`, `donor_vstatus`) VALUES
(5, 'Suraj K S', 'Am a DevOp', 'Black Modern Business Logo.png', 'Black Modern Business Logo.png', 5, 4, '2022-07-26', '0', 'Black Modern Business Logo.png', 987654321, 2, 0, '0');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_feedback`
--

CREATE TABLE `tbl_feedback` (
  `feedback_id` int(11) NOT NULL,
  `feedback_content` varchar(100) NOT NULL,
  `feedback_date` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_hospital`
--

CREATE TABLE `tbl_hospital` (
  `hospital_id` int(11) NOT NULL,
  `hospital_name` varchar(100) NOT NULL,
  `hospital_contact` int(20) NOT NULL,
  `hospital_address` varchar(100) NOT NULL,
  `place_id` int(11) NOT NULL,
  `hospital_photo` varchar(100) NOT NULL DEFAULT '0',
  `hospital_proof` varchar(100) NOT NULL DEFAULT '0',
  `hospital_email` varchar(100) NOT NULL,
  `hospital_password` varchar(100) NOT NULL,
  `hospital_vstatus` varchar(100) NOT NULL DEFAULT '0',
  `hospital_doj` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_hospital`
--

INSERT INTO `tbl_hospital` (`hospital_id`, `hospital_name`, `hospital_contact`, `hospital_address`, `place_id`, `hospital_photo`, `hospital_proof`, `hospital_email`, `hospital_password`, `hospital_vstatus`, `hospital_doj`) VALUES
(2, 'Matha Hospital', 987654321, 'abc', 1, 'pic.jpg', 'aimie-2.png', 'matha1@gmail.com', 'abc', '1', '2022-07-25'),
(3, 'Smitha hospital', 98765466, 'abcd', 4, 'Aimie.png', 'pic.jpg', 'smitha@gmail.com', 'abcd', '1', '2022-07-25'),
(4, 'kjhvufytfgv', 0, 'jhvjhvjhv', 0, 'Black Modern Business Logo.png', 'Black Modern Business Logo.png', 'jbhjkb@yghvbnm', 'jvjhvjhvjhv', '0', '2022-07-26');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_organ`
--

CREATE TABLE `tbl_organ` (
  `organ_id` int(11) NOT NULL,
  `organ_name` varchar(100) NOT NULL,
  `type_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_organ`
--

INSERT INTO `tbl_organ` (`organ_id`, `organ_name`, `type_id`) VALUES
(1, 'Brain', 1),
(2, 'Heart', 1),
(3, 'Eye', 2),
(4, 'Hair', 2),
(5, 'liver', 2),
(6, 'lungs', 2),
(7, 'kidney', 2),
(8, 'intestine', 2),
(9, 'pancreas', 2),
(10, 'Eye', 1),
(11, 'Hair', 1),
(12, 'liver', 1),
(13, 'lungs', 1),
(14, 'kidney', 1),
(15, 'intestine', 1),
(16, 'pancreas', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_place`
--

CREATE TABLE `tbl_place` (
  `place_id` int(11) NOT NULL,
  `place_name` varchar(100) NOT NULL,
  `district_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_place`
--

INSERT INTO `tbl_place` (`place_id`, `place_name`, `district_id`) VALUES
(1, 'Thodupuzha', 1),
(2, 'karimannoor', 1),
(4, 'Muvattupuzha', 2),
(5, 'Vazhakulam', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_receiver`
--

CREATE TABLE `tbl_receiver` (
  `receiver_id` int(11) NOT NULL,
  `receiver_name` varchar(100) NOT NULL,
  `receiver_details` varchar(100) NOT NULL,
  `receiver_healthreport` varchar(100) NOT NULL,
  `receiver_proof` varchar(100) NOT NULL,
  `blood_id` int(11) NOT NULL,
  `organ_id` int(11) NOT NULL,
  `receiver_date` varchar(100) NOT NULL,
  `receiver_status` varchar(100) NOT NULL,
  `receiver_vstatus` varchar(100) NOT NULL,
  `receiver_image` varchar(100) NOT NULL,
  `receiver_contact` varchar(150) NOT NULL,
  `user_id` int(11) NOT NULL,
  `hospital_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_receiver`
--

INSERT INTO `tbl_receiver` (`receiver_id`, `receiver_name`, `receiver_details`, `receiver_healthreport`, `receiver_proof`, `blood_id`, `organ_id`, `receiver_date`, `receiver_status`, `receiver_vstatus`, `receiver_image`, `receiver_contact`, `user_id`, `hospital_id`) VALUES
(1, ',mkjbhvgu', 'jhvbhjkbhjkb', 'Black Modern Business Logo.png', 'Black Modern Business Logo.png', 5, 4, '2022-07-26', '', '', 'Black Modern Business Logo.png', '987654', 2, 0),
(2, 'huvfytufg', 'uguyhvuyv', 'Black Modern Business Logo.png', 'Black Modern Business Logo.png', 5, 4, '2022-07-26', '', '', 'Black Modern Business Logo.png', '876543', 0, 3);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_type`
--

CREATE TABLE `tbl_type` (
  `type_id` int(11) NOT NULL,
  `type_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_type`
--

INSERT INTO `tbl_type` (`type_id`, `type_name`) VALUES
(1, 'After'),
(2, 'Before');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_contact` varchar(110) NOT NULL,
  `user_address` varchar(100) NOT NULL,
  `place_id` int(11) NOT NULL,
  `user_photo` varchar(100) NOT NULL DEFAULT '0',
  `user_proof` varchar(100) NOT NULL DEFAULT '0',
  `user_email` varchar(100) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  `user_doj` varchar(100) NOT NULL,
  `user_vstatus` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_name`, `user_contact`, `user_address`, `place_id`, `user_photo`, `user_proof`, `user_email`, `user_password`, `user_doj`, `user_vstatus`) VALUES
(1, 'Jill', '2147483647', 'abcde', 4, 'aimie-2.png', 'Deployment-1-1-1024x602.png', 'jill@gmail.com', 'abcde', '2022-07-25', 1),
(2, 'Kiran', '2147483647', 'abcdef', 2, 'pic.jpg', 'aimie-2.png', 'kiran@gmail.com', 'abcdef', '2022-07-25', 1),
(4, 'kjbhvugjhvb', '7689', 'rtfdhcvjhkm', 1, 'Black Modern Business Logo.png', 'Black Modern Business Logo.png', 'fygfvgh2ufvghjcv@ytghvjn', 'khjvygcv', '2022-07-26', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `tbl_blood`
--
ALTER TABLE `tbl_blood`
  ADD PRIMARY KEY (`blood_id`);

--
-- Indexes for table `tbl_complaint`
--
ALTER TABLE `tbl_complaint`
  ADD PRIMARY KEY (`complaint_id`);

--
-- Indexes for table `tbl_district`
--
ALTER TABLE `tbl_district`
  ADD PRIMARY KEY (`district_id`);

--
-- Indexes for table `tbl_donor`
--
ALTER TABLE `tbl_donor`
  ADD PRIMARY KEY (`donor_id`);

--
-- Indexes for table `tbl_feedback`
--
ALTER TABLE `tbl_feedback`
  ADD PRIMARY KEY (`feedback_id`);

--
-- Indexes for table `tbl_hospital`
--
ALTER TABLE `tbl_hospital`
  ADD PRIMARY KEY (`hospital_id`);

--
-- Indexes for table `tbl_organ`
--
ALTER TABLE `tbl_organ`
  ADD PRIMARY KEY (`organ_id`);

--
-- Indexes for table `tbl_place`
--
ALTER TABLE `tbl_place`
  ADD PRIMARY KEY (`place_id`);

--
-- Indexes for table `tbl_receiver`
--
ALTER TABLE `tbl_receiver`
  ADD PRIMARY KEY (`receiver_id`);

--
-- Indexes for table `tbl_type`
--
ALTER TABLE `tbl_type`
  ADD PRIMARY KEY (`type_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_blood`
--
ALTER TABLE `tbl_blood`
  MODIFY `blood_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tbl_complaint`
--
ALTER TABLE `tbl_complaint`
  MODIFY `complaint_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_district`
--
ALTER TABLE `tbl_district`
  MODIFY `district_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_donor`
--
ALTER TABLE `tbl_donor`
  MODIFY `donor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_feedback`
--
ALTER TABLE `tbl_feedback`
  MODIFY `feedback_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_hospital`
--
ALTER TABLE `tbl_hospital`
  MODIFY `hospital_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_organ`
--
ALTER TABLE `tbl_organ`
  MODIFY `organ_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tbl_place`
--
ALTER TABLE `tbl_place`
  MODIFY `place_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_receiver`
--
ALTER TABLE `tbl_receiver`
  MODIFY `receiver_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_type`
--
ALTER TABLE `tbl_type`
  MODIFY `type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
