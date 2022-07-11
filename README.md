#  :money_with_wings: Cart-it 

Greetings, presenting *Cart-it* an ecommerce platform for buying your favourite products! The app is built on MERN stack and implements the best styling 
methods of tailwindCSS.

## :ticket: Demo

A link for the demo is given below:

:link: https://cart-it.herokuapp.com

_User account_:
```bash
username: admin
password: 12345678
```
_Credit Card_:
```bash
number: 4242 4242 4242 4242
date: any future date
cvc : any 3 digit mumber
```

## 🔥 Features

### :lock: Authentication
- User registration & login
- Password recovery (OTP sent to email which can be used to recover a registered account)
- JWT auth methods with secure sessions using redux-persist

### :stars: API fetching
- Orders fetching (All orders show in orders page with shipment and transaction status)
- Product fetching (Products are fetched lazily and can also be fetched according to a category)
- User fetching (Existing users cannot register with same email or username again)

### :moneybag: Stripe Integration
- All orders have to be paid through stripe
- Transactions show up on stripe dashboard
- Addresses are saved on database so only CC(Credit Card) is saved with stripe

### :zap: Animations with framer-motion
- Element animations added for better ux
- All animations viewport triggered ( Only triggered if user enters the given div or heading etc)
- Pages don't change abruptly but smoothly exit an animation and enter another 

### :walking: Image Lazy loading
- Products images are lazily loaded
- Extra HTTP requests are prevnted

### :heavy_check_mark: Success, Error pages
- On success pages are added (i.e Order success)
- Redirection to error pages for routes that don't exist or on any error occurs

## :camera: Screenshots

### Landing page
![](https://github.com/hunter10471/MERN_ecommerce_app/blob/master/screenshots/ss1.png)

### Product page
![](https://github.com/hunter10471/MERN_ecommerce_app/blob/master/screenshots/ss2.png)

### Cart page
![](https://github.com/hunter10471/MERN_ecommerce_app/blob/master/screenshots/ss3.png)

## :key: Dependencies

```JSON
"dependencies":{
  "@emotion/react": "^11.9.0",
    "@emotion/styled": "^11.8.1",
    "@mui/icons-material": "^5.6.2",
    "@reduxjs/toolkit": "^1.8.1",
    "@tailwindcss/line-clamp": "^0.3.1",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.1.1",
    "@testing-library/user-event": "^13.5.0",
    "autoprefixer": "^10.4.4",
    "axios": "^0.26.1",
    "babel-preset-es2015": "^6.24.1",
    "eslint-config-react-app": "^7.0.1",
    "framer-motion": "^6.3.10",
    "postcss": "^8.4.12",
    "react": "^18.0.0",
    "react-countdown": "^2.3.2",
    "react-dom": "^18.0.0",
    "react-helmet-async": "^1.3.0",
    "react-multi-carousel": "^2.8.0",
    "react-redux": "^8.0.1",
    "react-router-dom": "^6.3.0",
    "react-scripts": "^5.0.1",
    "react-stripe-checkout": "^2.6.3",
    "redux-persist": "^6.0.0",
    "styled-components": "^5.3.5",
    "tailwindcss": "^3.0.24",
    "web-vitals": "^2.1.4"

  },

```

## :construction_worker: Dev dependencies

```JSON

  "devDependencies": {
     "eslint": "^8.18.0",
    "eslint-plugin-react": "^7.30.1"
  ```



## 🏗️ How to Set up `Cart-it` for Development

1. Clone the repository

```bash
git clone https://github.com/hunter10471/MERN_ecommerce_app.git
```

2. Change the working directory

```bash
cd MERN_ecommerce_app
```

3. Install dependencies

```bash
npm install # or, yarn install
```

4. Run the app

```bash
npm run dev # or, yarn dev
```

That's All!!! Now open [localhost:4000](http://localhost:4000/) to see the app.


## 🍔 Built With
_These are just some major resources used in the project, there are others too that can be found in the dependencies section_
- [React JS](https://nextjs.org/): The most popular framework around
- [TailwindCss](https://tailwindcss.com/) A utility-first CSS framework packed with classes
- [Heroku](http://vercel.com/): Easiest hosting for a MERN app
- [Framer-motion](https://www.framer.com/motion/) Amazing animations done easily
- [Redux/@reduxjs/toolkit](https://redux-toolkit.js.org/) For persisting data and easy access to store
- [Material-UI](https://mui.com/) All the icons were taken from this amazing library
- [Axios](https://axios-http.com/) For easy data fetching from  backend
- [Stripe](https://stripe.com/) Most efficient way to get payments from customers and provides an amazing dashboard for all payments history etc.
- [Eslint](https://eslint.org/) All the front end and backend code is linted using ESlint to prevent any errors and follow a singular code pattern
- [React-router](https://reactrouter.com/) Page transitions and redirections done right
- [React-multi-carousel](https://www.npmjs.com/package/react-multi-carousel) Great resouruce for production ready carousels



## 🛡️ License
This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.



