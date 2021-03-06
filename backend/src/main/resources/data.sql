Insert into address_data (city, postal_code, street, street_number) values ('Zagreb', 10000, 'Ulica sreće', 3);
Insert into address_data (city, postal_code, street, street_number) values ('Zagreb', 10000, 'Strojarska', 8);
Insert into address_data (city, postal_code, street, street_number) values ('Zagreb', 10000, 'Vukovarska', 82);
Insert into address_data (city, postal_code, street, street_number) values ('Zagreb', 10000, 'Ulica Nikole Tesle', 15);
Insert into address_data (city, postal_code, street, street_number) values ('Zagreb', 10000, 'Ulica sira', 34);
Insert into address_data (city, postal_code, street, street_number) values ('Bjelovar', 43000, 'Ulica tuge', 89);
Insert into address_data (city, postal_code, street, street_number) values ('Bjelovar', 43000, 'Duga ulica', 125);
Insert into address_data (city, postal_code, street, street_number) values ('Zagreb', 10000, 'Abramovićeva', 12);
Insert into address_data (city, postal_code, street, street_number) values ('Zagreb', 10000, 'Alagovićeva', 43);
Insert into address_data (city, postal_code, street, street_number) values ('Zagreb', 10000, 'Babulek', 55);
Insert into address_data (city, postal_code, street, street_number) values ('Zagreb', 10000, 'Maceljska', 17);
Insert into address_data (city, postal_code, street, street_number) values ('Zagreb', 10000, 'Maglići', 9);
Insert into address_data (city, postal_code, street, street_number) values ('Zagreb', 10000, 'Olovska', 21);
Insert into address_data (city, postal_code, street, street_number) values ('Bjelovar', 43000, 'Đurđevačka', 25);
Insert into address_data (city, postal_code, street, street_number) values ('Bjelovar', 43000, 'Osječka', 63);
Insert into address_data (city, postal_code, street, street_number) values ('Zagreb', 10000, 'Osorska', 101);
Insert into address_data (city, postal_code, street, street_number) values ('Zagreb', 10000, 'Padine', 1);
Insert into address_data (city, postal_code, street, street_number) values ('Zagreb', 10000, 'Avenija Gojka Šuška', 6);
Insert into address_data (city, postal_code, street, street_number) values ('Zagreb', 10000, 'Ulica mira', 135);
Insert into address_data (city, postal_code, street, street_number) values ('Zagreb', 10000, 'Ulica slobode', 43);
Insert into address_data (city, postal_code, street, street_number) values ('Zagreb', 10000, 'Ulica znanosti', 67);
Insert into address_data (city, postal_code, street, street_number) values ('Osijek', 31000, 'Vukovarska', 7);
Insert into address_data (city, postal_code, street, street_number) values ('Rijeka', 51000, 'Primorska', 23);
Insert into address_data (city, postal_code, street, street_number) values ('Split', 21000, 'Slavonska', 99);
Insert into address_data (city, postal_code, street, street_number) values ('Sisak', 44000, 'Jesenska', 87);
Insert into address_data (city, postal_code, street, street_number) values ('Bjelovar', 43000, 'Šubićeva', 56);
Insert into address_data (city, postal_code, street, street_number) values ('Popovača', 44317, 'Držićeva', 4);
Insert into address_data (city, postal_code, street, street_number) values ('Lipik', 34551, 'Vinogradska', 13);
Insert into address_data (city, postal_code, street, street_number) values ('Zagreb', 10000, 'Ilica', 138);

Insert into hospital (name, address_data_id, phone_number, mail) values ('Klinička bolnica "Dubrava" Zagreb', 18, '01 2902 444', 'klinika.dubrava@gmail.com');
Insert into hospital (name, address_data_id, phone_number, mail) values ('Klinička bolnica "Merkur" Zagreb', 19, '01 3454 123', 'klinika.merkur@gmail.com');
Insert into hospital (name, address_data_id, phone_number, mail) values ('Klinička bolnica "Sveti Duh" Zagreb', 20, '01 3344 678', 'klinika.duh@gmail.com');
Insert into hospital (name, address_data_id, phone_number, mail) values ('Klinički bolnički centar "Sestre Milosrdnice"', 21, '01 8883 987', 'klinika.milosrdnice@gmail.com');
Insert into hospital (name, address_data_id, phone_number, mail) values ('Klinički bolnički centar Osijek', 22, '02 1653 332', 'klinika.osijek@gmail.com');
Insert into hospital (name, address_data_id, phone_number, mail) values ('Klinički bolnički centar Rijeka', 23, '03 8976 543', 'klinika.rijeka@gmail.com');
Insert into hospital (name, address_data_id, phone_number, mail) values ('Klinički bolnički centar Split', 24, '04 7531 789', 'klinika.split@gmail.com');
Insert into hospital (name, address_data_id, phone_number, mail) values ('Opća bolnica "Dr. Ivo Pedišić" Sisak', 25, '05 9865 556', 'bolnica.sisak@gmail.com');
Insert into hospital (name, address_data_id, phone_number, mail) values ('Opća bolnica Bjelovar', 26, '06 4563 321', 'bolnica.bjelovar@gmail.com');
Insert into hospital (name, address_data_id, phone_number, mail) values ('Psihijatrijska bolnica "Dr. Ivan Barbot" Popovača', 27, '07 7865 667', 'psihijatrija.popovaca@gmail.com');
Insert into hospital (name, address_data_id, phone_number, mail) values ('Specijalna bolnica za medicinsku rehabilitaciju Lipik', 28, '08 8898 555', 'bolnica.lipik@gmail.com');

Insert into administrator (first_name, last_name, mail, password, phone_number) values ('Toni', 'Martinčić', 'toni.martincic@fer.hr', 'password', '091 342 5643');
Insert into administrator (first_name, last_name, mail, password, phone_number) values ('Mirko', 'Randić', 'mirko.randic@fer.hr', 'password', '098 897 2543');
Insert into administrator (first_name, last_name, mail, password, phone_number) values ('Pero', 'Perić', 'pero.peric@gmail.com', 'password', '098 112 3266');
Insert into administrator (first_name, last_name, mail, password, phone_number) values ('Ivan', 'Ivić', 'ivan.ivic@gmail.com', 'password', '098 895 5546');
Insert into administrator (first_name, last_name, mail, password, phone_number) values ('Ana', 'Anić', 'ana.anic@gmail.com', 'password', '091 050 5102');
Insert into administrator (first_name, last_name, mail, password, phone_number) values ('Ivan', 'Dujmić', 'ivan.dujmic@gmail.com', 'password', '098 336 8730');
Insert into administrator (first_name, last_name, mail, password, phone_number) values ('Martin', 'Džida', 'martin.dzida@gmail.com', 'password', '091 667 3456');
Insert into administrator (first_name, last_name, mail, password, phone_number) values ('Marko', 'Ćurlin', 'marko.curlin@gmail.com', 'password', '098 777 1223');
Insert into administrator (first_name, last_name, mail, password, phone_number) values ('Mihovil', 'Ćaćić', 'mihovil.cacic@gmail.com', 'password', '098 223 4378');
Insert into administrator (first_name, last_name, mail, password, phone_number) values ('Antonio', 'Anđelić', 'antonio.andelic@gmail.com', 'password', '098 174 8943');
Insert into administrator (first_name, last_name, mail, password, phone_number) values ('Bruno', 'Pašalić', 'bruno.pasalic@gmail.com', 'password', '091 565 3345');
Insert into administrator (first_name, last_name, mail, password, phone_number) values ('Ivana', 'Mršić', 'ivana.mrsic@fer.hr', 'password', '095 565 1122');

Insert into patient (first_name, last_name, mail, password, address_data_id, phone_number, oib, date_of_birth, sex) values ('Marko', 'Marković', 'marko.markovic@gmail.com', 'password', 1, '091 331 9087', '10525231193', parsedatetime('09.11.1984', 'dd.MM.yyyy'), 'M');
Insert into patient (first_name, last_name, mail, password, address_data_id, phone_number, oib, date_of_birth, sex) values ('Mirko', 'Marković', 'mirko.markovic@gmail.com', 'password', 1, '091 096 4519', '74180178817', parsedatetime('19.03.1981', 'dd.MM.yyyy'), 'M');
Insert into patient (first_name, last_name, mail, password, address_data_id, phone_number, oib, date_of_birth, sex) values ('Petar', 'Zecimir', 'petar.zecimir@gmail.com', 'password', 2, '091 385 9573', '53569680271', parsedatetime('11.06.1972', 'dd.MM.yyyy'), 'M');
Insert into patient (first_name, last_name, mail, password, address_data_id, phone_number, oib, date_of_birth, sex) values ('Miroslav', 'Puška', 'miroslav.puska@gmail.com', 'password', 3, '098 443 5600', '02851978197', parsedatetime('01.08.2000', 'dd.MM.yyyy'), 'M');
Insert into patient (first_name, last_name, mail, password, address_data_id, phone_number, oib, date_of_birth, sex) values ('Vladimir', 'Primorac', 'vladimir.primorac@gmail.com', 'password', 4, '095 879 9090', '89362962652', parsedatetime('25.03.1996', 'dd.MM.yyyy'), 'M');
Insert into patient (first_name, last_name, mail, password, address_data_id, phone_number, oib, date_of_birth, sex) values ('Petra', 'Horvat', 'petra.horvat@gmail.com', 'password', 5, '095 321 5567', '94304389503', parsedatetime('30.07.1990', 'dd.MM.yyyy'), 'Ž');
Insert into patient (first_name, last_name, mail, password, address_data_id, phone_number, oib, date_of_birth, sex) values ('Iva', 'Kozar', 'iva.kozar@gmail.com', 'password', 6, '095 443 7096', '82056631214', parsedatetime('13.04.1989', 'dd.MM.yyyy'), 'Ž');
Insert into patient (first_name, last_name, mail, password, address_data_id, phone_number, oib, date_of_birth, sex) values ('Leon', 'Lučić', 'leon.lucic@gmail.com', 'password', 7, '095 160 0143', '00669951982', parsedatetime('15.09.1964', 'dd.MM.yyyy'), 'M');
Insert into patient (first_name, last_name, mail, password, address_data_id, phone_number, oib, date_of_birth, sex) values ('Mislav', 'Marić', 'mislav.maric@gmail.com', 'password', 29, '095 888 1233', '88132932264', parsedatetime('19.02.1977', 'dd.MM.yyyy'), 'M');

Insert into medical_specialist (first_name, last_name, mail, password, phone_number, hospital_id, department_type) values ('Valentina', 'Kunić', 'valentina.kunic@gmail.com', 'password', '095 160 0143', 1, 'ANESTHESIOLOGY_REANIMATOLOGY_AND_INTENSIVE_CARE');
Insert into medical_specialist (first_name, last_name, mail, password, phone_number, hospital_id, department_type) values ('Petra', 'Petrić', 'petra.petric@gmail.com', 'password', '095 162 3542', 2, 'OTORHINOLARYNGOLOGY');
Insert into medical_specialist (first_name, last_name, mail, password, phone_number, hospital_id, department_type) values ('Mia', 'Franjić', 'mia.franjic@gmail.com', 'password', '095 330 0193', 3, 'ANESTHESIOLOGY_REANIMATOLOGY_AND_INTENSIVE_CARE');
Insert into medical_specialist (first_name, last_name, mail, password, phone_number, hospital_id, department_type) values ('Iris', 'Martinčić', 'iris.martincic@gmail.com', 'password', '095 999 5676', 4, 'CHIRURGY');
Insert into medical_specialist (first_name, last_name, mail, password, phone_number, hospital_id, department_type) values ('Dino', 'Šemsudin', 'dino.semsudin@gmail.com', 'password', '091 202 1333', 5, 'ANESTHESIOLOGY_REANIMATOLOGY_AND_INTENSIVE_CARE');
Insert into medical_specialist (first_name, last_name, mail, password, phone_number, hospital_id, department_type) values ('Damir', 'Fazlinović', 'damir.fazlinovic@gmail.com', 'password', '098 675 8898', 6, 'OTORHINOLARYNGOLOGY');
Insert into medical_specialist (first_name, last_name, mail, password, phone_number, hospital_id, department_type) values ('Siniša', 'Varga', 'sinisa.varga@gmail.com', 'password', '095 087 7789', 1, 'ANESTHESIOLOGY_REANIMATOLOGY_AND_INTENSIVE_CARE');
Insert into medical_specialist (first_name, last_name, mail, password, phone_number, hospital_id, department_type) values ('Dinko', 'Poklepović', 'dinko.poklepovic@gmail.com', 'password', '098 586 0988', 6, 'NEUROLOGY');
Insert into medical_specialist (first_name, last_name, mail, password, phone_number, hospital_id, department_type) values ('Josip', 'Paladino', 'josip.paladino@gmail.com', 'password', '091 434 7845', 7, 'CHIRURGY');
Insert into medical_specialist (first_name, last_name, mail, password, phone_number, hospital_id, department_type) values ('Ivan', 'Petrović', 'ivan.petrovic@gmail.com', 'password', '095 332 2232', 2, 'NEUROLOGY');

Insert into general_practitioner (first_name, last_name, mail, password, address_data_id, phone_number) values ('Luka', 'Novak', 'luka.novak@gmail.com', 'password', 8, '091 331 9087');
Insert into general_practitioner (first_name, last_name, mail, password, address_data_id, phone_number) values ('Mirko', 'Marić', 'mirko.maric@gmail.com', 'password', 9, '091 096 4519');
Insert into general_practitioner (first_name, last_name, mail, password, address_data_id, phone_number) values ('Rudi', 'Kovačević', 'rudi.kovacevic@gmail.com', 'password', 10, '091 385 9573');
Insert into general_practitioner (first_name, last_name, mail, password, address_data_id, phone_number) values ('Karlo', 'Babić', 'karlo.babic@gmail.com', 'password', 11, '098 443 5600');
Insert into general_practitioner (first_name, last_name, mail, password, address_data_id, phone_number) values ('Jerko', 'Kovačić', 'jerko.kovacic@gmail.com', 'password', 12, '095 879 9090');
Insert into general_practitioner (first_name, last_name, mail, password, address_data_id, phone_number) values ('Maja', 'Jurić', 'maja.juric@gmail.com', 'password', 13, '095 321 5567');
Insert into general_practitioner (first_name, last_name, mail, password, address_data_id, phone_number) values ('Nikolina', 'Matić', 'nikolina.matic@gmail.com', 'password', 14, '095 443 7096');
Insert into general_practitioner (first_name, last_name, mail, password, address_data_id, phone_number) values ('Josipa', 'Petrović', 'josipa.petrovic@gmail.com', 'password', 15, '095 160 0143');
Insert into general_practitioner (first_name, last_name, mail, password, address_data_id, phone_number) values ('Ivan', 'Primorac', 'ivan.primorac@gmail.com', 'password', 16, '091 164 0143');
Insert into general_practitioner (first_name, last_name, mail, password, address_data_id, phone_number) values ('Vesna', 'Kozar', 'vesna.kozar@gmail.com', 'password', 17, '091 443 1211');

Insert into referral (referral_type, department_type, patient_id, general_practitioner_id, created_on, remark, diagnosis) values ('ADVISORY_HEALTH_CARE_A1', 'ANESTHESIOLOGY_REANIMATOLOGY_AND_INTENSIVE_CARE', 1, 1, CURRENT_DATE(), 'Molim hitno', 'Naevus naevocellularis pigmentosus');
Insert into referral (referral_type, department_type, patient_id, general_practitioner_id, created_on, remark, diagnosis) values ('ADVISORY_HEALTH_CARE_A2', 'CARDIOLOGY', 2, 1, CURRENT_DATE(), 'Molim hitno', 'Naevus naevocellularis pigmentosus');
Insert into referral (referral_type, department_type, patient_id, general_practitioner_id, created_on, remark, diagnosis) values ('ADVISORY_HEALTH_CARE_A3', 'OTORHINOLARYNGOLOGY', 3, 1, CURRENT_DATE(), 'Molim hitno', 'Naevus naevocellularis pigmentosus');
Insert into referral (referral_type, department_type, patient_id, general_practitioner_id, created_on, remark, diagnosis) values ('HOSPITALIZATION_B', 'CARDIOVASCULAR_DISEASES', 4, 2, CURRENT_DATE(), 'Molim hitno', 'Naevus naevocellularis pigmentosus');
Insert into referral (referral_type, department_type, patient_id, general_practitioner_id, created_on, remark, diagnosis) values ('SPECIALIST_HEALTH_CARE_C1', 'CHIRURGY', 5, 3, CURRENT_DATE(), 'Molim hitno', 'Naevus naevocellularis pigmentosus');
Insert into referral (referral_type, department_type, patient_id, general_practitioner_id, created_on, remark, diagnosis) values ('SPECIALIST_HEALTH_CARE_C2', 'NEUROCHIRURGY', 6, 3, CURRENT_DATE(), 'Molim hitno', 'Naevus naevocellularis pigmentosus');
Insert into referral (referral_type, department_type, patient_id, general_practitioner_id, created_on, remark, diagnosis) values ('SPECIALIST_HEALTH_CARE_C3', 'NEUROLOGY', 7, 4, CURRENT_DATE(), 'Molim hitno', 'Naevus naevocellularis pigmentosus');
Insert into referral (referral_type, department_type, patient_id, general_practitioner_id, created_on, remark, diagnosis) values ('OUTPATIENT_TREATMENT_D1', 'EYE_DISEASES', 8, 4, CURRENT_DATE(), 'Molim hitno', 'Naevus naevocellularis pigmentosus');
Insert into referral (referral_type, department_type, patient_id, general_practitioner_id, created_on, remark, diagnosis) values ('OUTPATIENT_TREATMENT_D2', 'ONCOLOGY', 9, 4, CURRENT_DATE(), 'Molim hitno', 'Naevus naevocellularis pigmentosus');

Insert into examination (status, patient_id, medical_specialist_id, hospital_id, referral_id, term, remark) values ('TERM_DEFINED', 1, 1, 1, 1, parsedatetime('01.08.18', 'dd.MM.yy'), null);
Insert into examination (status, patient_id, medical_specialist_id, hospital_id, referral_id, term, remark) values ('TERM_DEFINED', 2, 2, 2, 2, parsedatetime('11.09.18', 'dd.MM.yy'), null);
Insert into examination (status, patient_id, medical_specialist_id, hospital_id, referral_id, term, remark) values ('TERM_NOT_DEFINED', 3, 3, 3, 3, null, null);
Insert into examination (status, patient_id, medical_specialist_id, hospital_id, referral_id, term, remark) values ('TERM_NOT_DEFINED', 4, 4, 4, 4, null, null);
Insert into examination (status, patient_id, medical_specialist_id, hospital_id, referral_id, term, remark) values ('EXAMINATION_DONE', 5, 5, 5, 5, parsedatetime('23.02.18', 'dd.MM.yy'), null);
Insert into examination (status, patient_id, medical_specialist_id, hospital_id, referral_id, term, remark) values ('EXAMINATION_DONE', 6, 6, 6, 6, parsedatetime('15.03.18', 'dd.MM.yy'), null);
Insert into examination (status, patient_id, medical_specialist_id, hospital_id, referral_id, term, remark) values ('EXAMINATION_CANCELED', 7, 7, 7, 7, parsedatetime('02.04.18', 'dd.MM.yy'), null);
Insert into examination (status, patient_id, medical_specialist_id, hospital_id, referral_id, term, remark) values ('EXAMINATION_CANCELED', 8, 8, 8, 8, parsedatetime('28.11.18', 'dd.MM.yy'), null);
