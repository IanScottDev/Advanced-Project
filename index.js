function contact(event) {
    event.preventDefault();
    emailjs
        .sendForm(
            'service_b8z6qxb',
            'template_ejvjbnq',
            event.target,
            'QGRWz4iBJkHnakbDK'
        ).then(() => {
            console.log('This worked')
        })

}
