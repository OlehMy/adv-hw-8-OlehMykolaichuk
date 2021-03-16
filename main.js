class Student {
    constructor(university, course, fullName, ) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.arrMarks;
        this.learningStatus = true;
    }
    get getInfo() {
        return `A ${this.course}-year student of ${this.university} ${this.fullName}`;
    }
    get marks() {
        return this.learningStatus == false ? null : this.arrMarks;
    }
    set marks(arrMarks) {
        return this.learningStatus == false ? null : this.arrMarks.push(arrMarks);
    }
    get getAverageMark() {
        return this.arrMarks.reduce((x, y) => x + y, 0) / this.arrMarks.length;
    }
    dismiss() {
        return this.learningStatus = false;
    }
    recover() {
        return this.learningStatus = true;
    }
}

const jackSmith = new Student('University of Oxford', '3', 'Jack Smith', );

// інформація про стдента
console.log(`General information about the student:`, jackSmith.getInfo);

// присвоюємо оцінки студенту
jackSmith.arrMarks = [5, 4, 4, 5, ];
console.log(`Student ${jackSmith.fullName}'s marks at the beginning:`, jackSmith.marks);

// додаємо оцінку студенту
jackSmith.marks = 4;
console.log(`Student ${jackSmith.fullName}'s marks after geting the next mark:`, jackSmith.marks);

// визачаємо середню оцінку для студента
console.log(`Student ${jackSmith.fullName}'s avrage mark:`, jackSmith.getAverageMark);

// відраховуємо студента
jackSmith.dismiss();
console.log(`Student ${jackSmith.fullName}'s marks after dismiss:`, jackSmith.marks);

// додаємо оцінку студенту після відрахування
jackSmith.marks = 5;
console.log(`Student ${jackSmith.fullName}'s marks after geting the next mark after dismiss:`, jackSmith.marks);

// поновлюємо студента
jackSmith.recover();
console.log(`Student ${jackSmith.fullName}'s marks after recover:`, jackSmith.marks);



// Advanced
console.log('*** Advanced ***');

class BudgetStudent extends Student {
    constructor(university, course, fullName, ) {
        super(university, course, fullName, );
        setInterval(() => this.getScholarship, 30000);
    }
    get getScholarship() {
        this.learningStatus && this.getAverageMark >= 4 ?
            console.log(`${this.fullName}, you received a £ 1,400 scholarship`) :
            console.log(`${this.fullName}, you must learning better!!!`);
    }
}

const johnSmith = new BudgetStudent('University of Oxford', '2', 'John Smith', );

// присвоюємо оцінки студенту
johnSmith.arrMarks = [4, 4, 4, 5, ];
console.log(`Student ${johnSmith.fullName}'s marks:`, johnSmith.marks);

// визачаємо середню оцінку для студента
console.log(`Student ${johnSmith.fullName}'s avrage mark:`, johnSmith.getAverageMark);

// статус студента
console.log(`Student ${johnSmith.fullName}'s learnin sgtatus:`, johnSmith.learningStatus);