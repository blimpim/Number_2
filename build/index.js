const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
const getData = async (url) => {
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        return data;
    }
    else {
        console.log("Ошибка HTTP: " + response.status);
        return [];
    }
};
getData(COMMENTS_URL)
    .then((data) => {
    data.forEach((item) => {
        console.log(`ID: ${item.id}, Email: ${item.email}`);
    });
});
export {};
//# sourceMappingURL=index.js.map