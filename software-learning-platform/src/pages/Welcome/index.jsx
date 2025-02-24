import React from 'react';

const Welcome = () => {
  const categories = [
    {
      id: 1,
      title: 'Python',
      description: 'Learn Python programming from basics to advanced concepts',
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: 'Java',
      description: 'Master Java programming and object-oriented principles',
      image: '/api/placeholder/300/200'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Software Learning Platform
          </h1>
        </div>
      </header>

      {/* Welcome Section */}
      <main className="max-w-7xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Your Learning Journey
          </h2>
          <p className="text-xl text-gray-600">
            Choose a category below to start learning
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600">{category.description}</p>
                <button
                  className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                  onClick={() => console.log(`Clicked ${category.title}`)}
                >
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Welcome;