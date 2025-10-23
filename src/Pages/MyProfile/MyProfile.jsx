import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { toast } from 'react-toastify';

const auth = getAuth();

const MyProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Form states
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setDisplayName(currentUser.displayName || '');
        setPhotoURL(currentUser.photoURL || '');
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div className="p-4">Loading user data...</div>;

  if (!user) return <div className="p-4">No user logged in.</div>;

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setUpdating(true);
    setError('');

    try {
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      });

      setUser({ ...user, displayName, photoURL });
      toast.success('Profile updated successfully!');
    } catch (err) {
      setError(err.message);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-30 my-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">My Profile</h2>

      <div className="flex items-center space-x-4 mb-6">
        <img
          src={photoURL || "/default-avatar.png"}
          alt="User Avatar"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <p className="text-lg font-medium">{displayName || "No Name"}</p>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      <form onSubmit={handleUpdateProfile} className="space-y-4">
        <div>
          <label htmlFor="displayName" className="block mb-1 font-medium">
            Display Name
          </label>
          <input
            type="text"
            id="displayName"
            className="input input-bordered w-full"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Enter your display name"
          />
        </div>

        <div>
          <label htmlFor="photoURL" className="block mb-1 font-medium">
            Photo URL
          </label>
          <input
            type="text"
            id="photoURL"
            className="input input-bordered w-full"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Enter image URL"
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className={`btn btn-primary w-full ${updating ? 'loading' : ''}`}
          disabled={updating}
        >
          {updating ? 'Updating...' : 'Update Profile'}
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
