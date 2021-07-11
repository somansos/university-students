import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class UniversityStudentsComponent extends Component {
  @action
  showSpecialization(specialization) {
    alert(`Specialization is ${specialization}!`);
  }
}