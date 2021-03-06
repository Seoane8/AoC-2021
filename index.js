import fs from 'fs'
import sonarSweep from './sonarSweep/index.js'
import dive from './dive/index.js'
import binaryDiagnostic from './binaryDiagnostic/index.js'
import giantSquib from './giantSquib/index.js'

const exercises = {
  1 : sonarSweep,
  2 : dive,
  3 : binaryDiagnostic,
  4 : giantSquib
}

const exercise = exercises[process.argv.slice(2)];

const lines = fs.readFileSync(exercise.inputPath, 'utf-8').split('\n')

const solution = exercise.resolve(lines)

console.log(solution)
