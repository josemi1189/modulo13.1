import Axios from "axios";
import { MovementsModel } from '@/pages/movement-list/model.movement';

const urlMovements = 'http://localhost:3000/movements';

console.log("urlMovements: ",urlMovements);
export const getMovements = (accountId: string): Promise<MovementsModel[]> => 
  Axios.get<MovementsModel[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data
  );
