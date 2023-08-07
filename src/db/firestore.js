import {firebaseApp} from "@/firebase"
import { addDoc, getFirestore , arrayUnion, arrayRemove, doc, updateDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp);


export const firestoreUtils = {
    createUserPlaylist : async (userId, playlistName) => {
        try{
            const docRef = await addDoc(collection(db, "playlists"), {
                name: playlistName,
                userId: userId,
                songs: []
            });
            console.log("Document written with ID: ", docRef.id);
            return docRef.id;
        } catch(err){
            console.log(err);
            return null;
        }
    },
    getUserPlaylists : async (userId) => {
        try{
            const playlists = [];
            const querySnapshot = await getDocs(query(collection(db, "playlists"), where("userId", "==", userId)));
            querySnapshot.forEach((doc) => {
                playlists.push({id: doc.id, ...doc.data()});
            });
            return playlists;
        } catch(err){
            console.log(err);
            return null;
        }
    },
    addSongToPlaylist : async (playlistId, song) => {
        try{
            const playlistRef = doc(db, "playlists", playlistId);
            await updateDoc(playlistRef, {
                songs: arrayUnion(song)
            });
            return true;
        } catch(err){
            console.log(err);
            return false;
        }
    },
    removeSongFromPlaylist : async (playlistId, song) => {
        try{
            const playlistRef = doc(db, "playlists", playlistId);
            await updateDoc(playlistRef, {
                songs: arrayRemove(song)
            });
            return true;
        }catch(err){
            console.log(err);
            return false;
        }
    }
}
