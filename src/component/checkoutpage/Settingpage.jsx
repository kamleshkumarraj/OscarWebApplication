import React, { useState } from 'react';

const SettingsPage = () => {
  const [siteName, setSiteName] = useState('');
  const [supportEmail, setSupportEmail] = useState('');
  const [monthlyOrderGoal, setMonthlyOrderGoal] = useState('');

  const handleSaveChanges = () => {
    
    console.log('Saved settings:', {
      siteName,
      supportEmail,
      monthlyOrderGoal,
    });
  };

  const handleMonthlyOrderGoalChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setMonthlyOrderGoal(value);
    }
  };

  return (
    <div className="mt-10  flex items-center justify-center">
      <div
        className="relative p-8 bg-white shadow-lg rounded-[10.57px] border border-gray-300"
              style={{
            alignItems:'center',
          width: '1000.23px',
          height: '500.97px',
          top: '50.71px',
          left: '100.98px',
        }}
      >
        <h2 className="text-2xl font-semibold">Settings</h2>
        <hr className='mt-1'/>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Site Name</label>
          <input
            type="text"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            className="mt-1 block w-[420px] p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Support Email</label>
          <input
            type="email"
            value={supportEmail}
            onChange={(e) => setSupportEmail(e.target.value)}
            className="mt-1 block w-[420px] p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-6">
          <label className="block  text-sm font-medium text-gray-700">Monthly Order Goal</label>
          <input
            type="number"
            value={monthlyOrderGoal}
            onChange={handleMonthlyOrderGoalChange}
            className="mt-1 block w-[420px] p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button
          onClick={handleSaveChanges}
          className="mt-10 w-40 py-2 px-4 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
