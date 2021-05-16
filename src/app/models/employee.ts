export class Employee {
    constructor(public id: number,
        public firstname: string,
        public lastname: string,
        public gender: string,
        public department: string,
        public dateofbirth?: Date
    ) {

    }
}
