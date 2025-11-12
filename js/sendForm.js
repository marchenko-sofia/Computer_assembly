const sendForm = () => {
    const form = document.querySelector('.modal');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const text = form.querySelector('input[type=text]');
        const tel = form.querySelector('input[type=tel]');
        const email = form.querySelector('input[type=email]');

        const sendObj = {
            name: text.value,
            phone: tel.value,
            email: email.value
        };

        // метод-GET

        // fetch('https://jsonplaceholder.typicode.com/todos/18457')
        //     .then(response => {
        //         if (response.status === 404) {
        //             throw new Error('Not found!');
        //         }
        //         return response.json()
        //     })
        //     .then(json => {
        //         console.log(json);
        //     })
        //     .catch(error => {
        //         console.warn(error.message);
        //     })
        //     .finally(() => {
        //         console.log('finally');
        //     })


        // метод-POST

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendObj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                if (response.status === 404) {
                    throw new Error('ERROR!');
                }
                return response.json()
            })
            .then((json) => console.log(json))
            .catch(error => {
                alert(error.message);
            })
            .finally(() => {
                event.target.reset();
            });

        // реализация сбора данных формы через объект formData
        //     text.setAttribute('name', 'fullName');
        //     tel.setAttribute('name', 'phone');
        //     email.setAttribute('name', 'e-mail');
        //     let formData = new FormData(form);

        //     fetch('https://jsonplaceholder.typicode.com/posts', {
        //         method: 'POST',
        //         body: formData,
        //         headers: {
        //             'Content-type': 'multipart/form-data; charset=UTF-8',
        //         },
        //     })
        //         .then((response) => {
        //             if (response.status === 404) {
        //                 throw new Error('ERROR!');
        //             }
        //             return response.json()
        //         })
        //         .then((json) => console.log(json))
        //         .catch(error => {
        //             alert(error.message);
        //         })
        //         .finally(() => {
        //             event.target.reset();
        //         });

    });
}

sendForm();