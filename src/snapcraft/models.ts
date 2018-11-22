
export interface ISnapModel {
    type: string;
    authorityId: string;
    brandId: string;
    series: string;
    model: string;
    architecture: string;
    gadget: string;
    kernel: string;
    timestamp?: string;
}
export class Pi3Model implements ISnapModel {
    public type: string;
    public authorityId: string;
    public brandId: string;
    public series: string;
    public model: string;
    public architecture: string;
    public gadget: string;
    public kernel: string;
    public timestamp?: string;

    constructor(obj: ISnapModel);
    constructor(authorityId: string, brandId: string, series: string, model: string);
    constructor() {
        this.type = 'model';
        this.architecture = 'armhf';
        this.gadget = 'pi3';
        this.kernel = 'pi2-kernel';
        if (arguments.length === 1) {
            this.authorityId = arguments[0].authorityId;
            this.brandId = arguments[0].brandId;
            this.series = arguments[0].series;
            this.model = arguments[0].model;
            this.timestamp = arguments[0].timestamp;
        } else {
            this.authorityId = arguments[0];
            this.brandId = arguments[1];
            this.series = arguments[2];
            this.model = arguments[3];
            this.timestamp = new Date().toISOString();
        }

        if (this.series === '16') {

        } else if (this.series === '18') {

        } else {
            throw new Error('Invalid snap series specified. Should be 16 or 18.')
        }
    }

    toJSON(): object {
        return {
            'type': this.type,
            'architecture': this.architecture,
            'gadget': this.gadget,
            'kernel': this.kernel,
            'authority-id': this.authorityId,
            'brand-id': this.brandId,
            'series': this.series,
            'model': this.model,
            'timestamp': this.timestamp,
        }
    }
}
