import React, { useEffect, useState } from 'react';
import { updateProfile } from "firebase/auth";
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext'; 
import { auth } from '../../firebase/firebase.config';


const MyProfile = () => {
  
    const { user, loading } = useAuth(); 

  // Form states
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [updating, setUpdating] = useState(false);

   useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || '');
      setPhotoURL(user.photoURL || '');
    }
  }, [user]);

    if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-md mx-auto mt-30 p-6 bg-white rounded-md shadow-md">
        <p className="text-center text-gray-600">No user logged in.</p>
      </div>
    );
  }


  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setUpdating(true);

    try {
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      });

      toast.success('Profile updated successfully!');
        await auth.currentUser.reload();
    } catch (err) {
    console.error("Profile update error:", err);
      toast.error(err.message || "Failed to update profile");
    } finally {
      setUpdating(false);
    }
  };


   return (
    <div className="max-w-md mx-auto mt-30 my-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">My Profile</h2>

      <div className="flex items-center space-x-4 mb-6">
        <img
          src={photoURL || user.photoURL || "/default-avatar.png"}
          alt="User Avatar"
          className="w-24 h-24 rounded-full object-cover"
          onError={(e) => {
            e.target.src = "/default-avatar.png";
          }}
        />
        <div>
          <p className="text-lg font-medium">
            {displayName || user.displayName || "No Name"}
          </p>
          <p className="text-gray-600">{user?.email || user?.providerData?.[0]?.email || "No email"}</p>
          <p className="text-xs text-gray-400 mt-1">
            Provider: {user.providerData[0]?.providerId || "unknown"}
          </p>
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