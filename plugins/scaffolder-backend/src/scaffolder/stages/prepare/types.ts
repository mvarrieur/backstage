/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type { TemplateEntityV1alpha1 } from '@backstage/catalog-model';
import { Logger } from 'winston';
import { RemoteProtocol } from '../types';

export type PreparerBase = {
  /**
   * Given an Entity definition from the Service Catalog, go and prepare a directory
   * with contents from the remote location in temporary storage and return the path
   * @param template The template entity from the Service Catalog
   */
  prepare(
    template: TemplateEntityV1alpha1,
    opts?: { logger: Logger; workingDirectory?: string },
  ): Promise<string>;
};

export type PreparerBuilder = {
  register(protocol: RemoteProtocol, preparer: PreparerBase): void;
  get(template: TemplateEntityV1alpha1): PreparerBase;
};
