import { observable } from 'mobx';
import { components } from '@octokit/openapi-types';

import { service } from './service';

export type Repository = components['schemas']['minimal-repository'];

export class ProjectModel {
  @observable
  list = [];

  async getList(...names: string[]) {
    for (const name of names) {
      const { body } = await service.get(`repos/${name}`);

      this.list.push(body);
    }

    return this.list;
  }
}

export default new ProjectModel();
