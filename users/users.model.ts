const users = [
    {id: '1', name: 'Petter Parker', email: 'petter@marvel.com'},
    {id: '2', name: 'Bruce Wayne', email: 'bruce@marvel.com'},
]

export class User{
    static findAll():Promise<any>{
        return Promise.resolve(users);
    }
    static findById(id:string):Promise<any>{
        return new Promise(resolve => {
            const filtred = users.filter(user => user.id === id);
            let user = undefined
            if(filtred.length > 0){
                user = filtred[0]
            }
            resolve(user);
        })
    }
}