import { AccountBlock as AccountBlockServer } from '../../../../../shared'
import { Account } from '../account/account.model'

export class AccountBlock implements AccountBlockServer {
  byAccount: Account
  accountBlocked: Account
  createdAt: Date | string

  constructor (block: AccountBlockServer) {
    this.byAccount = new Account(block.byAccount)
    this.accountBlocked = new Account(block.accountBlocked)
    this.createdAt = block.createdAt
  }
}