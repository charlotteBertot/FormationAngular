import { Item } from '../../shared/interfaces/item.model';
import { State } from '../../shared/enums/state.enum';

export const COLLECTION: Item[] = [
  {
    id: 'a1',
    name: 'Chiot',
    reference: '1234',
    state: State.ALIVRER
  },
  {
    id: 'b1',
    name: 'Zag',
    reference: '5678',
    state: State.ENCOURS
  },
  {
    id: 'c1',
    name: 'Carlotta',
    reference: '9012',
    state: State.LIVREE
  }
];
