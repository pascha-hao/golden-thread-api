import {Entity, property, model} from '@loopback/repository';

@model()
export class payment extends Entity {
    @property({
        type: 'number',
        required: true,
        id: true
    })
    id?: number; 

    @property({
        type: 'number',
        required: true
    })
    user_id: number;

    @property({
        type: 'number',
        required: true
    })
    card_number: number;

    @property({
        type: 'string',
        required: true
    })
    expiration_date: string;

    @property({
        type: 'number',
        required: true
    })
    bank: number;
    
}