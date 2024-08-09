import React, { useEffect, useState } from "react";

const StudentDataComponent = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto px-16 text-center border-t-8 border-blue-500 p-6">
      <h1 className="text-2xl font-bold mb-6">Student Data using</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {students.length > 0 ? (
            students.map((student) => (
              <div
                key={student.id}
                className="bg-white border border-gray-200 rounded-lg shadow-md p-6"
              >
                <h2 className="text-xl font-semibold mb-2">{student.name}</h2>
                <p className="text-gray-700 mb-2">Email: {student.email}</p>
                <p className="text-gray-700 mb-2">Phone: {student.phone}</p>
                <p className="text-gray-700 mb-2">Website: {student.website}</p>
                <p className="text-gray-700 mb-2">
                  Company: {student.company.name}
                </p>
                <p className="text-gray-700 mb-2">
                  Address: {student.address.street}, {student.address.city}
                </p>
                <p className="text-gray-700">
                  Catchphrase: {student.company.catchPhrase}
                </p>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default StudentDataComponent;
