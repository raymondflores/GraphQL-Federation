import { User } from './entities/User'

export async function resolveUserReference(reference: Pick<User, 'id'>): Promise<User> {
  console.log('ref', reference)
  return { id: 1, name: 'ada' }
}
