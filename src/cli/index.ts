import { program, Command } from 'commander';

import commands from './commands';
import * as logger from '../util/logger';
import { completions } from './ui/completions';

completions.init();

export function run(argv: string[]): void {
  process.on('unhandledRejection', (error: Error) => {
    if ((program as any).verbose) {
      console.error(error);
    } else {
      console.error(error.toString() + '; use --verbose for more details');
    }
  });
  try {
    program
      .name('cwsc')
      .version('0.1.0')
      .option('-v,--verbose', 'show verbose error logs')
      .description('Official CWScript compiler by Terran One');
    commands.forEach((cmd: Command) => {
      program.addCommand(cmd);
    });
    program.parse(argv);
  } catch (e) {
    console.error(e);
  }
}
