const users = [
    {name: 'Petter Parker', email: 'petter@marvel.com'},
    {name: 'Bruce Wayne', email: 'bruce@marvel.com'},
]

export class User{
    static findAll():Promise<any>{
        return Promise.resolve(users);
    }
}