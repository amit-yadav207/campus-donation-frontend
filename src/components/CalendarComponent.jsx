import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const campaigns = [
    {
      id: 1,
      name: 'Education for All',
      date: '2024-11-15',
      description: 'Fundraiser for educational resources',
    },
    {
      id: 2,
      name: 'Environmental Awareness',
      date: '2024-12-01',
      description: 'Campaign to support sustainability initiatives',
    },
    // Add more campaigns here
  ];
const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => setSelectedDate(date);

  // Filter campaigns by selected date
  const campaignsForDate = campaigns.filter(
    (campaign) =>
      new Date(campaign.date).toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Campaign Calendar</h2>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        className="border border-gray-200 rounded-lg shadow-lg"
      />
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Campaigns on {selectedDate.toDateString()}:</h3>
        {campaignsForDate.length > 0 ? (
          campaignsForDate.map((campaign) => (
            <div key={campaign.id} className="p-4 mb-3 bg-gray-100 rounded-lg shadow-sm">
              <h4 className="text-green-500 font-semibold">{campaign.name}</h4>
              <p className="text-gray-600">{campaign.description}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No campaigns on this date.</p>
        )}
      </div>
    </div>
  );
};

export default CalendarComponent;
