import React from 'react';

const updatesData = [
  {
    id: 1,
    author: 'Abhi Kaur',
    updateType: 'Frontend Deployment',
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    author: 'Rajesh Nair',
    updateType: 'Bug Fixed',
    timestamp: '4 hours ago',
  },
  // Add more dummy data as needed
];

const VerticalCard = ({ update }) => {
  return (
    <div className="bg-blue-100 rounded-xl shadow-md w-1/2  mb-4 p-6">
      <div className="flex items-center">
        <img
          className="h-12 w-12 object-cover rounded-full"
          src={`https://placekitten.com/300/200?random=${update.id}`}
          alt="Update Thumbnail"
        />
        <div className="ml-4">
          <div className="text-xl font-semibold">{update.updateType}</div>
          <div className="text-gray-500">{` by ${update.author}`}</div>
          <div className="text-gray-500">{`Timestamp: ${update.timestamp}`}</div>
        </div>
      </div>
    </div>
  );
};

const UpdateList = () => {
  return (
    <div>
      {updatesData.map((update) => (
        <VerticalCard key={update.id} update={update} />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="container ml-64 mx-auto  p-8">
      <h1 className="text-2xl font-bold mb-4">Recent Updates</h1>
      <UpdateList />
    </div>
  );
};

export default App;
