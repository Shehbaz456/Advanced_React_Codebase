export default function ProfileCard({ user }) {
  if (!user) return null;

  return (
    <div className="max-w-md mx-auto bg-gray-300 shadow-xl rounded-2xl p-6 border border-gray-200">
      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src={user.picture.large}
          alt={user.name.first}
          className="w-32 h-32 rounded-full shadow-md border-4 border-gray-100"
        />
      </div>

      {/* Name */}
      <h2 className="text-2xl font-bold text-center mt-4">
        {user.name.title} {user.name.first} {user.name.last}
      </h2>

      {/* Email */}
      <p className="text-center text-gray-600 mt-1">{user.email}</p>

      <hr className="my-4" />

      {/* Details */}
      <div className="space-y-2 text-gray-700">
        <p><span className="font-semibold">Gender:</span> {user.gender}</p>
        <p><span className="font-semibold">Age:</span> {user.dob.age}</p>
        <p><span className="font-semibold">Phone:</span> {user.phone}</p>
        <p><span className="font-semibold">Mobile:</span> {user.cell}</p>
      </div>

      <hr className="my-4" />

      {/* Location */}
      <div>
        <h3 className="font-semibold text-lg mb-1">Location</h3>
        <p className="text-gray-700">
          {user.location.street.number} {user.location.street.name},  
          {user.location.city}, {user.location.state},  
          {user.location.country} - {user.location.postcode}
        </p>
      </div>
    </div>
  );
}
