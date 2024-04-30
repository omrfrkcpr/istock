# IStock ©️

💻 https://istock-app.vercel.app/

## Description

iStock is a robust stock management application built using React, TailwindCSS, Material UI, Redux, and Redux Toolkit. It offers users a seamless experience in managing their inventory, allowing them to track purchase and sale activities, monitor profit and loss status, and perform various operations such as adding, editing, and updating products. The application supports multilingual functionality in English, German and Turkish and offers both dark and light mode themes for user customization.

## Outcome

## Project Planning & Management

**Epic User Story:** As a user of the iStock application, I want to efficiently manage my inventory by tracking purchase and sale activities, monitoring profit and loss status, and performing operations such as adding, editing, and updating products. The application should support multilingual functionality in English, German and Turkish and offer dark and light mode themes for user customization.

**User Stories:**

1️⃣ **User Registration:**

- 🥇 As a user, I want to register for an account securely to access the application.
- 🥈 Registration should require providing necessary information such as email, password, company, and brand details.
- 🥉 Users should also have the option to authenticate using Google.

  **_Task-1 =_** Create registration form UI using React components and Material UI for styling.<br>
  **_Task-2 =_** Implement form validation for user input fields (e.g., email format, password strength).<br>
  **_Task-3 =_** Integrate Firebase Authentication to handle user registration and Google authentication.<br>
  **_Task-4 =_** Handle registration success and failure cases with appropriate error messages.<br>
  **_Task-5 =_** Redirect users to the dashboard after successful registration.<br>
  **_Task-6 =_** Implement dark and light mode toggle functionality for user customization.

2️⃣ **User Login:**

- 🥇 As a registered user, I want to log in securely to access the application features.
- 🥈 Users should be able to log in using their email and password or authenticate with Google.

  **_Task-1 =_** Design a login form UI using React components and Material UI for styling.<br>
  **_Task-2 =_** Validate user input fields in the login form (e.g., email format).<br>
  **_Task-3 =_** Implement Firebase Authentication for email and password login.<br>
  **_Task-4 =_** Handle login success and failure cases with appropriate error messages.<br>
  **_Task-5 =_** Redirect users to the dashboard after successful login.<br>
  **_Task-6 =_** Implement "Forgot Password" functionality with a link to reset the password.

3️⃣ **Dashboard & Inventory Management:**

- 🥇 As a user, I want to view my inventory dashboard, track purchase and sale activities, and manage products.
- 🥈 Users should be able to add, edit, and update product details.

  **_Task-1 =_** Create a dashboard UI displaying purchase and sale activities using React components and Material UI.<br>
  **_Task-2 =_** Implement CRUD operations for managing products using Redux and Redux Toolkit.<br>
  **_Task-3 =_** Fetch and display product data from the backend API.<br>
  **_Task-4 =_** Enable users to edit and update product details seamlessly.<br>
  **_Task-5 =_** Implement multilingual support for the dashboard in Turkish and English.

4️⃣ **Multilingual Support:**

- 🥇 As a user, I want to use the application in English, Turkish and German languages.
- 🥈 Users should have the option to switch between languages seamlessly.

  **_Task-1 =_** Implement localization support for the application using React Intl or a similar library.<br>
  **_Task-2 =_** Create language switch functionality to allow users to toggle between Turkish and English.<br>
  **_Task-3 =_** Translate all UI elements and content into Turkish, German and English languages.<br>
  **_Task-4 =_** Ensure consistent language switching across all application screens and components.

5️⃣ **Dark/Light Mode Toggle:**

- 🥇 As a user, I want to customize the application's appearance by toggling between dark and light modes.
- 🥈 Users should have the flexibility to choose their preferred theme for better readability and usability.

  **_Task-1 =_** Implement dark and light mode themes using TailwindCSS or Material UI theming.<br>
  **_Task-2 =_** Create a toggle switch UI component for users to switch between dark and light modes.<br>
  **_Task-3 =_** Store user preference for theme mode in local storage to maintain consistency across sessions.<br>
  **_Task-4 =_** Ensure seamless transition and visual appeal in both dark and light mode themes.

7️⃣ **Responsive Design:**

- 🥇 As a user, I expect the application to be responsive and work seamlessly on various devices and screen sizes.
- 🥈 The UI should adapt to different screen sizes, ensuring a consistent and user-friendly experience.

  **_Task-1 =_** Use TailwindCSS for styling components and layouts.<br>
  **_Task-2 =_** Design UI components to be responsive and adapt to different screen sizes.<br>
  **_Task-3 =_** Implement responsive navigation for smaller screens (e.g., mobile devices).<br>
  **_Task-4 =_** Ensure that text, images, and other UI elements are legible and accessible on all devices.

## Project Skeleton 🩻

```
📖IStock (folder)
│
├── 📁public
│
├── 📁src
│    ┃
│    ┣ 📂api
│    ┃    ┗ apiCall.jsx
│    ┣ 📂app
|    ┃    ┗ store.jsx
│    ┣ 📂assets
│    ┃    ┗ [images]
|    ┃
│    ┣ 📂components
│    ┃       ┣ 📂Cards
|    ┃       ┃       ┣ BrandCard.jsx
|    ┃       ┃       ┗ FirmCard.jsx
│    ┃       ┣ 📂Commons
|    ┃       ┃       ┣ AuthHeader.jsx
|    ┃       ┃       ┣ AuthImage.jsx
|    ┃       ┃       ┣ DataTable.jsx
|    ┃       ┃       ┣ MyButton.jsx
|    ┃       ┃       ┣ PageHeader.jsx
|    ┃       ┃       ┣ SelectControl.jsx
|    ┃       ┃       ┣ StockModal.jsx
|    ┃       ┃       ┗ Switch.jsx
│    ┃       ┣ 📂Dashboard
|    ┃       ┃       ┣ Chart.jsx
|    ┃       ┃       ┣ Charts.jsx
|    ┃       ┃       ┗ KpiChards.jsx
│    ┃       ┣ 📂Forms
|    ┃       ┃       ┣ BrandForm.jsx
|    ┃       ┃       ┣ FirmForm.jsx
|    ┃       ┃       ┣ LoginForm.jsx
|    ┃       ┃       ┣ ProductForm.jsx
|    ┃       ┃       ┣ PurchaseForm.jsx
|    ┃       ┃       ┣ RegisterForm.jsx
|    ┃       ┃       ┗ SaleForm.jsx
│    ┃       ┣ 📂Navigation
|    ┃       ┃       ┗ MenuListItems.jsx
│    ┃       ┣ 📂Tables
|    ┃       ┃       ┣ ProductTable.jsx
|    ┃       ┃       ┣ PurchaseTable.jsx
|    ┃       ┃       ┗ SaleTable.jsx
│    ┃       ┗ 📂TextFields
|    ┃               ┣ FormControlSelect.jsx
|    ┃               ┣ FormTextField.jsx
|    ┃               ┗ MyTextField.jsx
|    ┃
│    ┣ 📂features
|    ┃     ┣ authSlice.jsx
|    ┃     ┗ stockSlice.jsx
|    ┃
│    ┣ 📂helper
|    ┃     ┗ toastNotify.js
|    ┃
│    ┣ 📂hooks
|    ┃     ┣ useAuthCall.jsx
|    ┃     ┣ useAxios.jsx
|    ┃     ┗ useStockCall.jsx
|    ┃
│    ┣ 📂i18n
|    ┃     ┗ i18n.js
|    ┃
│    ┣ 📂layouts
|    ┃     ┣ Brands.jsx
|    ┃     ┣ Firms.jsx
|    ┃     ┣ Home.jsx
|    ┃     ┣ Products.jsx
|    ┃     ┣ Purchases.jsx
|    ┃     ┗ Sales.jsx
|    ┃
│    ┣ 📂locales
|    ┃     ┣ de.json
|    ┃     ┣ en.json
|    ┃     ┣ tr.json
|    ┃     ┗ translations.js
|    ┃
│    ┣ 📂pages
│    ┃     ┣ About.jsx
│    ┃     ┣ Dashboard.jsx
│    ┃     ┣ Login.jsx
│    ┃     ┣ Main.jsx
│    ┃     ┗ Register.jsx
│    ┃
│    ┣ 📂router
|    ┃     ┣ AppRouter.jsx
│    ┃     ┗ PrivateRouter.jsx
│    ┃
│    ┣ 📂styles
│    ┃     ┗ globalStyle.js
|    ┃
│    ┣ App.jsx
│    ┣ index.css
│    ┗ main.jsx
|
├── .gitignore
├── frontend.env.local
├── index.html
├── istock-app.gif
├── LICENSE
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## Objective

With this project, a stock management application will be developed using mainly ReactJS, MUI, TailwindCSS and also Redux (+Redux Toolkit), and it is aimed to develop skills in subjects such as API usage, asynchronous data processing and dynamic content management and conditional rendering.

### Technologies Used 🎯

- React (React-Router)

- Redux & Redux Toolkit

- Material UI + TailwindCSS

- Axios

- Toastify (For User Messages)

- Vite

## Additional Data 📦

- [Assets](./src/assets/)
- [Postman](https://documenter.getpostman.com/view/14573422/2sA3Bt2pP4#806b74be-6983-4be1-8838-a47c0c6ff548)

## Contributing 🤝

Your insights and contributions greatly enrich my projects! Whether you're bursting with fresh project concepts or have ideas to enhance existing ones, your input is invaluable. Feel free to open an issue to initiate a dialogue about your thoughts, or submit a pull request with your proposed modifications. Every contribution plays a vital role in my growth and improvement, so thank you for being an integral part of my community!

## LICENSE 🪪

This repository is licensed under the MIT License. See the GNU GENERAL PUBLIC LICENSE file for details. For more information please visit [GNU License](https://www.gnu.org/licenses/gpl-3.0.html)

**<p align="center">&#9786; Happy Coding &#9997;</p>**
