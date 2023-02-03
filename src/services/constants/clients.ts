interface Client {
    id: number,
    firstName: string,
    lastName: string,
    role: string,
    email: string,
}

export const clients: Client[] = [
    {id: 1, firstName: "Jean", lastName: "Claire", role: "ROLE_USER", email: "jean.claire@gmail.com"},
    {id: 2, firstName: "Philipe", lastName: "Legrand", role: "ROLE_COMMERCIAL", email: "philipe.legrand@gmail.com"},
    {id: 3, firstName: "Michelle", lastName: "Vasseur", role: "ROLE_ADMIN", email: "michelle.vasseur@gmail.com"},
    {id: 4, firstName: "Valentine", lastName: "Jile", role: "ROLE_USER", email: "valentine.jile@gmail.com"}
];