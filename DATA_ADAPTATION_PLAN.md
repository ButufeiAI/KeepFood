# Plan de Adaptare Date Template → API KeepFood

## 📋 Status Adaptare Pagini

### ✅ Completate:
1. **Categories** (`pages-template/management/categories/categories.tsx`)
   - ✅ Folosește `categoriesService.getAll()`
   - ✅ Folosește `productsService.getAll()` pentru numărul de items
   - ✅ Transformă datele API în format template
   - ✅ Delete funcțional cu API
   - ✅ CategoryModal adaptat pentru create/update

### 🔄 În Progres:
2. **Orders** (`pages-template/main-module/orders/orders.tsx`)
   - ⏳ Trebuie adaptat să folosească `ordersService`
   - ⏳ Transformare date: Order → OrdersReportData format

### ⏳ Pending:
3. **Users** (`pages-template/administration/users/users.tsx`)
   - ⏳ Trebuie adaptat să folosească `employeesService` (pentru Users)
   - ⏳ Transformare date: Employee → UsersData format

4. **Payments** (`pages-template/operations/payments/payments.tsx`)
   - ⏳ Trebuie adaptat să folosească `paymentsService`
   - ⏳ Transformare date: Payment → PaymentsData format

5. **Invoices** (`pages-template/operations/invoices/invoices.tsx`)
   - ⏳ Trebuie adaptat să folosească API invoices (dacă există)
   - ⏳ Transformare date: Invoice → InvoicesData format

6. **Addons** (`pages-template/management/addons/addons.tsx`)
   - ⏳ Trebuie creat serviciu pentru Addons (nouă entitate)
   - ⏳ Transformare date: Addon → AddonsData format

7. **Coupons** (`pages-template/management/coupons/coupons.tsx`)
   - ⏳ Trebuie adaptat să folosească `marketingService` (PromoCodes)
   - ⏳ Transformare date: PromoCode → CouponsData format

8. **Reports** (toate paginile din `pages-template/administration/reports/`)
   - ⏳ Trebuie adaptat să folosească `statisticsService`
   - ⏳ Transformare date pentru fiecare tip de raport

## 🔧 Servicii Necesare

### ✅ Există:
- `categoriesService` - pentru Categories
- `productsService` - pentru Items/Products
- `ordersService` - pentru Orders
- `paymentsService` - pentru Payments
- `employeesService` - pentru Users
- `statisticsService` - pentru Reports
- `marketingService` - pentru Coupons/Promo Codes

### ❌ Trebuie Create:
- `addonsService` - pentru Addons (entitate nouă)
- `invoicesService` - pentru Invoices (dacă nu există)

## 📝 Transformări Date Necesare

### Categories:
```typescript
Category API → {
  category: name,
  No_Items: count from products,
  Date: format(createdAt),
  Status: isActive ? "Active" : "Expired",
  image: image || default
}
```

### Orders:
```typescript
Order API → {
  orderId: formatted orderNumber,
  date: format(createdAt),
  customer: clientName || user?.firstName + lastName,
  token: tokenNumber,
  type: orderType (ON_SITE → "Dine In", etc.),
  menus: items.length,
  total: formatted totalAmount,
  status: isPaid ? "Paid" : status
}
```

### Users:
```typescript
Employee API → {
  Customer: firstName + lastName,
  image: avatar,
  Role: role,
  Phone_Number: phone,
  Status: isActive ? "Active" : "Inactive"
}
```

### Payments:
```typescript
Payment API → {
  Transaction_ID: formattedTransactionId,
  Customer: order?.user?.firstName + lastName,
  Order_ID: formatted orderNumber,
  Token_No: tokenNumber,
  Order_Type: orderType,
  Menus: items count,
  Amount: formatted amount
}
```

## 🎯 Prioritate

1. **HIGH**: Categories ✅, Orders, Users, Payments
2. **MEDIUM**: Invoices, Coupons, Reports
3. **LOW**: Addons (necesită serviciu nou)
