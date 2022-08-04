import { Extracts } from './../entities/Extracts';
import { Account } from './../entities/Account';
import { getRepository } from 'typeorm';

export class AccountController {
  async create(request: Request, response: Response): Promise<any> {
    try {
      let account: Account = request.body;
      let repositoryAccount = getRepository(Account);
      let newAccount: Account = repositoryAccount.create(account);
      let id, responseJson;
      const accountFound = await repositoryAccount.findOne({
        where: {
          cpf: account.cpf,
        },
      });
      if (accountFound) {
        accountFound.amount =
          request.body?.type == 'DEPOSITO'
            ? +accountFound.amount + account.amount
            : +accountFound.amount - account.amount;
        console.log(accountFound.amount);
        await repositoryAccount.save(accountFound);
        responseJson = accountFound;
        id = accountFound.id;
      } else {
        account.amount =
          request.body?.type == 'DEPOSITO' ? account.amount : -account.amount;
        newAccount = await repositoryAccount.save(account);
        responseJson = newAccount;
        id = newAccount.id;
      }

      let repositoryExtract = getRepository(Extracts);
      let extract: Extracts = {
        type: request.body?.type,
        accountId: id,
        amount: account.amount,
      };
      let newExtract = await repositoryExtract.save(extract);
      return await response.status(201).json(responseJson);
    } catch (error) {
      return await response.status(500).json(error.message);
    }
  }
}