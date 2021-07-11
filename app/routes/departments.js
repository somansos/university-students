import Route from '@ember/routing/route';

export default class DepartmentsRoute extends Route {
  model() {
    return ['Computer Science and Engineering','Electronics and Communication Engineering', 
            'Electrical and Electronics Engineering', 'Mechanical Engineering', 'Production Engineeting',
            'Civil Engineering', 'Architectural Engineering'];
  }
}
