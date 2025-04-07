# Cashier App - Frontend

Frontend de la aplicación de caja registradora desarrollada para la evaluación técnica de Amenitiz. Esta aplicación permite al usuario agregar productos al carrito, aplicar promociones automáticamente y calcular el precio total de la compra.

## Tecnologías utilizadas

- [React.js]+ [TypeScript]
- [Vite]
- [Tailwind CSS]
- [Axios]
- [React Router]

## Estructura de carpetas

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

## Funcionalidades

- Agregar productos al carrito por código (GR1, SR1, CF1)
- Visualizar productos agregados
- Aplicación automática de promociones:
  - **GR1 (Green Tea)**: 2x1
  - **SR1 (Strawberries)**: 4.50€ c/u si compras 3 o más
  - **CF1 (Coffee)**: 2/3 del precio si compras 3 o más
- Mostrar total calculado
- Mostrar promociones aplicadas y ahorro
- Limpiar carrito con botón "Finalizar compra"

## 📦 Instalación

```
bash
git clone https://github.com/GFigs/cash-register-frontend
cd cashier-app-frontend
npm install
npm run dev
```

## Flujo de trabajo
- El usuario ingresa el código del producto (ej: GR1)
- Se busca el producto con GET /products?search=GR1
- Si es válido, se agrega al carrito
- El usuario puede agregar más productos
- Al agregar un producto se llama a POST /checkout enviando los códigos
- Se muestra el total y las promociones aplicadas con el dinero ahorrado

## Endpoints utilizados
- GET /products?search=CODE — Buscar producto por código
- POST /checkout — Calcular total y promociones aplicadas