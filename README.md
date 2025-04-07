# Cash Register - Frontend

This is the **React frontend** for the **Cash Register** application built as part of the Amenitiz technical evaluation.

## Technologies

- [React.js]+ [TypeScript]
- [Vite]
- [Tailwind CSS]
- [Axios]
- [React Router]

## Structure

src/  
├── assets/  
├── components/  
│   ├── cart-actions/  
│   │   └── index.tsx  
│   ├── display-total/  
│   │   └── index.tsx  
│   ├── product-code-input/  
│   │   ├── AddButton.tsx  
│   │   ├── index.tsx  
│   │   ├── InputField.tsx  
│   │   └── types.ts  
│   ├── products-list/  
│   │   ├── index.tsx  
│   │   └── types.ts  
│   ├── promotions-list/  
│   │   ├── index.tsx  
│   │   └── types.ts  
│   └── sidebar/  
│       ├── index.tsx  
│       ├── SidebartItem.tsx  
│       └── types.ts  
├── hooks/  
│   └── useCartManager.ts  
├── pages/  
│   └── CashRegisterPage/  
│       └── index.tsx  
├── routes/  
│   └── index.tsx  
├── utils/  
│   └── axios.ts  
├── App.tsx  
├── index.css  
├── main.tsx  

## Axios
The base URL set is "http://localhost:3000", It is possible to change this in /src/utils/axios.ts

## Funtionalities

- Add products to the cart by code (GR1, SR1, CF1)
- Visualise products 
- Automatic promotion application:
  - **GR1 (Green Tea)**: 2x1
  - **SR1 (Strawberries)**: 4.50€ if 3 or more
  - **CF1 (Coffee)**: 2/3 if 3 or more
- Display Total
- Show promotions applied and money saved
- Clean Cart

##  Setup

```
bash
git clone https://github.com/GFigs/cash-register-frontend
cd cashier-app-frontend
npm install
npm run dev
```

## Workflor
- User inputs a code
- Search product with GET /products?search=GR1
- if valid, add to cart
- User can add multiple products
- When a product is added we call POST /checkout sending this codes
- Total and applied promotions are displayed

## Endpoints 
- GET /products?search=CODE — Search by product
- POST /checkout — Compute total and receive applied promotions