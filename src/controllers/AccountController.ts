import { Account } from './../entities/Account';
import { getRepository } from 'typeorm';

export class AccountController {
  async create(request: Request, response: Response): Promise<any> {
    try {
      let account: Account = request.body;
      let repository = getRepository(Account);
      const accountFound = await repository.findOne({
        where: {
          cpf: account.cpf,
        },
      });
      if (accountFound) {
        accountFound.amount += account.amount;
        repository.save(accountFound);
        return await response.status(201).json(accountFound);
      }
      let newPermissao: Account = repository.create(account);
      console.log('achou', accountFound);
      const entity = Object.assign(new Account(), account);
      newPermissao = await repository.save(entity);
      console.log('entud', entity, account);
      return await response.status(201).json(newPermissao);
    } catch (error) {
      return await response.status(400).json(error.message);
    }
  }
}
/*   async get(request: Request, res: Response): Promise<any> {
    const test = getRepository(Filtros);
    const all = await test.find({});
    console.log(all[0].permissionario);
    return await res.json(all);
  }
}

await this.permissionsRepository.upsert(
  [
    {
      requesterId: permissionInput.requesterId,
      ownerId: permissionInput.ownerId,
      reference: permissionInput.reference,
    },
  ],
  {
    conflictPaths: ['requesterId', 'ownerId', 'reference'],
    skipUpdateIfNoValuesChanged: true,
  },
); */
