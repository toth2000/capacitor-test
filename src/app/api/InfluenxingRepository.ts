import { Influenxing } from "../class/Influexning";


export interface User {
  id: number;
  username: string;
}

class InfluenxingRepository extends Influenxing<User> {
  collection = 'user';

  getMany() {
    return super.getMany();
  }

  get(id: string) {
    return super.get(id);
  }

  create(id: string, data: User) {
    return super.create(id, data);
  }

  update(id: string, data: User) {
    return super.update(id, data);
  }

  delete(id: string) {
    return super.delete(id);
  }
}

export default InfluenxingRepository;