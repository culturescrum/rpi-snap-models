export { Pi3Model, ISnapModel } from './snapcraft/models';

import { ISnapModel, Pi3Model } from './snapcraft/models';

export const Pi3Defaults: ISnapModel = {
    type: 'model',
    authorityId: 'test-authority-id',
    brandId: 'test-brand-id',
    series: '16',
    model: 'test-model',
    architecture: 'ignored',
    gadget: 'ignored',
    kernel: 'ignored'
}

function createPi3Model(obj: object): Pi3Model {
    let snapModel: ISnapModel;
    snapModel = obj as ISnapModel;
    snapModel.timestamp = new Date().toISOString();
    return new Pi3Model(snapModel);
}

export { createPi3Model as CreatePi3 };
