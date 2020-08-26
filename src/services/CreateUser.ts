/**
 * In order to create: name, email, password
 * 
 */

interface TechObject {
    title: string;
    experience: number;
}


interface CreateUserData {
    name ?: string;
    email: string | boolean;
    password: string;
    techs: Array<string | TechObject>;
//    techs2: string[];
}

// string, number, boolean, object, Array
// interfaces

export default function createUser({name='', email, password} : CreateUserData) {
    const user = {
        name,
        email,
        password,
    }
    return user;
}