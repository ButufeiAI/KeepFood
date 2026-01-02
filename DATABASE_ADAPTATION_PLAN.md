# Analiză Structură Baza de Date - Template vs KeepFood

## 📊 Structura datelor din Template (din JSON files)

### 1. **Orders** (OrdersReportData)
```typescript
{
  orderId: "#23588",        // ID formatat
  date: "01 Nov 2025",      // Data
  customer: "Walk-in Customer", // Nume client
  token: "16",              // Token/Număr de comandă
  type: "Dine In",          // Tip: "Dine In" | "Take Away" | "Delivery"
  menus: "3",               // Număr de items
  total: "$34.50",          // Total
  status: "Paid"            // Status: "Paid" | "Pending" | etc.
}
```

### 2. **Users** (UsersData)
```typescript
{
  Customer: "John Smith",    // Nume complet
  image: "user-01.jpg",      // Avatar
  Role: "Admin / Owner",     // Rol: "Admin / Owner" | "Supervisor" | "Cashier" | "Chef" | "Waiter" | "Delivery" | "Accountant" | "System Operator"
  Phone_Number: "+1 23456 78901",
  Status: "Active"          // "Active" | "Inactive"
}
```

### 3. **Categories** (CategoriesData)
```typescript
{
  category: "Sea Food",      // Nume categorie
  image: "category-01.png",  // Imagine
  No_Items: "28",           // Număr de produse
  Date: "February 15, 2025", // Data creării
  Status: "Active"          // "Active" | "Expired"
}
```

### 4. **Addons** (AddonsData)
```typescript
{
  Item: "Pizza",            // Produs asociat
  Addon: "Extra Cheese",    // Nume addon
  Price: "$10",             // Preț
  Status: "Active"
}
```

### 5. **Coupons** (CouponsData)
```typescript
{
  Coupon_Code: "SEAFOOD10",           // Cod cupon
  Valid_Category: "Sea Foods",        // Categorie validă
  Discount_Type: "Percentage",        // "Percentage" | "Fixed Amount"
  Discount_Amount: "10%",            // Valoare discount
  Duration: "01 Jan 2025 - 31 Dec 2025", // Perioadă valabilitate
  Status: "Active"                    // "Active" | "Expired"
}
```

### 6. **Payments** (PaymentsData)
```typescript
{
  Transaction_ID: "#23588",  // ID tranzacție
  Customer: "Adrian James",  // Client
  image: "avatar-32.jpg",    // Avatar
  Order_ID: "#57005",        // ID comandă
  Token_No: "16",            // Token
  Order_Type: "Dine In",     // Tip comandă
  Menus: "3",                // Număr items
  Amount: "$34.50"           // Sumă
}
```

### 7. **Invoices** (InvoicesData)
```typescript
{
  Invoice_ID: "#INV0016",    // ID factură
  Customer: "Adrian James",  // Client
  image: "avatar-32.jpg",    // Avatar
  Date: "01 Nov 2025",       // Data
  Order_Type: "Dine In",     // Tip comandă
  Amount: "$1000",           // Sumă
  Status: "Paid"             // Status
}
```

### 8. **Tax Settings** (TaxSettingsData)
```typescript
{
  Tax_Name: "CGST",          // Nume taxă
  Rate: "9%",                // Rată
  Type: "Inclusive / Exclusive" // Tip
}
```

## 🔍 Comparație cu Entitățile KeepFood Existente

### ✅ **Entități care există deja:**
- ✅ `Restaurant` - complet
- ✅ `User` - complet (dar poate lipsesc câmpuri)
- ✅ `Category` - complet
- ✅ `Product` - complet (dar poate lipsesc addons)
- ✅ `Order` - complet (dar poate lipsesc câmpuri)
- ✅ `OrderItem` - complet
- ✅ `Payment` - complet
- ✅ `Invoice` - complet
- ✅ `PromoCode` - există (similar cu Coupons)
- ✅ `Table` - complet

### ⚠️ **Câmpuri care LIPSESC sau trebuie ADĂUGATE:**

#### 1. **Order Entity** - Câmpuri lipsă:
- ❌ `token` sau `tokenNumber` - Număr token pentru comandă
- ❌ `orderNumber` formatat (ex: "#23588")

#### 2. **User Entity** - Câmpuri lipsă:
- ❌ `avatar` sau `image` - Imagine profil
- ❌ `phoneNumber` formatat (ex: "+1 23456 78901")
- ⚠️ `role` - Verifică dacă toate rolurile din template sunt acoperite

#### 3. **Product Entity** - Câmpuri lipsă:
- ❌ `addons` - Relație cu Addons (produse suplimentare)
- ⚠️ Verifică dacă `ProductVariant` acoperă addons

#### 4. **Category Entity** - Câmpuri lipsă:
- ❌ `itemCount` - Număr de produse în categorie (poate fi calculat)
- ❌ `status` - "Active" | "Expired" (avem `isActive` boolean)

#### 5. **Payment Entity** - Câmpuri lipsă:
- ❌ `transactionId` formatat (ex: "#23588")
- ❌ `tokenNumber` - Token asociat comenzii

#### 6. **Invoice Entity** - Câmpuri lipsă:
- ❌ `invoiceNumber` formatat (ex: "#INV0016")
- ⚠️ Verifică dacă există toate câmpurile necesare

#### 7. **NOUĂ - Addons Entity** (dacă nu există):
- ❌ Tabel nou pentru addons/suplimente produse
- Câmpuri: `id`, `productId`, `name`, `price`, `status`

#### 8. **NOUĂ - Tax Settings Entity** (dacă nu există):
- ❌ Tabel nou pentru setări taxe
- Câmpuri: `id`, `name`, `rate`, `type` (Inclusive/Exclusive)

## 📋 Plan de Acțiune

### Faza 1: Adăugare câmpuri în entități existente
1. Order: `tokenNumber`, `orderNumber`
2. User: `avatar`, formatare `phoneNumber`
3. Category: `status` (enum în loc de boolean)
4. Payment: `transactionId`, `tokenNumber`
5. Invoice: `invoiceNumber`

### Faza 2: Creare entități noi
1. `Addon` entity
2. `TaxSetting` entity

### Faza 3: Migrații
1. Creare migrații pentru câmpurile noi
2. Actualizare entități TypeORM
3. Actualizare DTOs și servicii

### Faza 4: Adaptare API
1. Actualizare endpoints pentru câmpurile noi
2. Actualizare validări
3. Actualizare transformări date
