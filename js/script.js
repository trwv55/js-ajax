window.addEventListener('DOMContentLoaded', () => {
    function req() {
        // const request = new XMLHttpRequest();
        // request.open('GET', 'http://localhost:3000/people');
        // request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        // request.send();
        // request.addEventListener('load', function () {
        //     if (request.status == 200) {
        //         let data = JSON.parse(request.response);
        //         console.log(data);
        //         createCards(data);
        //     } else {
        //         console.error('Что то пошло не так');
        //     }
        // });

        getResource('http://localhost:3000/people')
            .then((data) => console.log(data))
            .catch((err) => console.error(err));

        this.remove();
    }

    document.querySelector('button').addEventListener('click', req, { once: true });

    // async function getResource(url) {
    //     const res = await fetch(`${url}`);

    //     if (!res.ok) {
    //         throw new Error(`Could not fetch ${url}, status ${res.status}`);
    //     }

    //     return await res.json();
    // }

    async function getResource(url) {
        const res = await axios(`${url}`);

        if (res.status !== 200) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }

        return await res;
    }

    function createCards(response) {
        response.forEach((item) => {
            let card = document.createElement('div');

            card.classList.add('card');

            let icon;
            if (item.sex === 'male') {
                icon = 'icons/mars.png';
            } else {
                icon = 'icons/female.png';
            }

            card.innerHTML = `
                        <img src="${item.photo}" alt="">
                        <div class="name">${item.name} ${item.surname}</div>
                        <div class="sex">
                            <img src=${icon} alt="male">
                        </div>
                        <div class="age">${item.age}</div>
                    `;
            document.querySelector('.app').appendChild(card);
        });
    }
});
