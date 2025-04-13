import { useState } from 'react'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, expense: 'Apple MacBook Pro 17"', description: 'Silver', category: 'Laptop', price: 299999, date: '2025-04-10' },
    { id: 2, expense: 'Microsoft Surface Pro', description: 'White', category: 'Laptop PC', price: 199999, date: '2025-04-12' }
  ]);
  
  const [formData, setFormData] = useState({
    expense: '',
    description: '',
    category: '',
    price: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: expenses.length + 1,
      expense: formData.expense,
      description: formData.description,
      category: formData.category,
      price: parseFloat(formData.price),
      date: formData.date
    };
    setExpenses([...expenses, newExpense]);
    setFormData({ expense: '', description: '', category: '', price: '', date: '' });
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="text-bold text-center mb-8">Expense Tracker</h1>
      
      <div className="content-wrapper">
        {/* Form Section - Left Side */}
        <div className="form-wrapper">
          <form id="form" onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold mb-4">Add Expenses</h2>
            
            <input 
              type="text" 
              name="expense"
              value={formData.expense}
              onChange={handleChange}
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
              placeholder="Expense" 
              required 
            />
            
            <input 
              type="text" 
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
              placeholder="Description" 
              required 
            />
            
            <input 
              type="text" 
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
              placeholder="Category" 
              required 
            />
            
            <input 
              type="number" 
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
              placeholder="Price" 
              required 
            />
            
            <input 
              type="date" 
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
              required 
            />
            
            <button 
              type="submit" 
              className="text-white bg-gray-600 border border-gray-100 shadow-md hover:bg-green-700 focus:ring-2 focus:ring-green-700 rounded px-4 py-2 w-full"
            >
              Submit
            </button>
          </form>
        </div>
        
        {/* Table Section - Right Side */}
        <div className="table-wrapper">
          <div className="relative overflow-x-auto px-4 py-8 bg-white rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">Expense</th>
                  <th scope="col" className="px-6 py-3">Description</th>
                  <th scope="col" className="px-6 py-3">Category</th>
                  <th scope="col" className="px-6 py-3">Price</th>
                  <th scope="col" className="px-6 py-3">Date</th>
                  <th scope="col" className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((item) => (
                  <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.expense}
                    </td>
                    <td className="px-6 py-4">{item.description}</td>
                    <td className="px-6 py-4">{item.category}</td>
                    <td className="px-6 py-4">ksh{item.price}</td>
                    <td className="px-6 py-4">{item.date}</td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => deleteExpense(item.id)}
                        className="text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
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
      </div>
    </div>
  )
}

export default App
