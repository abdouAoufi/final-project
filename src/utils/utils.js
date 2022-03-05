export const storeDataUser = (name, email) => {
    localStorage.setItem("email", email);
    localStorage.setItem("name", name);
};

export const getDataUser = () => {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const dataUser = {
        name: name,
        email,
    };
    return dataUser;
};