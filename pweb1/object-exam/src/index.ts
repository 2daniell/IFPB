class Weight {

    public constructor(
        private scores: number[]
    ) {
        if (this.scores.length === 0) {
            throw new Error("O vetor de pesos nao pode estar vazio!")
        }
    }

    public setScore(scores: number[]): void {
        this.scores = scores;
    }

    public getScores(): number[] {
        return this.scores;
    }

}

class Answer {

    public constructor(
        private readonly answers: string[],
        private readonly studentName?: string
    ) {
        if (this.answers.length === 0) {
            throw new Error("O vetor de resposta nao pode estar vazio!")
        }
    }

    public getAnswers(): string[] {
        return this.answers;
    }

}

class Exam {

    private readonly exams: Answer[] = [];
    private readonly scores: number[] = []

    public constructor(
        private readonly weight: Weight,
        private readonly answer: Answer
    ) {
        if (answer.getAnswers().length !== weight.getScores().length) {
            throw new Error(`O numero de respostas do gabarito deve ser igual a quantidade de pesos!`)
        }
    }

    public add(exam: Answer): void {
        if (exam.getAnswers().length !== this.answer.getAnswers().length) {
            throw new Error("O numero de respostas do exame deve ser igual a quantidade de questoes do gabarito!")
        }

        const correctAnswers = this.answer.getAnswers();
        const weights = this.weight.getScores();

        const score = exam.getAnswers().reduce((acc, answer, index) => answer === correctAnswers[index] ? acc + weights[index] : acc, 0)

        this.scores.push(score);
        this.exams.push(exam);
    }

    public avg(): number {
        const total = this.scores.reduce((acc, score) => acc + score, 0);
        return this.scores.length > 0 ? total / this.scores.length : 0;
    }

    public min(count: number) {
        return this.scores.sort((a, b) => a - b).slice(0, count);
    }

    public max(count: number) {
        return this.scores.sort((a, b) => b - a).slice(0, count);
    }

    public gt(limit: number) {
        return this.scores.filter((score) => score > limit);
    }

    public lt(limit: number) {
        return this.scores.filter((score) => score < limit);
    }


}

const template = new Answer(["A", "B", "C", "D", "A"]);
const weight = new Weight([2, 3, 4, 1, 5]);

const exam = new Exam(weight, template);
exam.add(new Answer(["A", "B", "C", "D", "A"], "Aluno 1"))
exam.add(new Answer(["A", "B", "C", "D", "B"], "Aluno 2"))
exam.add(new Answer(["A", "C", "C", "D", "A"], "Aluno 3"))
exam.add(new Answer(["B", "B", "C", "D", "A"], "Aluno 4"))
exam.add(new Answer(["A", "B", "D", "D", "A"], "Aluno 5"))
exam.add(new Answer(["A", "B", "C", "C", "A"], "Aluno 6"))
exam.add(new Answer(["D", "B", "C", "D", "A"], "Aluno 7"))
exam.add(new Answer(["A", "D", "C", "D", "A"], "Aluno 8"))
exam.add(new Answer(["A", "B", "A", "D", "A"], "Aluno 9"))
exam.add(new Answer(["A", "B", "C", "A", "B"], "Aluno 10"))

console.log(exam.avg()) //12
console.log(exam.min(3)) //9, 10, 11
console.log(exam.max(3)) //15, 14, 13
console.log(exam.lt(7)) //[]
console.log(exam.gt(3)) //15, 14, 13, 13, 12, 12, 11, 11, 10, 9