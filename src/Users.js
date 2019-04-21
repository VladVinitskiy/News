let Users=[];

for ( let i = 0, len = localStorage.length; i < len; ++i ){
    try {
        if (localStorage.key(i)==='remembered' || typeof JSON.parse(localStorage.getItem(localStorage.key(i))) !== "object")continue;
        Users[i]=JSON.parse(localStorage.getItem(localStorage.key(i)));
    }
    catch (e) {
        // console.log(`Unfortunately, but we had to remove ${localStorage.removeItem(i)}`);
        // localStorage.removeItem(i);
    }
}

export default Users;