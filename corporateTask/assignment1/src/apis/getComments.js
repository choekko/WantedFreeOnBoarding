import endPoint from './endPoint';

const getComments = async(page, limit) => {
    const url = endPoint + `/comments?_page=${page}&_limit=${limit}`

    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error('서버에 이상이 있습니다. ');
        }
        return res.json();
    } catch (e) {
        alert(e);
        console.log(e);
    }
}

export default getComments;