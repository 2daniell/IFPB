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
        private readonly studantName: string,
        private readonly answers: string[]
    ) {
        if (this.answers.length === 0) {
            throw new Error("O vetor de resposta nao pode estar vazio!")
        }
    }

    public getStudantName(): string {
        return this.studantName;
    }

    public getAnswers(): string[] {
        return this.answers;
    }

}

class Exam {

    private readonly exams: Answer[] = [];

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

        this.exams.push(exam);
    }


}