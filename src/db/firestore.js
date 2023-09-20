import { firebaseApp } from "@/firebase";
import {
  addDoc,
  getFirestore,
  arrayUnion,
  arrayRemove,
  doc,
  updateDoc,
  collection,
  getDocs,
  query,
  where,
  getDoc,
  setDoc,
} from "firebase/firestore";

const db = getFirestore(firebaseApp);

export const fireStoreUtils = {
  createUserPlaylist: async ({ userId, name }) => {
    console.log(userId, name, "line 19..................");
    try {
      const docRef = await addDoc(collection(db, "playlists"), {
        userId,
        name,
        songs: [],
      });
      console.log("Document written with ID: ", docRef.id);
      return docRef.id;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
  getUserPlaylists: async (userId) => {
    try {
      const playlists = [];
      const querySnapshot = await getDocs(
        query(collection(db, "playlists"), where("userId", "==", userId))
      );
      querySnapshot.forEach((doc) => {
        playlists.push({ id: doc.id, ...doc.data() });
      });
      return playlists;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
  addSongToPlaylist: async ({ playlistId, songId }) => {
    console.log({ playlistId, songId }, "addSongToPlaylist");
    try {
      const playlistRef = doc(db, "playlists", playlistId);
      await updateDoc(playlistRef, {
        songs: arrayUnion(songId),
      });
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  removeSongFromPlaylist: async ({ playlistId, songId }) => {
    console.log({ playlistId, songId }, "removeSongFromPlaylist");
    try {
      const playlistRef = doc(db, "playlists", playlistId);
      await updateDoc(playlistRef, {
        songs: arrayRemove(songId),
      });
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  // deletePlaylist: async (playlistId) => {
  //   console.log(playlistId, "deletePlaylist");
  //   try {
  //     await deleteDoc(doc(db, "playlists", playlistId));
  //     return true;
  //   } catch (err) {
  //     console.log(err);
  //     return false;
  //   }
  // },
  addSongToHistory: async ({ userId, songId }) => {
    console.log({ userId, songId }, "addSongToHistory");

    try {
      const userRef = doc(db, "users", userId);
      const responseDoc = await getDoc(userRef);
      if (responseDoc.exists()) {
        // Document exists, update the array field
        const existingArray = responseDoc.data().history || [];
        const newArray = [...existingArray, songId];
        await updateDoc(userRef, { history: newArray });
      } else {
        // Document doesn't exist, create it with the array field
        await setDoc(userRef, { history: [songId] });
      }
    } catch (err) {
      console.log(err);
    }
  },
  getSongsFromHistory: async (userId) => {
    try {
      const userRef = doc(db, "users", userId);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        return docSnap.data().history;
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  },
};
