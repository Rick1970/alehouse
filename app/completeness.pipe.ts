import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe ({
  name: "empty",
  pure: false
})

export class CompletenessPipe implements PipeTransform {
  transform(input: Keg[], info) {
    var desiredCompleteness = info[0];
    var output: Keg[] = [];
    if(desiredCompleteness === "notDone") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].tapped === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "isDone") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].tapped === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
