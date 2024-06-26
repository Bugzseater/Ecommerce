import { auth, db } from './Firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';

function Profile() {
    const [userDetails, setUserDetails] = useState(null);
    const fetchUserData = async() =>{
        auth.onAuthStateChanged(async(user) =>{
            const docRef = doc(db, "Users" , user.uid);
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()) {
                setUserDetails(docSnap.data());
            }
        });
    };
    useEffect(() =>{
        fetchUserData()
    });

    async function handleLogout(){
        try {
            await auth.signOut();
            window.location.href = "/login";
        } catch (error) {
            
        }
    }
    return(
        <div>
            {userDetails ?(
                <>
                    <h3>Welcome {userDetails.name}</h3>
                    <h1>This site Under Construction</h1>  
                </>
            ) : (
                <p>Loading....</p>
            )}
        </div>
    );
    
}
export default Profile;