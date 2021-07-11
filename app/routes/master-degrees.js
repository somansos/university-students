import Route from '@ember/routing/route';

export default class MasterDegreesRoute extends Route {
  model() {
    return ['MTech', 'MCA', 'MBA'];
  }
}
