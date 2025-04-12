// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
    
//     <>
//       <div className='mx-w-sm mx-auto'>
//     <form class="max-w-sm mx-auto">
//       <h1 className='text-sky-500 '>Add Expenses</h1>
//   <div class="mb-5 bg-black rounded-lg p-5">
//     <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//     <input type="email" id="email" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="name@flowbite.com" required />
//       </div>
      
//   <div class="mb-5 bg-black rounded-lg p-5">
//     <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
//     <input type="password" id="password" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
//       </div>
      
//   <div class="mb-5 bg-black rounded-lg p-5">
//     <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
//     <input type="password" id="repeat-password" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
//       </div>
//       </form>
// </div>      

// <div class="relative overflow-x-auto">
//     <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//                 <th scope="col" class="px-6 py-3">
//                     Expense
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Description
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Expense Category
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Price
//               </th>
//               <th scope="col" class="px-6 py-3">
//                     Date
//                 </th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
//                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Apple MacBook Pro 17"
//                 </th>
//                 <td class="px-6 py-4">
//                     Silver
//                 </td>
//                 <td class="px-6 py-4">
//                     Laptop
//                 </td>
//                 <td class="px-6 py-4">
//                     $2999
//               </td>
//               <td class="px-6 py-4">
//                     $2999
//                 </td>
//             </tr>
//             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
//                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Microsoft Surface Pro
//                 </th>
//                 <td class="px-6 py-4">
//                     White
//                 </td>
//                 <td class="px-6 py-4">
//                     Laptop PC
//                 </td>
//                 <td class="px-6 py-4">
//                     $1999
//               </td>
//                <td class="px-6 py-4">
//                     $1999
//                 </td>
//             </tr>
//             <tr class="bg-white dark:bg-gray-800">
//                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Magic Mouse 2
//                 </th>
//                 <td class="px-6 py-4">
//                     Black
//                 </td>
//                 <td class="px-6 py-4">
//                     Accessories
//                 </td>
//                 <td class="px-6 py-4">
//                     $99
//               </td>
//               <td class="px-6 py-4">
//                     $99
//                 </td>
//             </tr>
//         </tbody>
//     </table>
//       </div>
//     </>
//   )
// }
// export default App;

import { useState } from 'react';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'High Standard', name: 'Technology', amount: 100, date: '2025-06-10' },
    { id: 2, description: 'Office Supplies', name: 'Printer Paper', amount: 20, date: '2025-06-12' }
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const filteredExpenses = expenses.filter(expense => 
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
    expense.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8">Expense Tracker</h1>
      
      {/* Add Expense Form */}
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target;
          addExpense({
            description: form.description.value,
            name: form.name.value,
            amount: parseFloat(form.amount.value),
            date: form.date.value
          });
          form.reset();
        }}
        className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6"
      >
        <input 
          name="description" 
          placeholder="Description" 
          required
          className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          name="name" 
          placeholder="Name" 
          required
          className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          name="amount" 
          type="number" 
          placeholder="Amount" 
          required
          className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          name="date" 
          type="date" 
          required
          className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Add Expense
        </button>
      </form>
      
      {/* Search Bar */}
      <input 
        type="text" 
        placeholder="Search expenses..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 mb-6 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      {/* Expenses Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th 
                onClick={() => requestSort('description')}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
              >
                Description {sortConfig.key === 'description' && (
                  sortConfig.direction === 'asc' ? '↑' : '↓'
                )}
              </th>
              <th 
                onClick={() => requestSort('name')}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
              >
                Name {sortConfig.key === 'name' && (
                  sortConfig.direction === 'asc' ? '↑' : '↓'
                )}
              </th>
              <th 
                onClick={() => requestSort('amount')}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
              >
                Amount {sortConfig.key === 'amount' && (
                  sortConfig.direction === 'asc' ? '↑' : '↓'
                )}
              </th>
              <th 
                onClick={() => requestSort('date')}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-200"
              >
                Date {sortConfig.key === 'date' && (
                  sortConfig.direction === 'asc' ? '↑' : '↓'
                )}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedExpenses.map(expense => (
              <tr key={expense.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {expense.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {expense.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${expense.amount.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {expense.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button
                    onClick={() => deleteExpense(expense.id)}
                    className="bg-red-600 hover:bg-red-700 text-white font-medium py-1 px-3 rounded transition-colors"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;