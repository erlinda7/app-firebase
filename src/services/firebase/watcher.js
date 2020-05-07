import { auth, db } from './setup';


//vigila los cambios que ocurre en el login
export function watchUserChanges(callback) {
    const unsub = auth.onAuthStateChanged((user) => {
        if (user && !user.isAnonymous) {
            console.log('logged in');
            callback({
                id: user.uid,
                email: user.email,
                displayname: user.displayName
            });
        } else {
            console.log('NOT logged in');
            callback(null);
        }
    });

    return unsub;
}

// para vigilar los cambios en los gastos
// trae toda la coleccion expenses
export function watchExpenses(callback) {
    const unsub = db.collection('expenses')
        .onSnapshot((onSnapshot) => {
            const docs = [];
            onSnapshot.forEach((doc) => {   //snapshot es un objeto con muchas propiedades
                const data = doc.data();

                docs.push({
                    ...data,
                    id: doc.id,
                });
            });
            callback(docs);
        });

    return unsub;
}
