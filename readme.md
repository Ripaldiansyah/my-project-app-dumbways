## Penjelasan Aplikasi

Proyek ini merupakan aplikasi web yang dikembangkan menggunakan Express JS, Handlebars, dan Sequelize ORM untuk mengelola operasi CRUD (Create, Read, Update, Delete). Aplikasi ini dibuat sebagai salah satu tugas dari Bootcamp Dumbways dan menggunakan PostgreSQL sebagai database. Selain itu, aplikasi ini juga memanfaatkan SweetAlert untuk memberikan notifikasi yang interaktif dan user-friendly.

## Fitur

- Create New Project
- Update existing Project
- Delete Project
- Show all project and show detail project
- validasi jika tanggal start project kurang dari selesai project dengan bantuan sweet alert

Deskripsi Pada daftar project akan menampilkan **Baca Selengkapnya** jika panjang deksripsi melebihi 120 Karakter dan masih banyak lagi

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ripaldiansyah/my-project-app-dumbways.git

   ```
2. Navigate to the project folder:
   ```bash
   cd my-project-app-dumbways

   ```
3. Open with vscode:
   ```bash
   code .
   ```
4. install dependency :
   ```bash
   npm install
   ```
5. sesuaikan username dan password database
   ```bash
   src/config/config.json
   ```
6. Run migration
   ```bash
   npx sequelize db:migrate
   ```
7. Run seeder
   ```bash
   npx sequelize-cli db:seed:all
   ```
8. start with NPM
   ```bash
   npm run dev
   ```

## Screenshots

![Home](screenshots/home.png)
![Home](screenshots/homeMobile.png)
![Home](screenshots/homeMobile2.png)
![Home](screenshots/homeMobileNav.png)
_Home_

![Add My Project](screenshots/addProject.png)
![Add My Project](screenshots/addProjectValidation.png)
![Add My Project](screenshots/addProjectValidation2.png)
![Add My Project](screenshots/addProjectValidation3.png)
![Add My Project](screenshots/addProjectValidation4.png)
![Add My Project](screenshots/addProjectValidation5.png)
![Add My Project](screenshots/addProjectMobile.png)
![Add My Project](screenshots/addProjectMobileValidation.png)
![Add My Project](screenshots/addProjectMobileValidation2.png)
![Add My Project](screenshots/addProjectMobileValidation3.png)
![Add My Project](screenshots/addProjectMobileValidation4.png)
![Add My Project](screenshots/addProjectMobileValidation5.png)
_Fitur untuk menambahkan project_

![Daftar Project](screenshots/listProject.png)
![Daftar Project](screenshots/listMobile.png)
![Daftar Project](screenshots/listMobile2.png)
_Daftar Project yang telah di tambahkan ke database_

![Explore](screenshots/listProjectValidation.png)
![Explore](screenshots/listProjectValidation2.png)
![Explore](screenshots/listProjectMobileValidation.png)
![Explore](screenshots/listProjectMobileValidation2.png)
_delete project_

![Explore](screenshots/editProject.png)
![Explore](screenshots/editProjectMobile.png)
_Fitur edit project_

![Explore](screenshots/contact.png)
![Explore](screenshots/contactValidation.png)
![Explore](screenshots/contactValidation2.png)
![Explore](screenshots/contactValidation3.png)
![Explore](screenshots/contactMobileValidation.png)
![Explore](screenshots/contactMobileValidation2.png)
![Explore](screenshots/contactMobileValidation3.png)
_Halaman contact yang akan membuka aplikasi email jika disubmit_
