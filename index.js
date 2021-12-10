import fs from 'fs'

const exercises = {
}

const exercise = exercises[process.argv.slice(2)];

const lines = fs.readFileSync(exercise.inputPath, 'utf-8').split('\n')

const solution = exercise.resolve(lines)

console.log(solution);
