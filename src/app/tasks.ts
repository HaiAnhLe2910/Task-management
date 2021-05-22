import { Department } from './department';
import {Employee} from './employee';

export class Task {
  id: number;
  department_id:Department["id"];
  name: string;
  employees: Employee[];
}