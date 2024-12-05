class AnswerKey {

    constructor(options, correct, weight) {
        this.options = options;
        if (!options.includes(correct)) {
            throw new Error("Resposta não inclusa nas opções");
        }
        this.correct = correct;
        this.weight = weight;
    }

}

class Answer {

    constructor(options) {
        this.options = options;
    }

}

class Exam {

    constructor(questions, answers) {
        this.questions = questions;
        this.answers = answers;

    }

    add(answer) {
        this.answers.push(answer);
    }

    avg() {
        let sum = 0;
        for (let i = 0; i < this.questions.length; i++) {
            for (let j = 0; j < this.answers.length; j++) {
                if (this.questions[i].correct === this.answers[j].options[i]) {
                    sum += this.questions[i].weight;
                }
            }
        }
        return sum / this.questions.length;
    }

    min(count = 3) {
        
        const responses = this.answers.map((answer) => {
            let count = 0;
            for (let i = 0; i < this.questions.length; i++) {
                if (answer.options[i] === this.questions[i].correct) {
                    count += this.questions[i].weight;
                }
            }
            return count;
        });

        responses.sort((a, b) => a - b);

        const mins = []
        for (let i = 0; i < count; i++) {
            mins.push(responses[i]);
        }

        return mins;
    }

    max(count = 3) {
        const responses = this.answers.map((answer) => {
            let count = 0;
            for (let i = 0; i < this.questions.length; i++) {
                if (answer.options[i] === this.questions[i].correct) {
                    count += this.questions[i].weight;
                }
            }
            return count;
        });

        responses.sort((a, b) => b - a);

        const mins = []
        for (let i = 0; i < count; i++) {
            mins.push(responses[i]);
        }

        return mins;
    }

    it(limit) {
        const responses = this.answers.map((answer) => {
            let count = 0;
            for (let i = 0; i < this.questions.length; i++) {
                if (answer.options[i] === this.questions[i].correct) {
                    count += this.questions[i].weight;
                }
            }
            return count;
        });

        return responses.filter((response) => response < limit)
    }

    gt(limit) {
        const responses = this.answers.map((answer) => {
            let count = 0;
            for (let i = 0; i < this.questions.length; i++) {
                if (answer.options[i] === this.questions[i].correct) {
                    count += this.questions[i].weight;
                }
            }
            return count;
        });

        return responses.filter((response) => response > limit)
    }

}

const q1 = new AnswerKey(["a", "b", "c", "d", "e"], "b", 2);
const q2 = new AnswerKey(["a", "b", "c", "d", "e"], "c", 2);
const q3 = new AnswerKey(["a", "b", "c", "d", "e"], "d", 2);
const q4 = new AnswerKey(["a", "b", "c", "d", "e"], "a", 2);
const q5 = new AnswerKey(["a", "b", "c", "d", "e"], "b", 2);

const a1 = new Answer(["b", "c", "d", "a", "a"]);
const a2 = new Answer(["b", "d", "c", "c", "a"]);
const a3 = new Answer(["b", "e", "d", "a", "e"]);
const a4 = new Answer(["b", "c", "e", "b", "a"]);
const a5 = new Answer(["b", "c", "d", "a", "d"]);
const a6 = new Answer(["b", "c", "d", "a", "b"]);

const questions = [q1, q2, q3, q4, q5];
const answers = [a1, a2, a3, a4, a6];

const exam = new Exam(questions, answers);
exam.add(a5);

console.log(exam.avg());
console.log(exam.min());
console.log(exam.max());
console.log(exam.it(7));
console.log(exam.ig(7));