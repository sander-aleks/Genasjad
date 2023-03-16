fetch('./dummy.json').then(Response => Response.json()).then(({ctRoot}) => {
    const res = ctRoot.filter((person) => person.verified == true)
    console.log(res)
})