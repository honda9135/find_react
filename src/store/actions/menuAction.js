import firebase from '../../config/fbConfig'


export const createMenu =  (menu) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        let storageRef = firebase.storage().ref().child(menu.image.name);
        storageRef.put(menu.image)
        .then(function(snapshot) {
        }).then(() =>{
            storageRef.getDownloadURL().then(imageUrl => {
                console.log(imageUrl,"imageUrl")
                const firestore = getFirestore();
                firestore.collection('shops').doc(menu.id).update({
                    menu: firebase.firestore.FieldValue.arrayUnion({name:menu.name,
                        price:menu.price,
                        category:menu.category,
                        image:imageUrl
                    })
                });
        })
    }).then(() => {
            dispatch({ type: 'CREATE_MENU', menu })
        }).catch((err) => {
            dispatch({ type: 'CREATE_MENU_ERROR', err })
        })
    }
};